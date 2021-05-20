var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.strangeharbors.com%2Fblog%2F2019%2F4%2F26%2Ffilm-review-avengers-endgame&psig=AOvVaw1RxGNVJv93OczP72ScAlov&ust=1619958871406000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCu65y_qPACFQAAAAAdAAAAABAK";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
    }

    function new_image(get_image)
    {
        fabric.Image.fromURL(get_image, function(Img) {
            block_image_object = Img;
            
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top:player_y,left:player_x
            });
            canvas.add(block_image_object);
        });
        }
        window.addEventListener("keydown", my_keydown);

        function my_keydown(e)
        {
            keyPressed = e.keycode;
            console.log(keyPressed);
        
        if(e.shiftkey == true && keyPressed =='80'){
            console.log("p and shift pressed together ");
            block_image_width = block_image_width + 5;
            block_image_height = block_image_height + 5;
            document.getElementById("current_width").innerHTML = block_image_width;
            document.getElementById("current_height").innerHTML = block_image_height;

        }

             
        if(e.shiftkey == true && keyPressed =='77'){
            console.log("m and shift pressed together ");
            block_image_width = block_image_width - 5;
            block_image_height = block_image_height - 5;
            document.getElementById("current_width").innerHTML = block_image_width;
            document.getElementById("current_height").innerHTML = block_image_height;

        }
 if(keyPressed == '38'){
    up();
    console.log("up");
    }

if(keyPressed == '40'){
    down();
    console.log("down");
        }

 if(keyPressed == '37'){
      left();
       console.log("left");
            }

if(keyPressed == '39'){
       right();
      console.log("right");
                }


        } 
if(keyPressed == '70') 
        {
             new_image('https://i.postimg.cc/hGnyTPLB/ironman-face.png'); 
             console.log("f");   
            } 


if(keyPressed == '66') 
            {
     new_image('https://i.postimg.cc/FscwL6M0/spiderman-body.png');
     console.log("b"); 
          }


 if(keyPressed == '76')    
            {           
      new_image('https://i.postimg.cc/KzF6GDqt/hulk-legs.png');
     console.log("l");
     }


if(keyPressed == '82')
 {
    new_image('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png');
     console.log("r"); 
    }

if(keyPressed == '72')
      {
    new_image('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png');
     console.log("h");
     }

     function up ()
        {
            if(player_y >=0)
    
            {
                player_y = player_y-block_image_height;
                console.log("block image height = " + block_image_height);
                console.log("when up arrow key is pressed, X = " +   player_x +  " , Y = "+player_y);
                canvas.remove(player_object);
                player_update();
    
            }
        }
        function down()
        {
            if(player_y <=500)
            {
                player_y = player_y + block_image_height;
                console.log("block image height = " + block_image_height);
                console.log("When Down arrow key is pressed, X = " +  player_x +  " , Y = "+player_y);
                canvas.remove(player_object);
                player_update();
            }

        }
        function left()
        {
            if(player_x >0)
            {
                player_x = player_x - block_image_width;
                console.log("block image width = " + block_image_width);
                console.log("When Left arrow key is pressed, X = " +  player_x +  " , Y = "+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        function right()
        {
            if(player_x <=850)
            {
                player_x = player_x + block_image_width;
                console.log("block image width = " + block_image_width);
                console.log("When Left arrow key is pressed, X = " +  player_x +  " , Y = "+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }