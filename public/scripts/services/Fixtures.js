/*global angular*/
(function() {
  function Fixtures($http, $q) {
    var Fixtures = {};
    var nature = {
      galleryArt: 'assets/images/FallLeaf_10x11.JPG',
      galleryMembers: [
        { 
            title: 'Fall Leaf',
            artURL: 'assets/images/FallLeaf_10x11.JPG', 
            discription: ' ',
            where:" ",
            size: '10x11',
            price: ' '
        },
        { 
            title: 'Autumn Romance',
            artURL: 'assets/images/AutumnRomance_16x20.jpg',  
            discription: ' ',
            where:" ",
            size: '16x20',
            price: ' '
        },
        { 
            title: 'Pink Rose',
            artURL: 'assets/images/PinkRose_11x15.JPG', 
            discription: ' ',
            where:" ",
            size: '11x15',
            price: ' '
        }
      ]
    };
 
    var portraits = {
      galleryArt: 'assets/images/Angela_11x14.JPG',
      galleryMembers: [
        { 
            title: 'Angela',
            artURL: 'assets/images/Angela_11x14.JPG', 
            discription: '',
            where:"",
            size: '11x14',
            price: ' '
        },
        { 
            title: 'Hebe',
            artURL: 'assets/images/hebe_11x14.JPG', 
            discription: ' ',
            where:" ",
            size: '11x14',
            price: ' '
        },
        { 
            title: 'Ro+Nick', 
            artURL: 'assets/images/Ro+Nick_16x18.JPG', 
            discription: ' ',
            where:" ",
            size: '16x18',
            price: ' '
        },
        { 
            title: 'Taylor', 
            artURL: 'assets/images/Taylor_11x14.jpg', 
            discription: ' ',
            where:" ",
            size: '11x14',
            price: ' '
        }
      ]
    };
    
    var cityscapes = {
      galleryArt: 'assets/images/GeorgeVofParis_10x12.jpg',
      galleryMembers: [
        { 
            title: 'George V of Paris',
            artURL: 'assets/images/GeorgeVofParis_10x12.jpg', 
            discription: ' ',
            where:" ",
            size: '10x12',
            price: ' '
        },
        { 
            title: 'Aux Champs Elysees', 
            artURL: 'assets/images/AuxChampsElysees_10x13.jpg', 
            discription: ' ',
            where:" ",
            size: '10x13',
            price: ' '
        },
        { 
            title: "Pont Alexandre", 
            artURL: 'assets/images/PontAlexandre_11x15.JPG',  
            discription: ' ',
            where:" ",
            size: '11x15',
            price: ' '
        }
      ]
    };
    Fixtures.galleries = {"Nature":nature,"Portraits":portraits,"Cityscapes":cityscapes};
    
    
    
    
    
    
    
    
    var publications = 
    [
      {
        publication: 'International art magazine "Color"',
        date: "January 2017",
        site: "http://annkullberg.com/collections/color-magazine-all-issues"
      },
      {
        publication: 'International art magazine "Color"',
        date: "August 2016",
        site: "http://annkullberg.com/collections/color-magazine-all-issues"
      },
      {
        publication: 'The book "Hidden Treasures in Colored Pencil"',
        date: "2016",
        site: "http://annkullberg.com/collections/books-more/products/cp-hidden-treasures-volume-iii"
      },
    ];
    Fixtures.getPublications = function()
    {  
      var publication_defered = $q.defer();
      $http.get('/publications.json')
        .then(
          function successCallback(response) {
            publication_defered.resolve(response.data);
          }, function errorCallback(response) {
            publication_defered.reject(null);
      });
      return publication_defered.promise;
    };
    var exhibitions = 
    [
      {
        exhibition: "International Light Space and Time Exhibition",
        year: "2017",
        site: "https://www.lightspacetime.com/cityscapes-2017-online-art-exhibition-painting-category/"
      },
      {
        exhibition: "Pacific Art League",
        year: "2017",
        site: "http://www.pacificartleague.org/exhibitions-current/"
      },
      {
        exhibition: "International Bosque Art Classic",
        year: "2016",
        site: "http://www.bosqueartscenter.org/newgalleryview.aspx?type=&year=2016&cat=Drawing"
      },
      {
        exhibition: "International Light Space and Time Exhibition",
        year: "2016",
        site: null
      },
      {
        exhibition: "Light Space and Time",
        year: "2016",
        site: "https://www.lightspacetime.com/botanicals-2016-art-exhibition-painting-other-category/"
      },
      {
        exhibition: "International Colourbration in Australia",
        year: "2016",
        site: "http://www.auscpa.org/colourbrations-2016.html"
      },
    ];
    Fixtures.getExhibitions = function()
    {  
      var exhibitions_defered = $q.defer();
      $http.get('/exhibitions.json')
        .then(
          function successCallback(response) {
            exhibitions_defered.resolve(response.data);
          }, function errorCallback(response) {
            exhibitions_defered.reject(null);
      });
      return exhibitions_defered.promise;
    };
    Fixtures.pr = {'Exhibitions':exhibitions, 'Publications':publications};
    return Fixtures;
}
 
angular
  .module('jessica_site')
  .factory('Fixtures', ['$http', '$q',Fixtures]);
})();