import Vue from 'vue';
let $selectWrap;
let handleScroll;

Vue.directive('scrollLoadSelect', {
  inserted(el, binding, vnode) {
    const { value } = binding;
    let loading = false;

    $selectWrap = el.querySelector('.el-scrollbar__wrap');

    handleScroll = () => {
      if ($selectWrap.scrollHeight - $selectWrap.scrollTop <= $selectWrap.clientHeight && !loading){
        loading = true;
        let $selectLoadWrap = document.createElement('div');
        $selectLoadWrap.classList.add('el-select__Load');
        let $selectLoadIcon = document.createElement('span');
        $selectLoadIcon.classList.add('el-icon-loading');
        $selectLoadWrap.appendChild($selectLoadIcon);
        $selectWrap.appendChild($selectLoadWrap);
        value().then(() => {
          $selectWrap.removeChild($selectLoadWrap);
          loading = false;
        }).catch(() => {
          $selectWrap.removeChild($selectLoadWrap);
          loading = false;
        })
      }
    };

    $selectWrap.addEventListener('scroll', handleScroll);
  },
  unbind() {
    $selectWrap.removeEventListener('scroll', handleScroll);
  }
});
