function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModal();
isModalClose();

function headerResize() {
  const block = document.querySelector('.header__items');
  const desc = document.querySelector('.header__wrapper');
  const mob = document.querySelector('.header__mob');

  if (block && desc && mob) {
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth <= 480) {
      mob.append(block);
    } else {
      desc.append(block);
    }
  }
}
headerResize();

window.addEventListener('resize', function () {
  headerResize();
});
