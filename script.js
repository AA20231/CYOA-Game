//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let font;

function preload(){
  /*font = loadFont('/assets/font_folder/font.ttf')*/
  liftImage = loadImage("/assets/liftImage.png")
  frontDoorImage = loadImage("/assets/frontDoorImage.png")
  sheldonImage = loadImage("/assets/sheldonImage.png")
  
}

/* SETUP RUNS ONCE */
function setup() {
  fill(255,255,255)
  /*textFont(font);*/
  textSize(36);
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(15);
  noStroke();

  // Set up the home screen
  background(22, 8, 168);
  text(
    "THE BIG BANG THEORY - THEMED COYA GAME:", width / 2,
    height / 2 -150)
    text("You have just started your new job as an experimental physicist\nat Caltech University.\nYou see a man with a box and ask him if he knows the\napartment of your new roommate,\nSheldon Cooper.\nHe tells you to run away.\nDo you continue your route to your new room,\nor did you follow his advice?\nPress enter to take the lift...",
    width / 2,
    height / 2 -100
  );
  

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2 +100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);

  b1Button = new Sprite(-100,-100);
  b2Button = new Sprite(-150,-150);

}

/* DRAW LOOP REPEATS */
function draw() {
  
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "orange";
  enterButton.text = "To the lift!";

  // Add A1 button

  if(enterButton.mouse.presses()){
    showScreen1();
    screen = 1;
    }

  if (screen == 1){
      if (a1Button.mouse.presses()){
        showScreen2();
        screen = 2;
      }else if (a2Button.mouse.presses()){
       showScreen5();
       screen = 5;
    } 

    print(screen);
}else if(screen == 2){
    if (b1Button.mouse.presses()){
      showScreen3();
      screen = 3;
    }else if (b2Button.mouse.presses()){
      showScreen4();
      screen = 4;
    }
}
  if (screen == 0){
    liftImage.resize(100, 0)
    frontDoorImage.resize(150, 0)
    image(liftImage, 450, 200)
    image(frontDoorImage,50, 250)
  } else if (screen == 1){
    sheldonImage.resize(125,0)
    image(sheldonImage, 15, 125)
    
  }else if (screen == 4){
    //video = createVideo("/assets/video.mp4", 200, 200)
    //video.resize(200, 0)
    //video(video, 200, 200)
  }
}

/* FUNCTIONS TO DISPLAY SCREENS */

function showScreen1(){
  background(22, 8, 168);
  text("You chose to take the lift to the room.\nYou knock on what you think is the room. It isn't. Then\nyou go to the right room, and a tall, skinny man opens the door.\nYou:\n'I’m Leonard Hofstadter. I called you about the apartment. You said…'\nMan: 'I know what I said. I know what you said.\nI know what my mother said on March 5, 1992.\nWhat is the sixth noble gas?'\nYou: 'What?'\nMan: 'You said you’re a scientist. What is the sixth noble gas?'", width/2 + 60, height/2-130);
  enterButton.pos = {x: -100, y: -100}

  a1Button.pos = {x: width/2 - 75, y: height/2 + 100} 

  a1Button.w = 100;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "orange";
  a1Button.text = "Uhhh...radon?";

  // Add A2 button

  a2Button.pos = {x: width/2 + 75, y: height/2 + 100} ;

  a2Button.w = 100;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "orange";
  a2Button.text = "Uhhh....neon?"; 
  
}

function showScreen2(){
  
    background(22, 8, 168);
    text("Man: ' Correct. You’ve passed the first barrier to roommate-hood.\nYou may enter.'\nYou continue passing all of the barriers,\nafter answering all of Sheldon's EXTENSIVE questions,\nand you finally get to the last stage, signing the Roommate Agreement.\n\n\nDo you decide to sign it, or do you follow all of the warning signs and run for the hills?", width/2, height/2-100);
    a1Button.pos = {x:-200,y:-200};
    a2Button.pos = {x:-50, y:-50};

    b1Button.pos = {x: width/2 - 50, y: height/2 + 100};

    b1Button.w = 50;
    b1Button.h = 50;
    b1Button.collider = "k";
    b1Button.color = "orange";
    b1Button.text = "Yes...";

    b2Button.pos = {x: width/2 + 50, y: height/2 + 100};

    b2Button.w = 75;
    b2Button.h = 50;
    b2Button.collider = "k";
    b2Button.color = "orange";
    b2Button.text = "Nope, bye!";

  
  
}

function showScreen3(){
  background(22, 8, 168);
  text("You choose to live with Sheldon Cooper...why?\nWell you find that out many seasons later,\nas you get married to the woman who lives opposite you!\nHowever, Sheldon is still as annoying as your suspicions predicted,\nbut he does end up naming his kid after you (though he'll never admit it)",width/2, height/2-100);

  b1Button.pos = {x:-100,y:-100};
  b2Button.pos = {x:-150, y:-150};
  
  
}
function showScreen4(){
  background(22, 8, 168);
  text("Congratulations!\nYou reject his offer and continue to live a happy life\nwith another roommate you find.\nHowever, you may have missed out on other rewards...",width/2, height/2-100);
  b1Button.pos = {x:-100,y:-100};
  b2Button.pos = {x:-150, y:-150};
  
}
function showScreen5(){
    a1Button.pos = {x:-200,y:-200};
    a2Button.pos = {x:-50, y:-50};
    background(22, 8, 168);
    text("Unfortunately, you got the first question wrong.\nYou were rejected as Sheldon Cooper's roommate\nand continue to live a happy life with another roommate you find.\nHowever, you may have missed out on other rewards...", width/2, height/2-100);
}
