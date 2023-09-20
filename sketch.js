var myParagraph;
var secondText;
let x=0;
let y=0;
let button;
let img;
let slider;

function preload() {
   //p5 img
   img = loadImage('dog.png');
}

function setup() {
   createCanvas(4000,4000);


   image(img,0,0);

   slider=createSlider(3,72,12);
   slider.position(50,300);



   // .textSize(10);

   secondText = createP("some text");

   button = createButton('i want new color');
   button.position(200,200);
   button.mousePressed(makeChange);

   colorMode(HSB, 255);

}

function draw() {
//   myParagraph.position(frameCount % 200, 0);
// moving text
myParagraph = createP("hi dog");
myParagraph.position(0, 0);
myParagraph.position(x,y);
x = (mouseX);
y = (mouseY);

// myParagraph.textSize(70);


}

function makeChange() {
  myParagraph.style("color", color(random(0, 255), 255, 255));
}

/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
1. Where, in the p5 reference, do we find all this DOM stuff?
2. Why is the text so large when it's just a "paragraph"?
-css style has it set to xx-large
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/