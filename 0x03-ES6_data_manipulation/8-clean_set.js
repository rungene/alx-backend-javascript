export default function cleanSet(set, startString) {
  let result = '';

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      result += element.substring(startString.length) + '-';
    }
  });
  // if not an empty set remove the last undescore from the result
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}
