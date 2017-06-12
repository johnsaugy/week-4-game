
//Players current score
var addition = 0;


//Selects a random number from 19 to 120.
var total = Math.floor((Math.random()* 120) + 19);


//Assigns value to crystals from 1-12
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);
var wins = 0;
var losses = 0;

//updates addition in html
var updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}



//Add crystal value user selected to total score
$('.total').append(total);
$('.addition').append(addition);
$(document).ready(function(){
	$('#red').click(function(){
		addition = addition + red;
		logic();
	})
	$('#blue').click(function(){
		addition = addition + blue;
		logic();
	})
	$('#yellow').click(function(){
		addition = addition + yellow;
		logic();
	})
	$('#purple').click(function(){
		addition = addition + purple;
		logic();
	})
});


//Restart the game
var restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    purple = Math.floor((Math.random()* 12) + 1);

    updateAddition();
}


//Update wins/losses
var logic = function (){
	if (addition == total) {
		wins = wins + 1;

		restart();
	}else if(addition > total){
		losses = losses + 1;
		
		restart();
	}else{
		updateAddition();
	}
}