//local storage containgning token loggedIn or loggedOut

//users object array med lösen + användarnamn

//DOM array

let elements = [
	{
		"elementPage": "startpage",
		"elementType": "button"
	},
	{
		"elementPage": "startpage",
		"elementType": "div"
	}
]

let headerContainer = document.getElementById("headerContainer");

const hamburgerTimes = 3;

function addHamburger() {
	let elementName = document.createElement(elements[0].elementType);
	elementName.className = "header__hamburger";
	for(var i = 0; i < hamburgerTimes; i++) {
		elementName.insertAdjacentHTML("afterbegin", "<span class='lines'></span>");
	}
	headerContainer.appendChild(elementName);
}

addHamburger();


function loggedIn() {
	//insert all HTML for logged in welcome screen
}

console.log("hello world");

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