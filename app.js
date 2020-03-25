
/* BURGER */
 var y=document.querySelector("#menu2");
 var x=document.querySelector("#menu3");
 var z=document.querySelector("#menu1");
 var k=document.querySelector("#tendina");
 var c=0;

function fburger(){
	if(c%2===0){
   		y.style.transform="rotate(45deg)";
   		x.style.transform="rotate(-45deg)";
   		z.style.opacity=0;
   		x.style.backgroundColor="#E21B23";
   		y.style.backgroundColor="#E21B23";
   		z.style.backgroundColor="#E21B23";
   		k.style.left="0vw";
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
		k.style.left="-20vw";
	}
	c++;
}

 /* scroll */
function fscroll(){
	document.querySelector(".html").style.scrollBehavior="smooth";
}
