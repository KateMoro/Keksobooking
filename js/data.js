import {getRandomNumber} from './util.js';

const TITLE = [
  'Апартаменты-студио',
  'Апартаменты-студио с балконом',
  'Апартаменты с 1 спальней',
  'Апартаменты с 3 спальнями',
  'Апартаменты Делюкс',
  'Апартаменты с видом на сад',
  'Стандартные апартаменты',
  'Улучшенные апартаменты',
  'Двухместный номер с 1 кроватью',
  'Улучшенный трехместный номер',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const DESCRIPTION = [
  'Гостям предлагаются апартаменты с кондиционером и бесплатным Wi-Fi.',
  'Среди удобств полностью оборудованная кухня с микроволновой печью.',
  'Это любимая часть города среди наших гостей согласно независимым отзывам.',
  'По утрам для гостей сервируют континентальный завтрак.',
  'На территории обустроена детская игровая площадка.',
  'На территории обустроена частная парковка.',
  'К услугам гостей бассейн и ресторан.',
  'Гости, желающие ознакомиться с районом, могут отправиться на пешую или велосипедную прогулку.',
  'В собственной ванной комнате имеются тапочки и фен.',
  'Гости могут взять напрокат автомобиль и отправиться на прогулку по окрестностям.',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const Latitude = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const Longitude = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const POINTS = 5;

const Price = {
  MIN: 100,
  MAX: 1000,
};

const Rooms = {
  MIN: 1,
  MAX: 5,
};

const Guests = {
  MIN: 1,
  MAX: 10,
};

/**
 * Функция, возвращающая случайный элемент из переданного массива
 * @param {Array} elements
 * @returns {string} элемент массива со случайным индексом
 */
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

/**
 * Функция, возвращающая массив случайной длины из значений другого массива
 * @param {Array} arr
 * @returns {Array} часть переданного массива или массив полностью, элементы массива не повторяются
 */
const getRandomArray = (arr) => {
  const rand = getRandomNumber(1, arr.length);
  const newArr = [];
  while (newArr.length !== rand) {
    const elem = arr[getRandomNumber(0, arr.length-1)];
    if (newArr.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  }
  return newArr;
};

/**
 *Функция, возвращающая адрес изображения
 * @returns {string} адрес изображения вида img/avatars/user{{xx}}.png
 */
const createNumber = () => {
  const rand = getRandomNumber(1, 10);
  return (rand < 10) ? `img/avatars/user0${rand}.png` : `img/avatars/user${rand}.png`;
};

/**
 * Функция для создания объекта author
 * @returns {object} описывает автора
 */
const createAuthor = () => ({
  avatar: createNumber(),
});

/**
 * Функция для создания объекта offer
 * @returns {object} содержит информацию об объявлении
 */
const createOffer = () => ({
  title: getRandomArrayElement(TITLE),
  address: `${getRandomNumber(Latitude.MIN, Latitude.MAX, POINTS)}, ${getRandomNumber(Longitude.MIN, Longitude.MAX, POINTS)}`,
  price: getRandomNumber(Price.MIN, Price.MAX),
  type: getRandomArrayElement(TYPE),
  rooms: getRandomNumber(Rooms.MIN, Rooms.MAX),
  guests: getRandomNumber(Guests.MIN, Guests.MAX),
  checkin: getRandomArrayElement(TIME),
  checkout: getRandomArrayElement(TIME),
  features: getRandomArray(FEATURES),
  description: getRandomArrayElement(DESCRIPTION),
  photos: getRandomArray(PHOTOS),
});

/**
 * Функция для создания объекта location
 * @returns {object} местоположение в виде географических координат, cостоит из двух полей: широта и долгота
 */
const createLocation = () => ({
  lat: getRandomNumber(Latitude.MIN, Latitude.MAX, POINTS),
  lng: getRandomNumber(Longitude.MIN, Longitude.MAX, POINTS),
});

/**
 * Функции для создания сгенерированного объекта
 * @returns {object}
 */
const createAd = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createLocation(),
});

/**
 * Функция для создания массива из сгенерированных объектов
 * @param {number} count
 * @returns {Array}
 */
const similarAds = (count) => Array(count).fill(null).map(() => createAd());

export {similarAds};
