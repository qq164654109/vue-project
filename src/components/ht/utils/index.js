export const DEFAULT_IMAGES = [
  {
    name: 'default-node',
    src: 'static/ht/images/node-icon.png'
  }
];

export function objVerify(obj, excludeProps = []) {
  let result = {};
  for (let key in obj) {
    const val = obj[key];
    if (val !== null && val !== undefined && !excludeProps.includes(val)) {
      result[key] = val
    }
  }
  return result;
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

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