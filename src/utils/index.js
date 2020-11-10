export const createMarkup = (content) => {
  return { __html: content };
};

export const id = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9);
};

export const webpIsSupported = async () => {
  // If the browser doesn't has the method createImageBitmap, you can't display webp format
  // eslint-disable-next-line no-restricted-globals
  if (!self.createImageBitmap) return false;

  // Base64 representation of a white point image
  const webpData =
    "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";

  // Retrieve the Image in Blob Format
  const blob = await fetch(webpData).then((response) => response.blob());

  // If the createImageBitmap method succeeds, return true, otherwise false
  return createImageBitmap(blob)
    .then((_result) => true)
    .catch((_error) => false);
};

export default {
  id,
  createMarkup,
  webpIsSupported,
};
