// Put your JavaScript here
const REST_IMAGE_SELECTOR = '[data-image-role="target"]'
const HIDDEN_PROPERTY_CLASS = 'hidden-prop'

function moveRest() {
  'use strict'
  document.querySelector(REST_IMAGE_SELECTOR).classList.add(HIDDEN_PROPERTY_CLASS);
}

function addRestClickHandler(thumb) {
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    moveRest();
  })
}
