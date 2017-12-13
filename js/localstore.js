(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;

  // Displays the name in the console at this stage:
  console.log(`Data on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `Welcome ${nameStored}`;
	document.body.style.backgroundColor= colorStored;
    console.log(`Email stored is: ${nameStored}`);
	
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "No Email Registered";
    console.log(`No Email stored`);
  }

function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a correct email.");
      userName.focus();
    }


    // Gets the name the user entered and colour
    nameStored = userName.value;

    if (confirm("Is this information correct?\n"+ nameStored) == true) {
    alert("OK Great!");
    // Shows the email in "my-name":
    myName.innerHTML = nameStored;  
    // Puts the email into localStorage:
    localStorage.name = nameStored;
    
    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
    
    return false;
	}
	else {
    alert("Please re-enter information.");
	}
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
