module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = 'Hello world';
  error("test");
  return element;
};