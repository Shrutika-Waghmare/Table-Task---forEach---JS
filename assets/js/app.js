var cl = console.log;

// 1st Example //

var booksArray = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
var booksInfo = document.getElementById("booksInfo");
result1 = '';
booksArray.forEach(function(books, i){
    result1 +=`<tr>
            <td>${i+1}</td>
            <td>${books.author}</td>
            <td>${books.title}</td>
            <td>${books.libraryID}</td>
            </tr>`
})
cl(result1);
booksInfo.innerHTML = result1;

cl("--------------------------------------------------------------------------------------------");

// 2nd Example //

var elementsArray = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
var elementsInfo = document.getElementById("elementsInfo");
result2 = '';
elementsArray.forEach(function(elements, i){
    result2 +=`<tr>
            <td>${i+1}</td>
            <td>${elements.position}</td>
            <td>${elements.name}</td>
            <td>${elements.weight}</td>
            <td>${elements.symbol}</td>
            </tr>`
});
cl(result2);
elementsInfo.innerHTML = result2;

cl("--------------------------------------------------------------------------------------------");

// 3rd Example //

var itemArray = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];
var itemInfo = document.getElementById("itemInfo");
var result3 = '';
itemArray.forEach(function(item, i){
    result3 += `<tr>
                    <td>${i+1}</td>
                    <td>${item.item}</td>
                    <td>${item.cost}</td>
                </tr>`
});
cl(result3);
itemInfo.innerHTML = result3;

cl("--------------------------------------------------------------------------------------------");

// 4th Example //

var animiArray = [
  {fname : "Luffy",
  title : "king of the Pirates",
  series : "One Piece"},
  {
      fname : "Zoro",
      title : "Swordsman",
      series : "One Piece"
  },
  {
      fname : "Naruto",
      title : "Hokage",
      series : "Naruto"
  },
  {
      fname : "Tanjuro",
      title : "swordsman",
      series : "Demon Slayer",
      
  }
];

animiInfo = document.getElementById("animiInfo");
result4 = '';
animiArray.forEach(function(animi, i){
  result4 += `<tr>
                <td>${i+1}</td>
                <td>${animi.fname}</td>
                <td>${animi.title}</td>
                <td>${animi.series}</td>
              </tr>`
});

animiInfo.innerHTML = result4;

cl("--------------------------------------------------------------------------------------------");

// 5th Example //

var mobileArray = [
  { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
  { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
  { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
  { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
  { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }
];

mobileInfo = document.getElementById("mobileInfo");
result5 = '';
mobileArray.forEach(function(mobile, i){
    result5 +=`<tr>
              <td>${i+1}</td>
              <td>${mobile.name}</td>
              <td>${mobile.price}</td>
              <td>${mobile.color}</td>
              <td>${mobile.storage}</td>
              <td>${mobile.camera}</td>
              </tr>`
});
cl(result5);
mobileInfo.innerHTML = result5;

cl("--------------------------------------------------------------------------------------------");

// 6th Example //

var countryArray = [
    {
        name: "USA",
        population: 331002651,
        area: 9833520,
        capital: "Washington, D.C.",
        language: "English"
    },
    {
        name: "Canada",
        population: 37411047,
        area: 9984670,
        capital: "Ottawa",
        language: "English and French"
    },
    {
        name: "Mexico",
        population: 127575529,
        area: 1964375,
        capital: "Mexico City",
        language: "Spanish"
    },
    {
        name: "France",
        population: 66710000,
        area: 640679,
        capital: "Paris",
        language: "French"
    },
    {
        name: "Germany",
        population: 82790000,
        area: 357114,
        capital: "Berlin",
        language: "German"
    }
];

countryInfo = document.getElementById("countryInfo");
result6 = '';
countryArray.forEach(function(country, i){
    result6 +=`<tr>
              <td>${i+1}</td>
              <td>${country.name}</td>
              <td>${country.population}</td>
              <td>${country.area}</td>
              <td>${country.capital}</td>
              <td>${country.language}</td>
              </tr>`
});
cl(result6);
countryInfo.innerHTML = result6;

cl("--------------------------------------------------------------------------------------------");









