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

export function optionsMerger(instance, options) {
  const validProps = objVerify(instance.$props);
  const validPropOptions = instance.options && instance.options.constructor === Object ? objVerify(instance.options) : {};
  const validOptions = options ? objVerify(options) : {};

  return {...validPropOptions, ...validProps, ...validOptions}
}