import Vue from 'vue';

let $dialogHeader;
let handleMousedown;

Vue.directive('drag-dialog', {
  inserted(el) {
    const $dialog = el.querySelector('.el-dialog');

    $dialogHeader = el.querySelector('.el-dialog__header');
    $dialogHeader.classList.add('draggable');

    handleMousedown = function(e) {
      let mouseInDialogPos = {
        x: e.pageX - $dialog.offsetLeft,
        y: e.pageY - $dialog.offsetTop
      };

      function handleMousemove(e) {
        let mouseInPagePos = {
          x: e.pageX,
          y: e.pageY
        };
        let moveMarginLeft = mouseInPagePos.x - mouseInDialogPos.x;
        let moveMarginTop = mouseInPagePos.y - mouseInDialogPos.y;
        let maxMarginLeft = el.clientWidth - $dialog.clientWidth;
        let maxMarginTop = el.clientHeight - $dialog.clientHeight;

        if (moveMarginLeft < 0) {
          $dialog.style.marginLeft = 0
        } else if (moveMarginLeft > maxMarginLeft) {
          $dialog.style.marginLeft =`${maxMarginLeft}px`
        } else {
          $dialog.style.marginLeft = `${moveMarginLeft}px`;
        }

        if (moveMarginTop < 0) {
          $dialog.style.marginTop = 0
        } else if (moveMarginTop >  maxMarginTop) {
          $dialog.style.marginTop =`${maxMarginTop}px`
        } else {
          $dialog.style.marginTop = `${moveMarginTop}px`;
        }
        e.preventDefault();
      }

      function handleMouseup() {
        document.removeEventListener('mousemove', handleMousemove);
        document.removeEventListener('mouseup', handleMouseup);
      }

      document.addEventListener('mousemove', handleMousemove);
      document.addEventListener('mouseup', handleMouseup);
      e.preventDefault();
    };

    $dialogHeader.addEventListener('mousedown', handleMousedown);
  },
  unbind() {
    $dialogHeader.removeEventListener('mousedown', handleMousedown);
  }
});
