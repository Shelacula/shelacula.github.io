	function statGen() {

	var greencheck = document.getElementById("greencheck");
	var goldcheck = document.getElementById("goldcheck");
	
	var bronze = Math.floor((Math.random() * 3) + 1);
	var brown = Math.floor((Math.random() * 4) + 2);
	var blue = Math.floor((Math.random() * 6) + 4);
	var green = Math.floor((Math.random() * 7) + 10);
	var clutchsize = Math.floor(bronze + brown + blue + green)
	
	var greenbronze = Math.floor((Math.random() * 2) + 0);
	var greenbrown = Math.floor((Math.random() * 3) + 0);
	var greenblue = Math.floor((Math.random() * 3) + 1);
	var greengreen = Math.floor((Math.random() * 2) + 3);
	var greenclutchsize = Math.floor(greenbronze + greenbrown + greenblue + greengreen)
	
	var goldbronze = Math.floor((Math.random() * 4) + 0);
	var goldbrown = Math.floor((Math.random() * 4) + 0);
	var goldblue = Math.floor((Math.random() * 3) + 1);
	var goldgreen = Math.floor((Math.random() * 3) + 3);
	var goldchance = Math.round(Math.random() * 100)
	var goldclutchsize = Math.floor(goldbronze + goldbrown + goldblue + goldgreen)

if (greencheck.checked) {
	document.getElementById("clutchsize").innerHTML = greenclutchsize;
	document.getElementById("bronzes").innerHTML = greenbronze;
	document.getElementById("browns").innerHTML = greenbrown;
	document.getElementById("blues").innerHTML = greenblue;
	document.getElementById("greens").innerHTML = greengreen;
} else if (goldcheck.checked) {
	document.getElementById("clutchsize").innerHTML = goldclutchsize;
	document.getElementById("bronzes").innerHTML = goldbronze;
	document.getElementById("browns").innerHTML = goldbrown;
	document.getElementById("blues").innerHTML = goldblue;
	document.getElementById("greens").innerHTML = goldgreen;
	if (goldbronze < 2 && goldchance > 70) {
	document.getElementById("gold").innerHTML = "1";
	} else {
	document.getElementById("gold").innerHTML = " ";
}
} else {
	document.getElementById("clutchsize").innerHTML = clutchsize;
	document.getElementById("bronzes").innerHTML = bronze;
	document.getElementById("browns").innerHTML = brown;
	document.getElementById("blues").innerHTML = blue;
	document.getElementById("greens").innerHTML = green;
}
}
