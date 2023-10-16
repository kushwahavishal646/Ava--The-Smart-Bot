export const downloadFileFromUrl = (url: string, fileName: string) => {
  fetch(url, { method: 'GET' })
    .then((res) => res.blob())
    .then((blob) => {
      const element = document.createElement('a');
      element.setAttribute('href', window.URL.createObjectURL(blob));
      element.setAttribute('download', fileName);
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    })
    .catch((err) => {
      console.error('err: ', err);
    });
};
