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
		"elementClassName": "logincontainer__title",
		"elementText": "Wonderland User Login:"
	},
	{
		"elementTag": "form",
		"elementClassName": "logincontainer__form",
		"elementPurpose": "loginForm",
		"elementInputFields": [
			"<button id='newUserBtn'>Add New User?</button>",
			"<button type='submit' id='loginBtn'>Log In!</button>",
			"<input type='text' id='getPassword'></input>",
			"<label>Password</label>",
			"<input type='text' id='getUserName'></input>",
			"<label>User Name</label>"
		]	
	}
]

let loggedInArray = [

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

addHamburger(loginPageArray, contentContainer);

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