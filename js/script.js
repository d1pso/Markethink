const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const burgerIcon = document.querySelector('.header__burger');
const burgerBody = document.querySelector('.header__body');

// TABS

tabButtons.forEach((item) => {
    item.addEventListener('click', function(event) {
        let tabContent = document.querySelector('#' + item.dataset.button);

        tabContents.forEach((item) => {
            if (item.classList.contains('tab-content--active')) {        
                item.classList.remove('tab-content--active')
            }
        })

        tabButtons.forEach((item) => {
            if (item.classList.contains('tab-button--active')) {            
                item.classList.remove('tab-button--active')
            }
        })
        
        item.classList.add('tab-button--active');
        tabContent.classList.add('tab-content--active')
    })
})


// BURGER

burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('header__burger--active');
    document.body.classList.toggle('no-scroll');
    burgerBody.classList.toggle('header__body--active')
})