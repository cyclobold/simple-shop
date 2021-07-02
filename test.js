//get the element id
const root = document.getElementById("root");

let form = document.createElement('form');
	//form.method = "POST";

let nameDiv = document.createElement("div");

let nameLabel = document.createElement("label");
	nameLabel.innerText = "Enter name";
	nameLabel.style.display = "block";
let nameInput = document.createElement("input");
	nameInput.placeholder = 'Enter name';
	nameInput.id ='name-id';

nameDiv.appendChild(nameLabel);
nameDiv.appendChild(nameInput);




let emailInput = document.createElement("input");
	emailInput.id = "email-id";
let button = document.createElement("button");
	button.type = 'button';
	button.innerText = "Save";

let removeButton = document.createElement("button");
	removeButton.type = "button";
	removeButton.innerText = "Delete User";
	removeButton.style.backgroundColor = "red";
	removeButton.style.color = "white";






	button.onclick = function(){
		//get the user data 
		//and save to localStorage
		let name = document.getElementById("name-id").value;
		let email = document.getElementById("email-id").value;

		//check if users exist already
		
		//get the stored items from localStorage
		let stored_users = localStorage.getItem("user");

		//if the stored_users is null or undefined, it means 
		//no user has been saved to localStorage
		if(stored_users == null || stored_users == undefined){
			//create an empty array that will hold the users
			stored_users = [];
		}else{
			//users exist.. parse the stored_users
			stored_users = JSON.parse(stored_users);
		}

		//create a user object
		let user = {
			'name' : name,
			'email' : email
		}

		stored_users.push(user)

		stored_users = JSON.stringify(stored_users);

		localStorage.setItem('user', stored_users);
	}



	removeButton.onclick = function(){
		let email = document.getElementById("email-id").value;

		console.log(email);

		//remove any user with this email address
		let stored_users = localStorage.getItem("user");

		if(stored_users){
			stored_users = JSON.parse(stored_users);

			for(let i = 0; i < stored_users.length; i++){

				if(stored_users[i]['email'] == email){
					//there is a match.. 
					stored_users.splice(i, 1);

					stored_users = JSON.stringify(stored_users);

					localStorage.setItem("user", stored_users);

					alert("User deleted!");

					//break
				}

			}
		}

	}





form.appendChild(nameDiv);

form.appendChild(emailInput);

form.appendChild(button);

form.appendChild(removeButton);

//attach the form to root
root.appendChild(form);



