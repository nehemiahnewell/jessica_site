/*global angular*/
(function() {
  function Fixtures() {
    var Fixtures = {};
    var nature = {
      galleryArt: 'assets/images/FallLeaf.jpg',
      galleryMembers: [
        { 
            title: 'Fall Leaf',
            artURL: 'assets/images/FallLeaf.jpg', 
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        },
        { 
            title: 'Autumn Romance',
            artURL: 'assets/images/JessicaYoung_AutumnRomance.jpg',  
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        },
        { 
            title: 'Pink Rose',
            artURL: 'assets/images/PinkRose.jpg', 
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        }
      ]
    };
 
    var portraits = {
      galleryArt: 'assets/images/Angela.jpg',
      galleryMembers: [
        { 
            title: 'Angela',
            artURL: 'assets/images/Angela.jpg', 
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        },
        { 
            title: 'Hebe',
            artURL: 'assets/images/Hebe.jpg', 
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        },
        { 
            title: 'Ro+Nick', 
            artURL: 'assets/images/Ro+Nick.jpg', 
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        },
        { 
            title: '20160918_172853', 
            artURL: 'assets/images/20160918_172853.jpg', 
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        }
      ]
    };
    
    var cityscapes = {
      galleryArt: 'assets/images/JessicaYoung_GeorgeVofParis.jpg',
      galleryMembers: [
        { 
            title: 'George V of Paris.jpg',
            artURL: 'assets/images/JessicaYoung_GeorgeVofParis.jpg', 
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        },
        { 
            title: 'Aux Champs Elysees', 
            artURL: 'assets/images/JessicaYoung_AuxChampsElysees.jpg', 
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
        },
        { 
            title: "Pont Alexandre", 
            artURL: 'assets/images/PontAlexandre.jpg',  
            discription: 'This is a discription of a painting. It might tell a small story or have discribe the painting a little. It should be around this long to look right on the page.',
            where:"Available at some gallery, with an addreess, and a phone number. Alternatively, instructions to contact the artist",
            size: 'x" H x x" W',
            price: 'xxx.xx$'
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
    Fixtures.pr = {'Exhibitions':exhibitions, 'Publications':publications};
    return Fixtures;
}
 
angular
  .module('jessica_site')
  .factory('Fixtures', Fixtures);
})();