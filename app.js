
/* BURGER */
var y=document.querySelector("#menu2");
var x=document.querySelector("#menu3");
var z=document.querySelector("#menu1");
var tendina=document.querySelector("#tendina");

var c=0;
var i=0;

var linkTendina = document.querySelectorAll('.link-tendina');
var sottoLinkTendina = document.querySelectorAll('.sottolink-tendina');
console.log(linkTendina);

var frecciaTendina1 = document.querySelectorAll('.freccia-tendina1 path');
var frecciaTendina2 = document.querySelectorAll('.freccia-tendina2 path');

function fburger(){
	if(c%2===0){
   		y.style.transform="rotate(45deg)";
   		x.style.transform="rotate(-45deg)";
   		z.style.opacity=0;
   		x.style.backgroundColor="#E21B23";
   		y.style.backgroundColor="#E21B23";
   		z.style.backgroundColor="#E21B23";
   		tendina.style.left="0vw";


   		for(i=0;i<linkTendina.length;i++) {			//animazione per le scritte all'interno della tendina all'apertura
			linkTendina[i].style.opacity = "1";
			linkTendina[i].style.transform = "translateX(0)";
		}

		for(i=0;i<sottoLinkTendina.length;i++) {			//animazione per le sottoscritte all'interno della tendina all'apertura
			sottoLinkTendina[i].style.opacity = "1";
			sottoLinkTendina[i].style.transform = "translateY(0)";
		}
	}

	else{
		y.style.transform="rotate(0deg)";
		x.style.transform="rotate(0deg)";
		z.style.opacity=1;
		x.style.transform="translate3d(0vh, 1.2vh, 0vh)";
		y.style.transform="translate3d(0vh, -1.2vh, 0vh)";
		x.style.backgroundColor="white";
		y.style.backgroundColor="white";
		z.style.backgroundColor="white";
		x.style="hover #E21B23";
		y.style="hover #E21B23";
		z.style="hover #E21B23";
		tendina.style.left="-25vw";

		for(i=0;i<linkTendina.length;i++) {			//animazione per le scritte all'interno della tendina alla chiusura
			linkTendina[i].style.opacity = "0";
			linkTendina[i].style.transform = "translateX(-5vw)"
		}

		for(i=0;i<sottoLinkTendina.length;i++) {			//animazione per le sottoscritte all'interno della tendina all'apertura
			sottoLinkTendina[i].style.opacity = "1";
			sottoLinkTendina[i].style.transform = "translateY(-5vh)";
		}

	}
	c++;

}

 /* scroll */
function fscroll(){
	document.querySelector(".html").style.scrollBehavior="smooth";
}
