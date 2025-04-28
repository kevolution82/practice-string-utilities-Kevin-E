// stringUtils.js assignment

function capitalize(str) {
    if (!str || typeof str !== 'string') {
      return '';
    }
    const first = str[0].toUpperCase();
    const rest = str.slice(1);
    return first + rest;
  }
  
  function reverse(str) {
    if (!str || typeof str !== 'string') {
      return '';
    }
    return str.split('').reverse().join('');
  }
  
  function contains(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') {
      return false;
    }
    return str.indexOf(search) !== -1;
  }
  
  module.exports = {
    capitalize,
    reverse,
    contains
  };
  