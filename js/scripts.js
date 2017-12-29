(function () {
    console.log("hello");
    let menuButton = document.getElementById("menu");
    let navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", toggleMenu);

    let toggle = false;
    function toggleMenu() {
        console.log(toggle);
        if (toggle) { // true: it's visible
            navMenu.classList.remove("show-menu"), // hide it
            toggle = false
            console.log(`if true: ${toggle}`);
        }
        else { 
            navMenu.classList.add("show-menu"), // show it
            toggle = true
            console.log(`if false: ${toggle}`);
        }
    }

})();
"use strict";

function initMap() {
  let manchester = {lat: 53.4808, lng: -2.2426};
  let ot = {lat: 53.4630589, lng: -2.2935288};
  let eti = {lat: 53.4831322, lng: -2.200467};
  let sal = {lat: 53.5143, lng: -2.2770};
  let mapDemo = document.getElementById("map");
  let map = new google.maps.Map(mapDemo, {
    zoom: 12,
    center: manchester
  });
  let markerOT = new google.maps.Marker({
    position: ot,
    map: map,
    title: 'Manchester United vs Manchester City, Sun 10/12 16:45 Kick Off'
  });
  let markerETI = new google.maps.Marker({
    position: eti,
    map: map,
    title: 'Manchester City vs Real Madrid, Wed 13/12 20:00 Kick Off'
  });
  let markerSAL = new google.maps.Marker({
	  position: sal,
	  map: map,
	  title: 'Salford City vs Stockport, Sat 06/01 15:00 Kick Off'
  });
  
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn").style.display = "block";
    } else {
        document.getElementById("btn").style.display = "none";
    }
}

"use strict";

(function(){
  
  let queryBox = document.getElementById("guardQuery");
  let searchForm = document.getElementById("searchForm");
  let demoJSON = document.getElementById("demo");

  // get an api key from http://open-platform.theguardian.com/access/
  let baseURL = "https://content.guardianapis.com/search?api-key=cb0d763f-7d5f-4efc-b081-b6b1c953bb25&q=";

  searchForm.addEventListener("submit", function(ev){
    let url = baseURL + queryBox.value;
    let request = new Request(url);
    fetch(request)
      .then(function (response) {
        // console.log(`response: ${response.status}`);
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        let key;
        let theData = "";
        let tmp = data.response.results;
        for (key in tmp) {
          theData += `<li><a href="${tmp[key].webUrl}">${tmp[key].webTitle}</a> ${tmp[key].webPublicationDate}</li>`;
        }
        demoJSON.innerHTML = theData;
      });
	  queryBox.value = "";
    ev.preventDefault();
  }, false);

}());






