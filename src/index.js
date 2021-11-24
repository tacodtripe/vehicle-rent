import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const itemsContainer = document.querySelector('#itemsContainer');

const addItem = () => {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('col-sm-12', 'col-md-6', 'col-lg-4', 'row', 'justify-content-center');
  itemsContainer.appendChild(itemContainer);

  const itemImg = document.createElement('img');
  itemImg.setAttribute('src', 'assets/images/tesla-model-x.jpg');
  itemImg.setAttribute('width', '100');
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
  itemName.innerText = 'Demo name';
  itemInfoFr.appendChild(itemName);
  const likeButton = document.createElement('i');
  likeButton.classList.add('bi', 'bi-heart', 'col-2');
  itemInfoFr.appendChild(likeButton);

  const itemInfoSr = document.createElement('div');
  itemInfoSr.classList.add('row', 'justify-content-end');
  itemInfo.appendChild(itemInfoSr);
  const likeCounter = document.createElement('span');
  likeCounter.classList.add('col-3');
  likeCounter.textContent = '10 likes';
  itemInfoSr.appendChild(likeCounter);

  const commentsButton = document.createElement('span');
  commentsButton.classList.add('row', 'justify-content-center', 'border-black', 'black-shadow', 'w-50', 'mb-1');
  commentsButton.textContent = 'Comments';
  itemContainer.appendChild(commentsButton);

  const reservationsButton = document.createElement('span');
  reservationsButton.classList.add('row', 'justify-content-center', 'border-black', 'black-shadow', 'w-75', 'mb-3');
  reservationsButton.textContent = 'Reservations';
  itemContainer.appendChild(reservationsButton);
};

addItem();
addItem();
addItem();
addItem();
addItem();