function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

////// HOME //////


for( var i = 0; i < 9; i++ ){
    var randomJoke = new XMLHttpRequest();

    randomJoke.onreadystatechange = function(){
    
    if( this.readyState == 4 && this.status == 200) {
    
    var joke = JSON.parse(this.responseText);
                
    var resTxt = document.createElement('p');
        
    var txtNode = document.createTextNode(joke.value);
        
    resTxt.appendChild(txtNode);
    
    var resBox = document.getElementById("results");
        
    resBox.appendChild(resTxt);
    
    resTxt.className = "search-text";
    
}
}; 
    randomJoke.open("GET", "https://api.chucknorris.io/jokes/random", true);
    randomJoke.send(); 
};


























