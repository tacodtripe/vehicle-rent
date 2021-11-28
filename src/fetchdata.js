// for comments popout function
import Comments from './app/comments';

const comments = new Comments();
const pop = (cars) => {
  const modal = document.querySelector('#modalContainer');
  const btn = document.querySelectorAll('.comments');
  const header = document.querySelector('.navbar');
  const footer = document.querySelector('#footerid');
  const bodysection = document.querySelector('#itemsContainer');
  const popupmodal = (id) => {
    cars.forEach((element) => {
      if (element.Model_ID === id) {
        modal.innerHTML = `
                <div class="modal container">
                    <div class="car-header justify-end d-flex">
                        <button class="close"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-header-img d-flex">
                        <img src="./assets/images/${id}.jpg" alt="${element.Model_Name}">
                        <h2>${element.Model_Name}</h2>
                    </div>
                    <div class="modal-description d-flex">
                        <div class="left">
                            <p> <span class="description-header">Make ID:</span>${element.Make_ID}  </p>
                            <p> <span class="description-header">Make Name:</span>${element.Make_Name} </p>
                        </div>
                        <div class="right">
                            <p> <span class="description-header">Model ID:</span>${element.Model_ID} </p>
                            <p> <span class="description-header">Model Name:</span>${element.Model_Name} </p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 row text-center">
                            <h3>Comments <span id="comments-count"></span></h3>
                            <ul id="comments-ul" class="d-flex justify-center flex-col">
                            </ul>
                        </div>
                        <div class="text-center col-12 commentCounter row" id="${element.Model_Name}comments"></div>
                        <form class="col-12 row w-50" action="POST">
                            <input name= "name" type="text" id="input-name" placeholder="Your name" required>
                            <textarea name="comment" id="comment" cols="30" rows="10" required></textarea>
                            <span id = "alert" class="text-start"> </span>
                            <button id="submit-comment" class="submit-comment" data="${element.Model_ID}"> Submit</button>
                        </form>
                    </div>
                </div>
                `;
        const exit = document.querySelector('.fa-times');
        exit.addEventListener('click', () => {
          modal.classList.add('hidden');
          header.classList.remove('hidden');
          footer.classList.remove('hidden');
          bodysection.classList.remove('hidden');
        });

        const submit = document.querySelector('.submit-comment');
        submit.addEventListener('click', (e) => {
          e.preventDefault();
          const getName = document.querySelector('#input-name');
          const getComment = document.querySelector('#comment');
          comments.commentItem(element.Model_Name, getName.value, getComment.value);
          setTimeout(() => { popupmodal(id).reload(); }, 500);
        });

        const commentcontainer = document.getElementById(`${element.Model_Name}comments`);
        comments.getComments(element.Model_Name)
          .then((respo) => {
            let cntcomments = 0;
            respo.forEach((comm) => {
              if (typeof comm.username === 'string') {
                const storecomment = document.createElement('div');
                cntcomments += 1;
                storecomment.classList.add('col-12');
                storecomment.innerHTML = `
                                    <div>
                                        userName: ${comm.username}
                                    </div>
                                    <div>
                                        userComment: ${comm.comment}
                                    </div>
                                `;
                commentcontainer.appendChild(storecomment);
              }
            });
            const commcount = document.getElementById('comments-count');
            commcount.innerText = cntcomments;
          });
      }
    });
  };
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      const id = parseInt(btn[i].getAttribute('id'), 10);
      popupmodal(id);
      modal.classList.remove('hidden');
      footer.classList.add('hidden');
      bodysection.classList.add('hidden');
      header.classList.add('hidden');
    });
  }
};

export default pop;