import Vue from 'vue';

let $scrollPane;
let handleScroll;

Vue.directive('sticky', {
  inserted(el, binding) {
    const { value } = binding;
    $scrollPane = document.querySelector(value);
    const $stickyEle = el;
    const scrollPaneRect = $scrollPane.getBoundingClientRect();
    const stickyOriginPosition = $stickyEle.style.position;

    handleScroll = () => {
      const scrollTop = $scrollPane.scrollTop;
      const stickyEleRect = $stickyEle.getBoundingClientRect();
      console.log(stickyEleRect.top, scrollTop,  scrollPaneRect.top);
      if (stickyEleRect.top <= scrollPaneRect.top) {
        $stickyEle.style.position = 'fixed';
        $stickyEle.style.top = scrollPaneRect.top + 'px';
        $stickyEle.style.left = stickyEleRect.left + 'px';
      } else {
        $stickyEle.style.position = stickyOriginPosition;
      }
    };

    $scrollPane.addEventListener('scroll', handleScroll)
    // const removeStickyStyle = () => {
    //    el.classList.remove('sticky')
    // };
    //
    // const toggleStickStyle = () => {
    //   const scrollPaneRect = scrollPane.getBoundingClientRect();
    //   const stickyObjRect = el.getBoundingClientRect();
    //
    //   if (scrollPane.scrollTop > stickyObjRect.top) {
    //     if (!el.classList.contains('sticky')) {
    //       const elWidth = el.getBoundingClientRect().width;
    //       console.log(elWidth)
    //       el.classList.add('sticky');
    //       el.style.width = `${elWidth}px`;
    //       el.style.top = `${scrollPaneRect.top}px`;
    //       el.style.left = `${el.parentNode.getBoundingClientRect().left}px`;
    //     }
    //   } else {
    //     removeStickyStyle();
    //   }
    // };
    //
    // handleScroll = () => {
    //   toggleStickStyle()
    // };
    // handleResize = () => {
    //   el.style.width = `${el.parentNode.getBoundingClientRect().width}px`;
    // };
    // scrollPane.addEventListener('scroll', handleScroll);
    // window.addEventListener('resize', handleResize)
},
  unbind() {
    $scrollPane.removeEventListener('scroll', handleScroll);
    handleScroll = null;
  }
});
