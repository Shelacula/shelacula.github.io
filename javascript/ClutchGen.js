	function statGen() {

	var bronze = Math.floor((Math.random() * 3) + 1);
	var brown = Math.floor((Math.random() * 4) + 2);
	var blue = Math.floor((Math.random() * 6) + 4);
	var green = Math.floor((Math.random() * 7) + 10);
	var clutchsize = Math.floor(bronze + brown + blue + green)
	
	var size = document.getElementById("clutchsize");
	size.innerHTML = clutchsize;
	var bronzes = document.getElementById("bronzes");
	bronzes.innerHTML = bronze;
	var browns = document.getElementById("browns");
	browns.innerHTML = brown;
	var blues = document.getElementById("blues");
	blues.innerHTML = blue;
	var greens = document.getElementById("greens");
	greens.innerHTML = green;
	}