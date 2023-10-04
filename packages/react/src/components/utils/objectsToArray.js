export default function objectsToArray(object) {
  let result = [];

  Object.values(object).forEach((item) => {
    if (typeof item === 'string') {
      result = [...result, item];
    } else if (typeof item === 'object') {
      result = [...result, ...objectsToArray(item)];
    }
    return undefined;
  });

  return result;
}
