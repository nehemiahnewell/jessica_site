/*global angular*/
(function() {
  function Fixtures($http, $q) {
    var Fixtures = {};
    var nature = {
      galleryArt: 'assets/images/FallLeaf.jpg',
      galleryMembers: [
        { 
            title: 'Fall Leaf',
            artURL: 'assets/images/FallLeaf.jpg', 
            discription: ' ',
            where:" ",
            size: ' ',
            price: ' '
        },
        { 
            title: 'Autumn Romance',
            artURL: 'assets/images/JessicaYoung_AutumnRomance.jpg',  
            discription: ' ',
            where:" ",
            size: ' ',
            price: ' '
        },
        { 
            title: 'Pink Rose',
            artURL: 'assets/images/PinkRose.jpg', 
            discription: ' ',
            where:" ",
            size: ' ',
            price: ' '
        }
      ]
    };
 
    var portraits = {
      galleryArt: 'assets/images/Angela.jpg',
      galleryMembers: [
        { 
            title: 'Angela',
            artURL: 'assets/images/Angela.jpg', 
            discription: '',
            where:"",
            size: ' ',
            price: ' '
        },
        { 
            title: 'Hebe',
            artURL: 'assets/images/Hebe.jpg', 
            discription: ' ',
            where:" ",
            size: ' ',
            price: ' '
        },
        { 
            title: 'Ro+Nick', 
            artURL: 'assets/images/RoNick.jpg', 
            discription: ' ',
            where:" ",
            size: ' ',
            price: ' '
        },
        { 
            title: 'Taylor', 
            artURL: 'assets/images/taylor.jpg', 
            discription: ' ',
            where:" ",
            size: ' ',
            price: ' '
        }
      ]
    };
    
    var cityscapes = {
      galleryArt: 'assets/images/JessicaYoung_GeorgeVofParis.jpg',
      galleryMembers: [
        { 
            title: 'George V of Paris',
            artURL: 'assets/images/JessicaYoung_GeorgeVofParis.jpg', 
            discription: ' ',
            where:" ",
            size: ' ',
            price: ' '
        },
        { 
            title: 'Aux Champs Elysees', 
            artURL: 'assets/images/JessicaYoung_AuxChampsElysees.jpg', 
            discription: ' ',
            where:" ",
            size: ' ',
            price: ' '
        },
        { 
            title: "Pont Alexandre", 
            artURL: 'assets/images/PontAlexandre.jpg',  
            discription: ' ',
            where:" ",
            size: ' ',
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