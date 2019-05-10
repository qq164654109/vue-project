import { setOptions } from 'leaflet';

export const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const ICON_DEFAULT = 'static/images/map/marker-icon.png';

export function objVerify(obj) {
  let result = {};
  for (let key in obj) {
    const val = obj[key];
    if (val !== null && val !== undefined) {
      result[key] = val
    }
  }
  return result;
}

export function optionsMerger(vueInstance, props) {
  const validPropOptions = vueInstance.options && vueInstance.options.constructor === Object ? objVerify(vueInstance.options) : {};
  const validProps = props ? objVerify(props) : {};

  return {...validPropOptions, ...validProps}
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function propsWatchBind(vueInstance, layerInstance) {
  const props = vueInstance.$options.propsData;
  for (const key in props) {
    const methodName = 'set' + capitalizeFirstLetter(key);
    const isObj = (props[key] instanceof  Object) || (props[key] instanceof Array);

    if (!!vueInstance[methodName]) {
      vueInstance.$watch(key, (newVal, oldVal) => {
        vueInstance[methodName](newVal, oldVal)
      }, {deep: isObj})
    } else if (methodName === 'setOptions') {
      vueInstance.$watch(key, (newVal, oldVal) => {
        setOptions(layerInstance, newVal)
      }, {deep: isObj})
    } else if (!!layerInstance[methodName]) {
      vueInstance.$watch(key, (newVal, oldVal) => {
        layerInstance[methodName](newVal)
      }, {deep: isObj})
    }
  }
}

export function objToStyleStr(obj) {
  let styleStr = '';
  for (const key in obj) {
    let pre = key.replace(/[A-Z]/g, function (match) {
      return "-" + match.toLowerCase();
    });
    styleStr += `${pre}:${obj[key]};`
  }
  return styleStr;
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function() {
    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
    let last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = +new Date();
    // 第一次调用该方法时，且immediate为true，则调用func函数
    let callNow = immediate && !timeout;
    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};