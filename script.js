//local storage containgning token loggedIn or loggedOut

//users object array med lösen + användarnamn

//DOM arrays

let hamArray = [
	{
		"elementTag": "button",
		"elementClassName": "header__hamburger"
	},
	{
		"elementTag": "input",
		"elementClassName": "header__hamburger--toggle",
		"elementType": "checkbox"
		
	},
	{
		"elementTag": "div",
		"elementClassName": "header__hamburger--dropdown",
		"elementText": "Login!"
	}
]

let headerContainer = document.getElementById("headerContainer");

function addHamburger(hamElements) {
	for (i in hamElements) {
		let element = document.createElement(hamElements[i].elementTag);
		element.className = hamElements[i].elementClassName;
		if (hamElements[i].elementType) {
			element.type = hamElements[i].elementType;
		} else if (hamElements[i].elementText) {
			element.insertAdjacentHTML("afterbegin", hamElements[i].elementText);
		} else {
			for(var j = 0; j < 3; j++) {
				element.insertAdjacentHTML("afterbegin", "<span class='lines'></span>");
			}
		}
		headerContainer.appendChild(element);
	}
}

addHamburger(hamArray);


function loggedIn() {
	//insert all HTML for logged in welcome screen
}

function loggedOut() {
	//insert all HTML for logged out welcome screen + button for getting to login screen
}

function reloadLogInStatus(loggInToken) {
	//if (loggInToken == loggedIn) {
	//	loggedIn()
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