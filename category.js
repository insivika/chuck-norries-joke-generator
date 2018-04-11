function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



function parseURLParams( url ) {
  var queryStart = url.indexOf( "?" ) + 1;
  var queryEnd = url.indexOf( "#" ) + 1 || url.length + 1;
  var query = url.slice( queryStart, queryEnd - 1 );
  var pairs = query.replace( /\+/g, " " ).split( "&" );
  var object = { };
  var name, value, pair;


  if( query === url || query === "" )
    return null;

  for( var i = 0; i < pairs.length; i++ ) {
    pair = pairs[i].split( "=", 2 );
    name = decodeURIComponent( pair[0] );
    value = decodeURIComponent( pair[1] );

    if( object.hasOwnProperty( name ) ) {

      if( typeof ( object[name] ) != "array" )
        object[name] = [ object[name] ];

      object[name].push( pair.length === 2 ? value : null );

    } else {
      object[name] = value;
    }
  }
  return object;
}

var category = parseURLParams(url).search;


/// API Request /// 



for( var i = 0; i < 9; i++){
  var categoryJoke = new XMLHttpRequest();
    
categoryJoke.onreadystatechange = function(){
if( this.readyState == 4 && this.status == 200) {
    
    var joke = JSON.parse(this.responseText);
        
    var resPara = document.createElement("p");
        
    resPara.className = "search-text";
    
    var txtNode = document.createTextNode(joke.value);
        
    resPara.appendChild(txtNode);
    
    var resBx = document.getElementById("results");
        
    resBx.appendChild(resPara);
    
    
    
   }
}; 


categoryJoke.open("GET", "https://api.chucknorris.io/jokes/random?category="+ category, true);


categoryJoke.send();  
    
}

console.log(category);

//// Header

var upperCat = category.charAt(0).toUpperCase()+category.substr(1);

var catHead = document.getElementById("categoryHeader");

var headerTxt = document.createTextNode("Category: " + upperCat);

catHead.appendChild(headerTxt);

console.log(headerTxt);





