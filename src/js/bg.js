const backgroundURI = {
  1: 'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg',
  2: 'https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_1280.jpg',
  3: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
  4: 'https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_1280.jpg',
  5: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
  6: 'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg',
  7: 'https://cdn.pixabay.com/photo/2013/01/05/20/00/milky-way-74005_1280.jpg',
  8: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
  9: 'https://cdn.pixabay.com/photo/2016/10/25/12/28/iceland-1768744_1280.jpg',
  10: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_1280.jpg',
}

function paintingBackground() {
  const nthImage = Math.ceil(Math.random() * 10);
  wrap.style.background = `black url(${backgroundURI[nthImage]}) center center no-repeat`;
  wrap.style.backgroundSize ='cover';
  wrap.style.transition = 'ease-in 0.4s';
}

function init() {
  paintingBackground();
}

init();
