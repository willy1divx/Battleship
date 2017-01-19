


// function to remove div on button click
$(document).ready(function(){
	var count = 1;
	var sank = 0;
	var picture = 0;
function increaseCount(count) {
		count = count++;
		return count;
	}

	$('.1').click(function(){
			$('.1').unbind("click");
				var number = 1;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.2').click(function(){
			$('.2').unbind("click");
				var number = 2;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.3').click(function(){
			$('.3').unbind("click");
				var number = 3;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.4').click(function(){
			$('.4').unbind("click");
				var number = 4;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.5').click(function(){
			$('.5').unbind("click");
			var number = 5;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.6').click(function(){
			$('.6').unbind("click");
				var number = 6;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.7').click(function(){
			$('.7').unbind("click");
				var number = 7;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.8').click(function(){
			$('.8').unbind("click");
				var number = 8;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.9').click(function(){
			$('.9').unbind("click");
				var number = 9;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.10').click(function(){
			$('.10').unbind("click");
				var number = 10;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.11').click(function(){
			$('.11').unbind("click");
				var number = 11;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.12').click(function(){
			$('.12').unbind("click");
				var number = 12;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.13').click(function(){
			$('.13').unbind("click");
				var number = 13;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.14').click(function(){
			$('.14').unbind("click");
				var number = 14;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.15').click(function(){
				$('.15').unbind("click");
				var number = 15;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});
	$('.16').click(function(){
				$('.16').unbind("click");
				var number = 16;
				checkHit(number);
			$(this).attr("src", image);
				ifSank();
				});

		function ifSank(){
			$('h1').replaceWith("<h1>count: "+count+"</h1>");
			count = count + 1;
			if (count > 16){
				$('h3').replaceWith("<h3 style='color: red;'>YOU LOOSE!!!!!!!!!</h3>");	
					exit;
			}
			 if (sank == 4){
			 	if (count  < 16){
				 	$('h3').replaceWith("<h3 style='color: red;'>YOU SANK MY BATTLESHIP</h3>");
				 	setTimeout(reset, 5000);
				 } 	 	
		 };
	};

	myArray = [];
	var number ;

		do { number = Math.floor(Math.random() * 16) + 1; 
			if (myArray.indexOf(number) < 0){
				myArray.push(number);
			}
			picture = Math.floor(Math.random() * 13) + 1;
			images = 'img/ship' + picture + '.jpg';
			$('.body').attr("background", images);
			console.log(myArray);
		}
		while (myArray.length < 4);
		
		
		
	

	function checkHit(number){
		if (myArray.indexOf(number) > -1){
			image = "img/hit.png";
			arr = myArray.filter(function(item){
				if(item !== number){
					return item;
				}
			});
			sank += 1;
			myArray = arr;
		} else {	
		image = "img/miss.jpg";
		}
		return image;
	}	

	function reset(){
		location.reload();
	}

	
});

		
	