	function injurygen() {

	var severity = [
	"minorly", "moderately", "slightly"
];
	var severity2 = [
	"severely", "debilitatingly", "brutally", "horribly"
];
	var severity3 = [
	"minorly", "moderately", "severely", "debilitatingly", "slightly", "brutally", "horribly"
];
	var severity4 = [
	"minor", "moderate"
];
	var severity5 = [
	"severe", "debilitating", "brutal", "horrible"
];
	var severity6 = [
	"minor", "moderate", "severe", "debilitating", "brutal", "horrible"
];
	var wound = [
	"burned", "bruised", "Threadscored", "cut", "scraped", "bumped"
];
	var wound2 = [
	"burned", "bruised", "Threadscored", "broken", "lacerated", "punctured", "shattered", "skinned"
];
	var wound3 = [
	"burned", "bruised", "Threadscored", "broken", "lacerated", "punctured", "cut", "scraped", "bumped", "shattered", "skinned"
];
	var bodypart1 = [
	"shoulder", "back", "thigh", "side", "hip", "wrist", "knee", "hand", "ankle", "finger", "arm", "leg", "foot", "chin", "forehead", "cheek", "sternum"
];
	var bodypart2 = [
	"shoulder", "back", "thigh", "side", "hip", "wrist", "knee", "hand", "head", "neck", "face", "ankle", "arm", "leg", "foot", "chin", "forehead", "cheek", "rib", "sternum"
];
	var bodypart3 = [
	"shoulder", "back", "thigh", "side", "hip", "wrist", "knee", "hand", "head", "neck", "face", "ankle", "arm", "leg", "foot", "chin", "forehead", "cheek", "rib", "sternum", "finger"
];
	var joints = [
	"shoulder", "hip", "wrist", "knee", "ankle", "rib", "elbow", "collarbone"
];
	var jointwound = [
	"sprained", "dislocated"
];
	var illness = [
	"dehydration", "ash inhalation", "smoke inhalation"
];
	var illness2 = [
	"dehydration", "ash inhalation", "smoke inhalation", "heat stroke"
];
	var illness3 = [
	"dehydration", "ash inhalation", "smoke inhalation", "heat stroke"
];

	var jointchance = Math.round(Math.random() * 30);
	var brokenill = Math.round(Math.random());

	var severecheck1 = document.getElementById("severitycheck1");
	var severitycheck2 = document.getElementById("severitycheck2");
	var severitycheck3 = document.getElementById("severitycheck3");
	
	var name = document.getElementById("ridername").value;
	var randomseverity = Math.floor(Math.random() * (severity.length));
	var randomseverity2 = Math.floor(Math.random() * (severity2.length));
	var randomseverity3 = Math.floor(Math.random() * (severity3.length));
	var randomseverity4 = Math.floor(Math.random() * (severity4.length));
	var randomseverity5 = Math.floor(Math.random() * (severity5.length));
	var randomseverity6 = Math.floor(Math.random() * (severity6.length));
	var randomwound = Math.floor(Math.random() * (wound.length));
	var randomwound2 = Math.floor(Math.random() * (wound2.length));
	var randomwound3 = Math.floor(Math.random() * (wound3.length));
	var randomjointwound = Math.floor(Math.random() * (jointwound.length));
	var randombody1 = Math.floor(Math.random() * (bodypart1.length));
	var randombody2 = Math.floor(Math.random() * (bodypart2.length));
	var randombody3 = Math.floor(Math.random() * (bodypart3.length));
	var randomjoint = Math.floor(Math.random() * (joints.length));
	var randomillness = Math.floor(Math.random() * (illness.length));
	var randomillness2 = Math.floor(Math.random() * (illness2.length));
	var randomillness3 = Math.floor(Math.random() * (illness3.length));

if (jointchance > 20){
	if (severecheck1.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers a " + severity[randomseverity] + " " + jointwound[randomjointwound] + " " + joints[randomjoint] + "!";
	document.getElementById("injuryshow").style.display = "block";
	} else if (severitycheck2.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers a " + severity2[randomseverity2] + " " + jointwound[randomjointwound] + " " + joints[randomjoint] + "!";
	document.getElementById("injuryshow").style.display = "block";
	} else if (severitycheck3.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers a " + severity3[randomseverity3] + " " + jointwound[randomjointwound] + " " + joints[randomjoint] + "!";
	document.getElementById("injuryshow").style.display = "block";	
}
} else if (brokenill > 0){	
	if (severecheck1.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers a " + severity[randomseverity] + " " + wound[randomwound] + " " + bodypart1[randombody1] + "!";
	document.getElementById("injuryshow").style.display = "block";
	} else if (severitycheck2.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers a " + severity2[randomseverity2] + " " + wound2[randomwound2] + " " + bodypart2[randombody2] + "!";
	document.getElementById("injuryshow").style.display = "block";
	} else if (severitycheck3.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers a " + severity3[randomseverity3] + " " + wound3[randomwound3] + " " + bodypart3[randombody3] + "!";
	document.getElementById("injuryshow").style.display = "block";	
} 

} else if (severecheck1.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers from " + severity4[randomseverity4] + " " + illness[randomillness] + "!";
	document.getElementById("injuryshow").style.display = "block";
} else if (severitycheck2.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers from " + severity5[randomseverity5] + " " + illness2[randomillness2] + "!";
	document.getElementById("injuryshow").style.display = "block";
} else if (severitycheck3.checked){
	document.getElementById("bodydisplay").innerHTML = name + " suffers from " + severity6[randomseverity6] + " " + illness3[randomillness3] + "!";
	document.getElementById("injuryshow").style.display = "block";
}
}
