//local storage containgning token loggedIn or loggedOut

//users object array med lösen + användarnamn

//DOM arrays

let hamArray = [
	{
		"elementTag": "button",
		"elementClassName": "header__hamburger",	
		"elementPurpose": "hamburgerBtn"
	},
	{
		"elementTag": "input",
		"elementClassName": "header__hamburger--toggle",
		"elementType": "checkbox",
		"elementPurpose": "hamburgerBtnCheck"
		
	},
	{
		"elementTag": "div",
		"elementClassName": "header__hamburger--dropdown",
		"elementText": "Login!"
	}
]

let loginPageArray = [
	{
		"elementTag": "h2",
		"elementClassName": "container__title",
		"elementText": "Wonderland User Login:"
	},
	{
		"elementTag": "form",
		"elementClassName": "container__form",
		"elementPurpose": "loginForm",
		"elementInputFields": [
			"<button id='newUserBtn' class='container__form--buttons'>Add New User?</button>",
			"<button type='submit' id='loginBtn' class='container__form--buttons'>Log In!</button>",
			"<input type='text' id='getPassword' class='container__form--inputs'></input><br><br>",
			"<label class='container__form--labels'>Password </label>",
			"<input type='text' id='getUserName' class='container__form--inputs'></input><br><br>",
			"<label class='container__form--labels'>User Name </label>"
		]	
	}
]

let loggedInArray = [
	{
		"elementTag": "h2",
		"elementClassName": "container__title",
		"elementText": "Welcome, "
	},
	{
		"elementTag": "h3",
		"elementClassName": "container__subtitle",
		"elementText": "Read our Manifesto!"
	},
	{
		"elementTag": "p",
		"elementClassName": "container__text",
		"elementText": "The Industrial Revolution and its consequences have been a disaster for the human race. They have greatly increased the life-expectancy of those of us who live in “advanced” countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world. The continued development of technology will worsen the situation. It will certainly subject human beings to greater indignities and inflict greater damage on the natural world, it will probably lead to greater social disruption and psychological suffering, and it may lead to increased physical suffering even in “advanced” countries. "
	}
]

let headerContainer = document.getElementById("headerContainer");

let contentContainer = document.getElementById("contentContainer");

function addHamburger(hamElements, container) {
	for (i in hamElements) {
		let element = document.createElement(hamElements[i].elementTag);
		element.className = hamElements[i].elementClassName;
			switch(hamElements[i].elementPurpose) {
			case "hamburgerBtn":
				for(var j = 0; j < 3; j++) {
					element.insertAdjacentHTML("afterbegin", "<span class='lines'></span>");
				}
				break;
			case "hamburgerBtnCheck":
				element.type = hamElements[i].elementType;
				break;
			case "loginForm":
				for (fields in hamElements[i].elementInputFields) {
					element.insertAdjacentHTML("afterbegin", hamElements[i].elementInputFields[fields]);
				}
				break;
			default:
				element.insertAdjacentHTML("afterbegin", hamElements[i].elementText);	
		}
		container.appendChild(element);
	}
}

addHamburger(hamArray, headerContainer);

addHamburger(loggedInArray, contentContainer);

function loggedIn() {
	//insert all HTML for logged in welcome screen. inlogged dom function 
}

function loggedOut() {
	//insert all HTML for logged out welcome screen + button for getting to login screen
	//outlogged dom function
}

function reloadLogInStatus(loggInToken) {
	//if (loggInToken == loggedIn) {
	//	loggedIn() THIS COULD BE A SWITCH STATEMENT AS WELL
//	} else {
//		loggedOut()	
//	}
}

//reloadLogInStatus(users);

//loginBtn.addEventListener {
//	for (i in users) {
		//double check my bondalizer program for inspiration
//		if (inputUserName.value == users[i].userName &&
//		inputPass.value == users[i].userPass) {
//			localStorrage.setItem("state", loggedIn);
//			reloadLogInStatus();
//		} else {
//			prompt("error, user or password not found")
//		}
//	}
//}

function logOutBtn(){
//	localStorage.clear("state)"
//	reloadLogInStatus
}

function addUserBtn() {
	//load another dom with import fields, ending with an "addUserBtn"
}

//loginBtn.addEventListener {
	//edit local storrage with new object array, containing new user credentials
//	if statement prompting an error if any of the fields are not filled in correctly
//}