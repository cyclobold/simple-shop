//Track when the page has been reloaded or loaded..
window.onload = function(){

		let usersInfo = document.querySelector("#users-info");

		//look into the localStorage..
		//get the users' data 
		//display on page
		//
		

		let users = localStorage.getItem('user');

		if(users == null || users == undefined){

			//there are no users..
			usersInfo.innerHTML = "No user registered";

		}else{

			//there is user in localStorage
			users = JSON.parse(users);

			if(users.length == 0){
				//there are no users..
				usersInfo.innerHTML = "No user registered";
			}else{

				let usersTable = "<table>";
					usersTable += "<thead> <tr> <th>Name</th> <th>Email</th></tr> </thead>";
					usersTable += "<body>";

				for(let i = 0; i < users.length; i++){

					userName = users[i]['name'];
					userEmail = users[i]['email'];

					usersTable += "<tr><td>"+userName+"</td><td>"+userEmail+"</td></tr>";



				}

					usersTable += "</body></table>";


					//append the table to the usersInfo 
					
					usersInfo.innerHTML = usersTable;



			}

		}


}









//get the element id
const root = document.getElementById("root");


//create element for info
//let pageInfo = document.createElement("div");

//create element for holding users
let usersDiv = document.createElement("div");
	usersDiv.id = "users-info";



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

		//dont forget to check if the user exists already
		
		
		//get the stored items from localStorage
		let stored_users = localStorage.getItem("user");

		//if the stored_users is null or undefined, it means 
		//no user has been saved to localStorage
		if(stored_users == null || stored_users == undefined){
			//create an empty array that will hold the users
			stored_users = [];

			//create user object
			let user = {
					'name' : name,
					'email' : email
			}

			stored_users.push(user);   

			stored_users = JSON.stringify(stored_users);

			localStorage.setItem('user', stored_users);
			alert("User registered");

			//reload the page
			location.reload();
		}else{
			//users exist.. parse the stored_users
			stored_users = JSON.parse(stored_users);

			//check if the user has been registered before
			let users_found = [];
			for(let i = 0; i < stored_users.length; i++){

				if(stored_users[i]['email'] == email){
					//there is a match
					//we cant allow user register
					users_found.push(email);
					break;
				}
			}

			if(users_found.length > 0){
				//there is a user in the array
				alert("User registered already!");
			}else{
				//create a user object
				let user = {
					'name' : name,
					'email' : email
				}

				stored_users.push(user);   

				stored_users = JSON.stringify(stored_users);

				localStorage.setItem('user', stored_users);
				
				//reload the page
				location.reload();
			}


		}

		
	}



	removeButton.onclick = function(){
		let email = document.getElementById("email-id").value;

		

		if(confirm("Do you want to delete?")){

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
						

						//reload the page
						location.reload();
					}

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
root.appendChild(usersDiv);



