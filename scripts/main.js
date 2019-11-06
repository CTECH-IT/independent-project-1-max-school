// Put your JavaScript here
const REST_IMAGE_SELECTOR = '[data-image-role="target"]'
const HIDDEN_PROPERTY_CLASS = 'hidden-prop'
const FOOD_IMAGE_SELECTOR = '[data-image-role="trigger"]'

function setDetails(imageUrl) {
  'use strict';
  let restImage = document.querySelector(REST_IMAGE_SELECTOR);
  restImage.setAttribute('src', imageUrl);
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  let thumbnails = document.querySelectorAll(FOOD_IMAGE_SELECTOR);
  let thumbnailArray = [].slice.call(thumbnails); //convert the NodeList to an array
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  let thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
