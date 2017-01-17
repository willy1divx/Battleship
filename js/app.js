


// function to remove div on button click
$(document).ready(function(){
	var count = 1;
	var sank = 0;
function increaseCount(count) {
		count = count++;
		return count;
	}

	$('.1').click(function(){
				var number = 1;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.2').click(function(){
				var number = 2;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.3').click(function(){
				var number = 3;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.4').click(function(){
				var number = 4;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.5').click(function(){
			var number = 5;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.6').click(function(){
				var number = 6;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.7').click(function(){
				var number = 7;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.8').click(function(){
				var number = 8;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.9').click(function(){
				var number = 9;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.10').click(function(){
				var number = 10;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.11').click(function(){
				var number = 11;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.12').click(function(){
				var number = 12;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.13').click(function(){
				var number = 13;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.14').click(function(){
				var number = 14;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.15').click(function(){
				var number = 15;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.16').click(function(){
				var number = 16;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});

		function ifSank(){
			$('h1').replaceWith("<h1>count: "+count+"</h1>");
			count = count + 1;
			 if (sank == 4){
			 	$('h3').replaceWith("<h3 style='color: red;'>YOU SANK MY BATTLESHIP</h3>");
		 };
	};

	myArray = [];
	var number ;
	for (var i = 0; i < 4 ; i++){
		number = Math.floor(Math.random() * 16) + 1; 
		if (myArray.indexOf(number) < 0){
			myArray.push(number);
		} else {
			number = Math.floor(Math.random() * 16) + 1;
		if (myArray.indexOf(number) < 0){
			myArray.push(number);
		} 
		}
		console.log(myArray);
	}

	function checkHit(number){
		if (myArray.indexOf(number) > -1){
			image = "img/hit.png";
			sank += 1;
		} else {
		image = "img/miss.jpg";
		}
		return image;
	}	
});


	