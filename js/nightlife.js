

var picture1 = document.querySelector('.picture-1');
var text1 = document.querySelector('.text-1');

var picture2= document.querySelector('.picture-2');
var text2 = document.querySelector('.text-2');

var picture3 = document.querySelector('.picture-3');
var text3 = document.querySelector('.text-3');

let pictureArray = new Array;
let textArray = new Array;

for(i=1;i<4;i++){
    pictureElement = ".picture-" + i;
    pictureArray[i] = document.querySelector(pictureElement);

    textElement = ".text-" + i;
    textArray[i] = document.querySelector(textElement);


}
console.log(pictureArray);
console.log(textArray);







picture1.addEventListener('mouseover' , (e) => mouseOver(1),false );
picture2.addEventListener('mouseover' , (e) =>  mouseOver(2),false );
picture3.addEventListener('mouseover' , (e) => mouseOver(3),false );

function mouseOver (index){
    console.log(index);
    textArray[index].classList.add('close');
    pictureArray[index].classList.add('focused-on');
}

function mouseOut(index){
    textArray[index].classList.remove('close');
    pictureArray[index].classList.remove('focused-on');

}

picture1.addEventListener('mouseout' ,(e) => mouseOut(1),false);
picture2.addEventListener('mouseout' ,(e) => mouseOut(2),false);
picture3.addEventListener('mouseout' ,(e) => mouseOut(3),false);
