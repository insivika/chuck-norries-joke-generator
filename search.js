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

var searchTerm = parseURLParams(url).search;



///Search API Request    
var searchJoke = new XMLHttpRequest();

var i = 0;

searchJoke.onreadystatechange = function(){
if( this.readyState == 4 && this.status == 200) {

        var joke = JSON.parse(this.responseText);

        for(; i < 9; i++){

        var searchResPara = document.createElement("p");

        searchResPara.className = "search-text";

        var txtNode = document.createTextNode(joke.result[i].value);

        searchResPara.appendChild(txtNode);

        var searchResBx = document.getElementById("searchResults");

        searchResBx.appendChild(searchResPara);

        }
    }
}; 
searchJoke.open("GET", "https://api.chucknorris.io/jokes/search?query="+ searchTerm, true);


searchJoke.send();

///Load More Results    

function loadMore(){
    ///Search API Request    
var searchJoke = new XMLHttpRequest();

searchJoke.onreadystatechange = function(){
if( this.readyState == 4 && this.status == 200) {

        var joke = JSON.parse(this.responseText);
        
        var moreI = i ;
            
        var len = moreI + 9;

        for(; i < len ; i++){

        var searchResPara = document.createElement("p");

        searchResPara.className = "search-text";

        var txtNode = document.createTextNode(joke.result[i].value);

        searchResPara.appendChild(txtNode);

        var searchResBx = document.getElementById("searchResults");

        searchResBx.appendChild(searchResPara);


        }
   
    }
}; 
searchJoke.open("GET", "https://api.chucknorris.io/jokes/search?query="+ searchTerm, true);


searchJoke.send();
   
}


