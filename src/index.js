import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */

const brandFilter = (brand) => {
  let result = goods.filter(function (item) {
    return item.brand === brand;
  });

  return result;
};

/**
 * @param {string} color
 * @returns {*}
 */

const colorFilter = (color) => {
  let result = goods.filter(function (item) {
    return item.color === color;
  });

  return result;
};

/**
 * @param {string} model
 * @returns {*}
 */

const modelFilter = (model) => {
  let result = goods.filter(function (item) {
    return item.model === model;
  });

  return result;
};

/**
 * @param {number} memory
 * @returns {*}
 */

const memoryFilter = (memory) => {
  let result = goods.filter(function (item) {
    return item.memory === memory;
  });

  return result;
};

/**
 * @param {number} price
 * @returns {*}
 */

const priceFilter = (price) => {
  let result = goods.filter(function (item) {
    return item.price === price;
  });

  return result;
};

/**
 * @param {string} country
 * @returns {*}
 */

const countryFilter = (country) => {
  let result = goods.filter(function (item) {
    return item.country === country;
  });

  return result;
};

/**
 * @param {string} os
 * @returns {*}
 */

const osFilter = (os) => {
  let result = goods.filter(function (item) {
    return item.os === os;
  });

  return result;
};

/**
 * @param {number} from
 * @param {number} to
 */

const rangeFilter = (from, to) => {
  let result = goods.filter(function (item) {
    return item.price <= to && item.price >= from;
  });

  return result;
};

const minPriceReducer = () => {
  let result = goods.reduce(function (prev, current) {
    if (prev.price < current.price) {
      return prev;
    } else {
      return current;
    }
  });

  return result.price;
};

const maxPriceReducer = () => {
  let result = goods.reduce(function (prev, current) {
    if (prev.price > current.price) {
      return prev;
    } else {
      return current;
    }
  });

  return result.price;
};

const toMaxSorter = () => {
  let result = goods.sort(function (a, b) {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  });

  return result;
};

const toMinSorter = () => {
  let result = goods.sort(function (a, b) {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });

  return result;
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
