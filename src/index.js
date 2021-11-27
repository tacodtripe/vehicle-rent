/* eslint-disable no-unused-vars, no-restricted-globals */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import pop from './fetchdata.js';
import Api from './app/api';
import Likes from './app/likes';

const api = new Api();
const likes = new Likes();
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));
const itemsContainer = document.querySelector('#itemsContainer');
const carNumber = document.querySelector('#carNumber');
const addItem = (carName, carID) => {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('col-sm-12', 'col-md-6', 'col-lg-4', 'row', 'justify-content-center');
  itemsContainer.appendChild(itemContainer);

  const itemImg = document.createElement('img');
  itemImg.setAttribute('src', `assets/images/${carID}.jpg`);
  itemImg.setAttribute('width', '100');
  itemImg.setAttribute('height', '200');
  itemImg.classList.add('row');
  itemContainer.appendChild(itemImg);

  const itemInfo = document.createElement('div');
  itemInfo.classList.add('row');
  itemContainer.appendChild(itemInfo);

  const itemInfoFr = document.createElement('div');
  itemInfoFr.classList.add('row');
  itemInfo.appendChild(itemInfoFr);
  const itemName = document.createElement('p');
  itemName.classList.add('col-10');
  itemName.innerText = carName;
  itemInfoFr.appendChild(itemName);
  const likeButton = document.createElement('i');
  likeButton.classList.add('bi', 'bi-heart', 'col-2');
  likeButton.id = carName;
  itemInfoFr.appendChild(likeButton);

  likeButton.addEventListener('click', () => {
    likes.likeItem(likeButton.id);
    setTimeout(() => { location.reload(); }, 500);
  });

  const itemInfoSr = document.createElement('div');
  itemInfoSr.classList.add('row', 'justify-content-end');
  itemInfo.appendChild(itemInfoSr);
  const likeCounter = document.createElement('span');
  likeCounter.classList.add('col-3', 'likeCounter');
  likeCounter.id = `${carName}likes`;
  itemInfoSr.appendChild(likeCounter);

  const commentsButton = document.createElement('span');
  commentsButton.classList.add('row', 'comments', 'justify-content-center', 'border-black', 'black-shadow', 'w-50', 'mb-1');
  commentsButton.id=carID;
  commentsButton.textContent = 'Comments';
  itemContainer.appendChild(commentsButton);

  const reservationsButton = document.createElement('span');
  reservationsButton.classList.add('row', 'justify-content-center', 'border-black', 'black-shadow', 'w-75', 'mb-3');
  reservationsButton.textContent = 'Reservations';
  itemContainer.appendChild(reservationsButton);
};

const countCars = () => itemsContainer.childElementCount;

api.getData()
  .then((data) => {
    data.Results.forEach((e) => {
      addItem(e.Model_Name, e.Model_ID);
    });
    pop(data.Results)
    carNumber.innerText = `Cars(${countCars()})`;
    
    likes.getLikes()
      .then((response) => {
        response.forEach((l) => {
          const updateLikes = document.getElementById(`${l.item_id}likes`);
          if (updateLikes) {
            updateLikes.innerText = `${l.likes} likes`;
          }
        });
      });
  });
