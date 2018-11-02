import Vue from 'vue';

let scrollPane;
let handleScroll;
let handleResize;

Vue.directive('sticky', {
  inserted(el) {
    scrollPane = document.querySelector('.main-wrapper');

    const removeStickyStyle = () => {
       el.classList.remove('sticky')
    };

    const toggleStickStyle = () => {
      const scrollPaneRect = scrollPane.getBoundingClientRect();
      const stickyObjRect = el.getBoundingClientRect();

      if (scrollPane.scrollTop > stickyObjRect.top) {
        if (!el.classList.contains('sticky')) {
          const elWidth = el.getBoundingClientRect().width;
          console.log(elWidth)
          el.classList.add('sticky');
          el.style.width = `${elWidth}px`;
          el.style.top = `${scrollPaneRect.top}px`;
          el.style.left = `${el.parentNode.getBoundingClientRect().left}px`;
        }
      } else {
        removeStickyStyle();
      }
    };

    handleScroll = () => {
      toggleStickStyle()
    };
    handleResize = () => {
      el.style.width = `${el.parentNode.getBoundingClientRect().width}px`;
    };
    scrollPane.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize)
},
  unbind() {
    scrollPane.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  }
});
