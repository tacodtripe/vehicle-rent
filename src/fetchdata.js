//for comments popout function
const pop = (cars) => {
    const modal = document.querySelector('#modalContainer');
    const btn = document.querySelectorAll('.comments');
    const header = document.querySelector('.navbar');
    const footer = document.querySelector('#footerid');
    const bodysection = document.querySelector('#itemsContainer')
    const popupmodal = (id) => {
        //const carapiurl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/tesla?format=json`;
        //const cars = await fetch(carapiurl).then((response) => response.json()).then((data) => data.Results);
        cars.forEach((element) => {
            console.log(element)
            if (element.Model_ID == id) {
                console.log('just before modal.innerHTML')
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
                            <h3>Comments <span id="comments-count">0</span></h3>
                            <ul id="comments-ul" class="d-flex justify-center flex-col">
                            </ul>
                        </div>
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
            }
        });
    };
    for (let i=0; i<btn.length; i+=1) {
        btn[i].addEventListener('click', () => {
            const id = btn[i].getAttribute('id')
            console.log('before popupmodal call')
            popupmodal(id)
            console.log('after popupmodal call')
            modal.classList.remove('hidden');
            footer.classList.add('hidden');
            bodysection.classList.add('hidden');
            header.classList.add('hidden');
        })
    }
}



export default pop;