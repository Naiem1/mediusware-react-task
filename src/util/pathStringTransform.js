export const pathStringTransform = (pathString) => {
  const transformedStr = pathString.replace('/', '');
  return transformedStr.toUpperCase();
}