var randomeNumber1 = 1 + Math.floor(Math.random() * 6);
var randomeNumber2 = 1 + Math.floor(Math.random() * 6);

function dice_selector(n,name) {
//   switch (n) {
//     case 1:
//       document.querySelector(name).setAttribute("src", "images\\dice1.png");
//       break;
//     case 2:
//       document.querySelector(name).setAttribute("src", "images\\dice2.png");
//       break;
//     case 3:
//       document.querySelector(name).setAttribute("src", "images\\dice3.png");
//       break;
//     case 4:
//       document.querySelector(name).setAttribute("src", "images\\dice4.png");
//       break;
//     case 5:
//       document.querySelector(name).setAttribute("src", "images\\dice5.png");
//       break;
//     case 6:
//       document.querySelector(name).setAttribute("src", "images\\dice6.png");
//       break;
//   }
   var file_name = "images\\dice"+n+".png";
   document.querySelector(name).setAttribute("src",file_name);
}

dice_selector(randomeNumber1,".player_1_dice");
dice_selector(randomeNumber2,".player_2_dice");

if(randomeNumber2<randomeNumber1){
    document.querySelector("#title").textContent="Player 1 wins";
}
else if(randomeNumber2>randomeNumber1){
    document.querySelector("#title").textContent="Player 2 wins";
}
else{
    document.querySelector("#title").textContent="Its a Draw";
}

/*  
Another approach:
var file_name = "images\dice"+n+".png";
document.querySelector(name).setAttribute("src","file_name");
*/