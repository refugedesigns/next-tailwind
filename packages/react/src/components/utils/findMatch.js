export default function findMatch(data, find, defaultValue) {
  const result = data.findIndex((el) => el === find);

  return result >= 0 ? find : defaultValue;
}
