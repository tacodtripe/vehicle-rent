const modal = document.querySelector('#modal');
const btn = document.querySelectorAll('#comments');
const header = document.querySelector('#headclass');
const popupmodal = async (id) => {
	const carapiurl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/tesla?format=json`;
	const cars = await fetch(carapiurl).then((response) => response.json()).then((data) => data.Results);
	cars.forEach((element) => {
		if (element.Model_ID == id) {
			modal.innerHTML = `
            <div class="modal">
                <div class="car-header justify-end d-flex">
                    <button class="close"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-header-img d-flex">
                    <img src="${id}.jpg" alt="${element.Model_Name}">
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
            </div>
			`;
            const exit = document.querySelector('.fa-times');
            exit.addEventListener('click', () => {
                modal.classList.add('hidden');
                header.classList.remove('hidden');
            });
        }
    });
};

for (let i=0; i<btn.length; i+=1) {
    btn[i].addEventListener('click', () => {
        const id = btn[i].getAttribute('data')
        popupmodal(id)
        modal.classList.remove('hidden');
        header.classList.add('hidden');
    })
}