const btns = document.querySelectorAll('button');

btns.forEach((btn) => {

	btn.addEventListener('click', function(){

		//get the image of the product
		h4Node = this.parentNode;

		imgSrc = h4Node.previousSibling.src;



	})

}) 