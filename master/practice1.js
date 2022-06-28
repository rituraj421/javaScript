//1 
// you have to create a vsriable which is a string containing the text which is a link you are interested in

// you have to fetch all the links from a given page which contains this Text

// a = document.links;
// var inputText = 'e';

// for(var i = 0; i< a.length; i++){
//     var string = a[i].href;
//     if(string.includes(inputText)){
//         console.log(string);
//     }
// };

linksCollections = document.links
Array.from(linksCollections).forEach(function(element){
  element = element.href
  if(element.includes("django")){
    console.log(element)
  }
})