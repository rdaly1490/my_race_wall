const sliderImages = document.querySelectorAll('.slide-in');
const loginBtn = document.querySelector('.login');
const createBtn = document.querySelector('.create');
const loginModal = document.querySelector('.login-modal');
const createModal = document.querySelector('.create-modal');

function debounce(func, wait = 15, immediate = true) {
    if (window.innerWidth <= 768) return;
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

function displayModal(isLoginModal) {
    const modalToToggleOn = isLoginModal ? loginModal : createModal;
    const modalToToggleOff = isLoginModal ? createModal : loginModal;
    if (modalToToggleOff.classList.contains('active')) {
        modalToToggleOff.classList.remove('active');
    }
    modalToToggleOn.classList.toggle('active');
}

window.addEventListener('scroll', debounce(checkSlide));
loginBtn.addEventListener('click', displayModal.bind(null, true));
createBtn.addEventListener('click', displayModal.bind(null, false));