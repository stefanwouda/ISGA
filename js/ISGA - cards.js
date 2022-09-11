// JavaScript Document
// auteur: Sanne 't Hooft

(function() {
	
	var cmdaCards = document.querySelectorAll(".cmda-card");
	for (var i=0;i<cmdaCards.length;i++) {
		
		var handvat = document.createElement("span");
		handvat.classList.add("card-handvat"); 
		cmdaCards[i].appendChild(handvat);
		
		handvat = cmdaCards[i].querySelector(".card-handvat");
		handvat.addEventListener("click", function(event){
			this.parentNode.classList.toggle("active");
		});
	}
})();