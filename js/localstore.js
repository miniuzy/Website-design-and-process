(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;
  let chooseColor = document.getElementById("choose-color");
  let colorStored = localStorage.color;
  // Displays the name in the console at this stage:
  console.log(`Data on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `Welcome ${nameStored}`;
	document.body.style.backgroundColor= colorStored;
    console.log(`Email stored is: ${nameStored}`);
	console.log('Colour stored is: ${colorStored}');
	
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "No Email Registered";
    console.log(`No name stored`);
  }

function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a correct email.");
      userName.focus();
    }
	//gets chosen colour
	console.log(chooseColor.value);
	document.body.style.backgroundColor = chooseColor.value;
    // Gets the name the user entered and colour
    nameStored = userName.value;
	colorStored = chooseColor.value;
    if (confirm("Is this information correct?\n"+ nameStored) == true) {
    txt = "OK Great!";
    // Shows the name in "my-name":
    myName.innerHTML = nameStored;  
    // Puts the name into localStorage:
    localStorage.name = nameStored;
	localStorage.color = colorStored;
    
    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
    
    return false;
	}
	else {
    txt = "Please re-enter information.";
	}
	// Ask fania why this isnt showing
  }
  function clearData(){
	  console.log('before clear: ${localStorage.name}');

	  localStorage.clear();
	  

	  console.log('after clear: ${localStorage.name}');
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }

	//Chrome/IE 
	getName.addEventListener("reset", clearData);
}());
