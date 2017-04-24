/*global angular*/
(function() {
  function GalleriesCtrl(Fixtures) {
    this.galleries = Fixtures.galleries;
    this.currentGallery = false;
    this.currentPicture = false;
    this.galleryName = false;
    this.setGallery = function(gallery, name)
    {
        this.currentGallery = gallery;
        this.galleryName = name;
    };
    this.setPicture = function(image)
    {
      this.currentPicture = image;
    };
    this.unsetGallery = function(gallery)
    {
        this.currentGallery = false;
    };
    this.unsetPicture = function(image)
    {
      this.currentPicture = false;
    };
  }
  angular
    .module('jessica_site')
    .controller('GalleriesCtrl', ['Fixtures', GalleriesCtrl]);
})();