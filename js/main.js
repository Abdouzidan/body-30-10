


// function getApi(){
//     var xhttp = new XMLHttpRequest;
//     xhttp.onreadystatechange = function(){
//      if(this.readyState==4 && this.status==200){
//         document.querySelector("#demo").innerHTML = this.responseText 
//      }   
//     }
//     xhttp.open("GET","https://jsonplaceholder.typicode.com/photos",true);
//     xhttp.send();
// }



// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(function(element){
//     return element.json()
// })
// .then(function(item){
//     console.log(item)
// })

(async function getApi(){
    var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
    var ali = await data.json()
    var hero = ali.recipes;
    var mytext = "";
    for(var i=0; i<hero.length; i++){
        var cartona = `<div class="col-md-4 text-center mb-5">
        <img src="${hero[i].image_url}" style="height:350px" class="img-fluid">
        <h4>${hero[i].title}</h4>
        <h6>${hero[i].publisher}</h6>
        </div>
         `;
         mytext = mytext + cartona;
    }
           
    document.querySelector(".test").innerHTML = mytext;
})();

