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

export function optionsMerger(instance, props) {
  const validPropOptions = instance.options && instance.options.constructor === Object ? objVerify(instance.options) : {};
  const validProps = props ? objVerify(props) : {};

  return {...validPropOptions, ...validProps}
}

// export function propsBinder(vueElement, leafletElement, props, options) {
//   for (const key in props) {
//     const setMethodName = 'set' + capitalizeFirstLetter(key);
//     const deepValue = (props[key].type === Object) ||
//       (props[key].type === Array) ||
//       (Array.isArray(props[key].type));
//     if (props[key].custom && vueElement[setMethodName]) {
//       vueElement.$watch(key, (newVal, oldVal) => {
//         vueElement[setMethodName](newVal, oldVal);
//       }, {
//         deep: deepValue
//       });
//     } else if (setMethodName === 'setOptions') {
//       vueElement.$watch(key, (newVal, oldVal) => {
//         setOptions(leafletElement, newVal);
//       }, {
//         deep: deepValue
//       });
//     } else if (leafletElement[setMethodName]) {
//       vueElement.$watch(key, (newVal, oldVal) => {
//         leafletElement[setMethodName](newVal);
//       }, {
//         deep: deepValue
//       });
//     }
//   }
// };