let alea= Math.floor(Math.random() * Math.floor(100));

// values are in binary to make them harder to crack in college :)
const matheux = [
  { name: "Thalès", value: parseInt("10",2)},
  { name: "Euclide", value: parseInt("101",2)},
  { name: "Archimède", value: parseInt("11",2)},
  { name: "Pythagore", value: parseInt("111",2) },
];


//click on pilars
function pilar3_click() {     openImage("images/pilar3.png"); }
document.getElementById("pilar3").onclick = pilar3_click;
function pilar2_click() {    openImage("images/pilar2.png");}
document.getElementById("pilar2").onclick = pilar2_click;
function pilar1_click() {     openImage("images/pilar1.png"); }
document.getElementById("pilar1").onclick = pilar1_click;

//click on manhole
function manhole1_click() {
    let value = prompt("Zlatan doit transporter un tas de sable de 0,8 m3 avec un seau qui peut contenir 10 litres.  Combien fera t-il de voyages ?");
    if (value == "80") {
        openImage("images/manhole.jpg");
    } else {
        if (value != undefined) {
            alert("La plaque ne s'ouvre pas, essaie encore! ");
        }
    }

}
document.getElementById("manhole1").onclick = manhole1_click;




//click on bench2
function bench2_click() {
    let value = prompt("Pi arrondi au centième est égàl à: ");
    if (value == "3.14" ||  value == "3,14")  {
        openImage("images/bench2.jpg");
    } else {
        if (value != undefined) {
            alert("Mauvaise réponse. Essaye encore ");
        }
    }

}
document.getElementById("bench2").onclick = bench2_click;


//click on casier
function casier_click() {
    let value = prompt("Combien de cotés a un hendécagone? ");
    if (value == "11") {
        openImage("images/eucl.png");
    } else {
        if (value != undefined) {
            alert("Mauvaise réponse. Essaye encore ");
        }
    }

}
document.getElementById("casier").onclick = casier_click;



//click on paper
function paper_click() {
    let value = prompt("Simplifier la fraction 18/24 donne...");
    if (value == "3/4") {
        openImage("images/archi.jpg");
    } else {
        if (value != undefined) {
            alert("Mauvaise réponse. Essaye encore ");
        }
    }

}
document.getElementById("paper").onclick = paper_click;

//click on paperintree
function paperintree_click() {
    let value = prompt("-8 -7 =  ?");
    if (value == "-15") {
        openImage("images/paperintree.png");
    } else {
        if (value != undefined) {
            alert("Mauvaise réponse. Essaye encore ");
        }
    }

}
document.getElementById("paperintree").onclick = paperintree_click;

//click on blackbox
function blackbox_click() {
    let value = prompt("Combien il-y-a t'il de secondes dans 2h35min30s ?");
    if (value == "9330") {
        openImage("images/pyth.png");
    } else {
        if (value != undefined) {
            alert("Mauvaise réponse. Essaye encore ");
        }
    }

}
document.getElementById("blackbox").onclick = blackbox_click;


//click on platename
function platename_click() {
    let value = prompt("13 + [28 - (3+2x4)] =");
    if (value == "30") {
        openImage("images/thal.png");
    } else {
        if (value != undefined) {
            alert("Mauvaise réponse. Essaye encore ");
        }
    }

}
document.getElementById("platename").onclick = platename_click;
//click on baby
function baby_click() {
    let value = prompt("Quel est le nombre romain CMXCIX ?");
    if (value == "999") {
        openImage("images/baby.jpg");
    } else {
        if (value != undefined) {
            alert("Mauvaise réponse. Essaye encore ");
        }
    }

}
document.getElementById("baby").onclick = baby_click;

//click on gate
function gate_click() {
    let code = prompt("Tu as trouvé les 4 mathématiciens?\nEntre le nombre formé de leur 4 chiffres secrets dans cet ordre (par exemple 1234):\n " +  matheux[(alea) %4].name + ", " +matheux[(alea+1) %4].name + ", " +matheux[(alea+2) %4].name + " et " +matheux[(alea+3) %4].name  );

    if (code == matheux[(alea) %4].value + "" +matheux[(alea+1) %4].value + "" + matheux[(alea+2) %4].value + "" + matheux[(alea+3) %4].value) {
		init="";
		while (init==""){init=prompt("Bravo, tu as réussi à sortir, le portail est ouvert! \nMaintenant entre les initiales de ton prénom et de ton nom (par exemple AB):");}
		alert("...et donne ce code à ton prof de maths qui te remettra une récompense:\n\n" + crypt(init) + "\n \n Merci d'avoir joué. A bientôt.");
		window.open("start.html","_self");
    } else {
        if (code != undefined) {
            alert("Ce n'est pas le bon code, le portail ne s'ouvre pas! Cherche encore. ");
        }
    }
}
document.getElementById("gate").onclick = gate_click;

//modal windows functions
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function openImage(link) {
    let img = document.createElement("img");
    img.setAttribute("id","myImg");
    img.setAttribute("src",link);

    document.getElementById("modal-content").appendChild(img);
    openModal();
}
function closeModal() {
    let img = document.getElementById("myImg");
    document.getElementById("modal-content").removeChild(img);
    document.getElementById("modal").style.display = "none";
}

// Crypt a string into its nextLetter()
function crypt(word){
	let crypted=""
	for (let i = 0; i < word.length; i++) {
		crypted=crypted + nextLetter(word[i]);
	}
	return crypted
}

// Return next letter plus A for Z and a for z.
function nextLetter(s){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}