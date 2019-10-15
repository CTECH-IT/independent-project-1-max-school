// Put your JavaScript here
const REST_IMAGE_SELECTOR = '[data-image-role="target"]'
const HIDDEN_PROPERTY_CLASS = 'hidden-prop'
const FOOD_IMAGE_SELECTOR = '[data-image-role="trigger"]'

function setDetails(imageUrl) {
  'use strict';
  let restImage = document.querySelector(REST_IMAGE_SELECTOR);
  restImage.setAttribute('src', imageUrl);
}
