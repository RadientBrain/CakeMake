//Set up an associative array
//The keys represent the size of the cake
//The values represent the cost of the cake i.e A 10" cake cost's $35
var cake_prices = new Array();
cake_prices["Round6"]=15;
cake_prices["Round8"]=20;
cake_prices["Round10"]=25;
cake_prices["Round12"]=10;
cake_prices["Round14"]=20;
cake_prices["Round16"]=30;
cake_prices["Round18"]=20;
cake_prices["Round20"]=30;
cake_prices["Round22"]=35;
cake_prices["Round24"]=10;
cake_prices["Round26"]=20;
cake_prices["Round28"]=25;
cake_prices["Round30"]=15;
cake_prices["Round32"]=25;
cake_prices["Round34"]=40;


//Set up an associative array 
//The keys represent the filling type
//The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
//We use this this array when the user selects a filling from the form
var filling_prices = new Array();
filling_prices["None"]=0;
filling_prices["Lemon"]=5;
filling_prices["Custard"]=5;
filling_prices["Fudge"]=7;
filling_prices["Mocha"]=8;
filling_prices["Raspberry"]=10;
filling_prices["Pineapple"]=5;
filling_prices["Dobash"]=9;
filling_prices["Mint"]=5;
filling_prices["Cherry"]=5;
filling_prices["Apricot"]=8;
filling_prices["Buttercream"]=7;
filling_prices["Chocolate Mousse"]=12;

// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getCakeSizePrice() {
	var cakeRadio = document.getElementsByName('selectedcake');

	for (i=0; i < cakeRadio.length; i++) {
		if (cakeRadio[i].checked) {
			user_input = cakeRadio[i].value;
		}
	}

	return cake_prices[user_input];
}

// getFillingPrice() finds the price based on the filling of the cake.
// Here, we need to take user's the selection from selection list
function getFillingPrice() {
	var cakeSelect = document.getElementById('filling');

	//alert(filling_prices[cakeSelect.value]);

	return filling_prices[cakeSelect.value];
}

// getCandlesPrice() finds the price based if Candles is selected or not.
function getCandlesPrice() {
	var cakeCandles = document.getElementById('includecandles');

	if(cakeCandles.checked) {
		return(20);
	} else {
		return(0);
	}
}

// getInscriptionPrice() finds the price based if Inscription is selected or not.
function getInscriptionPrice() {
	var cakeInscription = document.getElementById('includeinscription');

	if(cakeInscription.checked) {
		return(35);
	} else {
		return(0);
	}
}

function calculateTotal() {
	var total = getCakeSizePrice() + getFillingPrice() + getCandlesPrice() + getInscriptionPrice();
	var totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = "&#8377;" + total;
	totalEl.style.display = 'block';
}

function hideTotal() {
	var totalEl = document.getElementById('totalPrice');
	totalEl.style.display = 'none';
}