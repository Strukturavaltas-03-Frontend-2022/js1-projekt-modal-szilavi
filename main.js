'use strict'

const btnModal = document.querySelector(".btn__modal");
const modalShow = document.querySelector(".modal__background")
const modalHide = document.querySelector(".modal__window__X")
const modalHide2 = document.querySelector(".btn__danger")
const modalWindow = document.querySelector("body > div > div")
const modalBackground = document.querySelector("body > div")

btnModal.addEventListener('click', function () {
    modalShow.classList.add('modal__background--active');
});

modalHide.addEventListener('click', function() {
    modalShow.classList.remove('modal__background--active');
})

modalHide2.addEventListener('click', function() {
    modalShow.classList.remove('modal__background--active');
})

/*const btnModal = document.querySelector(".btn__modal");
const modalShow = document.querySelector(".modal__background")
const modalHide = document.querySelectorAll(".modal__window__X, .btn__danger")

btnModal.addEventListener('click', function () {
    modalShow.classList.add('modal__background--active');
});

modalHide.addEventListener('click', function() {
    modalShow.classList.remove('modal__background--active');
})*/



//Ami még hiányzik: ha kikattintok akkor még nem tűnik el.