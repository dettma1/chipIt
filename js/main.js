var superUser = 'hannah';

function updateUser(val){
	localStorage.setItem('superUser', val)
}

var data = {
	"sarah" : {
	"first_name" : "Sarah",
	"last_name" : "Bond",
	"emergency_contact" : {
		"first_name": "Elysa",
		"last_name": "Bond",
		"phone" : "7812694200"
	}
},

"ezra" : {
	"first_name" : "Ezra",
	"last_name" : "Garcia",
	"emergency_contact" : { 
		"first_name": "Marcos",
		"last_name": "Garcia",
		"phone" : "8888888888"
	}
},

"carrie" : {
	"first_name" : "Carrie",
	"last_name" : "Sayre",
	"emergency_contact" : {
		"first_name": "Katie",
		"last_name": "Sayre",
		"phone" : "9524561672"
		}
	}
};

function loadInfo(){
	var usr = localStorage.getItem("superUser");
	document.getElementById("ChipTitle").innerText = data[usr]['first_name'];
	document.getElementById("cust_first_name").value = data[usr]['first_name'];
	document.getElementById("cust_last_name").value = data[usr]['last_name'];
	document.getElementById("cust_ice_phone").value = data[usr]['emergency_contact']['phone'];
	document.getElementById("cust_ice_last_name").value = data[usr]['emergency_contact']['last_name'];
	document.getElementById("cust_ice_first_name").value = data[usr]['emergency_contact']['first_name'];
	
}

function loadPage(usr){
	window.updateUser(usr);	
	window.location.replace('cust.html');
	window.updateUser(usr);	
}



function checkUsr(){
			var val = document.getElementById("validationServer01").value;
			if(val == "153359"){
				loadPage('sarah');
			} else if(val == "157411"){
				//fill with ezra info
				loadPage('ezra');
			} else if(val == "162041"){
				//fill with carrie info
				loadPage('carrie');
			} else{
				//Invalid Pin
			}

		}	










