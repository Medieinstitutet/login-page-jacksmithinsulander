let userArray = [
	{
		"username": "janne",
		"userPassword": "test"
	},
	{
		"username": "ted",
		"userPassword": "industrialrevolution123"
	},
	{
		"username": "satoshi",
		"userPassword": "ciahoneypot"
	},
]

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
		"elementPurpose": "checkBox"		
	},
	{
		"elementTag": "div",
		"elementClassName": "header__hamburger--dropdown",
		"elementPurpose": "loginDropDown"
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
			"<button type='button' id='newUserBtn' class='container__form--buttons'>Add New User?</button>",
			"<button type='button' id='loginBtn' class='container__form--buttons'>Log In!</button>",
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
		"elementText": "Welcome, ",
		"elementPurpose": "greeting"
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

function domManipulation(elementArray, container) {
	for (i in elementArray) {
		let element = document.createElement(elementArray[i].elementTag);
		element.className = elementArray[i].elementClassName;
			switch(elementArray[i].elementPurpose) {
			case "hamburgerBtn":
				for(var j = 0; j < 3; j++) {
					element.insertAdjacentHTML("afterbegin", "<span class='lines'></span>");
				}
				break;
			case "checkBox":
				element.type = elementArray[i].elementType;
				break;
			case "loginDropDown":
				if (localStorage.getItem("loginState") === null) {
					element.innerHTML = "Log in!";
					element.id = "toLogin";
				} else if (localStorage.getItem("loginState") === "isLoggedIn") {
					element.innerHTML = "Log out!";
					element.id = "toLogin";
				}
				break;
			case "loginForm":
				for (fields in elementArray[i].elementInputFields) {
					element.insertAdjacentHTML("afterbegin", elementArray[i].elementInputFields[fields]);
				}
				let loginBtn = document.getElementById("loginBtn");
				let getUserName = document.getElementById("getUserName");
				let getPassword = document.getElementById("getPassword");
				break;
			case "greeting":
				element.insertAdjacentHTML("afterbegin", elementArray[i].elementText + localStorage.getItem("loggedInUser") );
				break;
			default:
				element.insertAdjacentHTML("afterbegin", elementArray[i].elementText);	
		}
		container.appendChild(element);
	}
}

function loggedIn() {
	domManipulation(hamArray, headerContainer);
	domManipulation(loggedInArray, contentContainer);
}

function loggedOut() {
	domManipulation(hamArray, headerContainer);
	let toLogin = document.getElementById("toLogin");
	toLogin.addEventListener("click", () => {
		domManipulation(loginPageArray, contentContainer);
		contentContainer.className = "content";
		loginBtn.addEventListener("click", () => {
			let findUser = userArray.find(findUser => findUser.username === getUserName.value)
			if (findUser && findUser.userPassword === getPassword.value) {
				console.log("user found", findUser.username);
				localStorage.setItem("loginState", "isLoggedIn");
				localStorage.setItem("loggedInUser", findUser.username);
				reloadLogInStatus(localStorage.getItem("loginState"));
			} else {
				console.log("error! wrong credentials!!!");
			}
		})
	})
}

function reloadLogInStatus(loggInToken) {
	if (loggInToken === null) {
		loggedOut();
	} else if (loggInToken === "isLoggedIn") {
		loggedIn();
	}
}

reloadLogInStatus(localStorage.getItem("loginState"));

//function logOutBtn(){
//	localStorage.clear("state)"
//	reloadLogInStatus
//}

//function addUserBtn() {
	//load another dom with import fields, ending with an "addUserBtn"
//}