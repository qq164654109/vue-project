import Vue from 'vue';

Vue.directive('lazyLoadSelect', {
  inserted(el, binding) {
    const $selectList = el.querySelector('.el-select-dropdown__list');
    const { value } = binding;

    let loading = false;
    let $selectItem = document.createElement('li');
    let $selectTxt = document.createElement('span');

    $selectItem.classList.add('el-select-dropdown__load');
    $selectTxt.innerHTML = '加载更多';
    $selectItem.appendChild($selectTxt);
    $selectItem.onclick = function() {
      if (!loading) {
        loading = true;
        $selectTxt.innerHTML = '';
        $selectTxt.classList.add('el-icon-loading');
        value().then(() => {
          $selectTxt.classList.remove('el-icon-loading');
          $selectTxt.innerHTML = '加载更多';
          $selectList.removeChild($selectItem);
          $selectList.appendChild($selectItem);
          loading = false
        }).catch(() => {
          $selectTxt.classList.remove('el-icon-loading');
          $selectTxt.innerHTML = '加载更多';
          loading = false
        })
      }
      };

    $selectList.appendChild($selectItem);
  }
});
