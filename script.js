//Anytime the page is reloaded..
//Get the cart items from the localStorage
window.addEventListener('load', function(){
	let cartId = document.querySelector("#cart-id");
	//retrieve cart items from localStorage
	let storedCartItems = getStoredCartItems();

	if(storedCartItems.length == 0){
		cartId.innerText = "Cart: 0 Item";
	}else{
		cartId.innerText = `Cart: ${storedCartItems.length} Items`;
	}

});



const btns = document.querySelectorAll('button');

btns.forEach((btn) => {

	btn.addEventListener('click', function(){


		let h4Node = this.parentNode;

		let productName = h4Node.childNodes[0].nodeValue;

		let imgSrc = h4Node.previousSibling.src;

		//create a product object
		let product = {
			'product_name' : productName, 
			'product_image' : imgSrc
		}


		//check if there is a product in the cart already
		let storedCartItems = getStoredCartItems();


		storedCartItems.push(product);
		//stringify the product
		storedCartItems = JSON.stringify(storedCartItems);

		//save to localStorage
		localStorage.setItem('cart', storedCartItems);

		//indicate you have added product to cart

		//reload the page
		location.reload();



	})

}) 


function getStoredCartItems(){
	let storedCartItems = localStorage.getItem("cart");

	if(storedCartItems == null || storedCartItems == undefined){
		//no item has been added
		return [];
	}else{
		//an item exist

		//storedCartItems is going to be an array
		storedCartItems = JSON.parse(storedCartItems);
		return storedCartItems;
	}
}