
let doing = false;
let spin = 7
let status = document.getElementById("status")

function doSlot(){
	if (doing){return null;}
	doing = true;
	let numChanges = randomInt(1,4)*7
	let numberSlot1 = numChanges+randomInt(1,7)
	let numberSlot2 = numChanges+2*7+randomInt(1,7)
	let numberSlot3 = numChanges+4*7+randomInt(1,7)


	let i1 = 0;
	let i2 = 0;
	let i3 = 0;
	let play = 0
	status.innerHTML = "SPINNING"
	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
	slot3 = setInterval(spin3, 50);
	function spin1(){
		i1++;
		if (i1>=numberSlot1){
			clearInterval(slot1);
			return null;
		}
		slotTile = document.getElementById("slot1");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numberSlot2){
			clearInterval(slot2);
			return null;
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin3(){
		i3++;
		if (i3>=numberSlot3){
			clearInterval(slot3);
			testWin();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		play++;
		if (play==spin){
			play=0;
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}
function testWin(){
	let slot1 = document.getElementById("slot1").className
	let slot2 = document.getElementById("slot2").className
	let slot3 = document.getElementById("slot3").className

  if (((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2 && slot3 == "a7") ||
		(slot1 == slot3 && slot2 == "a7") ||
		(slot2 == slot3 && slot1 == "a7") ||
		(slot1 == slot2 && slot1 == "a7") ||
		(slot1 == slot3 && slot1 == "a7") ||
		(slot2 == slot3 && slot2 == "a7") ) && !(slot1 == slot2 && slot2 == slot3 && slot1=="a7")){
		status.innerHTML = "<img src = 'https://media0.giphy.com/media/3o6MbqNPaatT8nnEmk/200w.gif?cid=82a1493b8bbmzvd9ah4rzrfccch82u8vxk2s9m2kda7b11g8&rid=200w.gif&ct=g'>";
		
	}else{
    status.innerHTML = "<img src = 'https://media1.giphy.com/media/rKj0oXtnMQNwY/200w.gif?cid=82a1493bph5qrcgcgqr4sqdb39eptnpvvevee6tlu9d95gkz&rid=200w.gif&ct=g'>";
	}
	doing = false;
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}