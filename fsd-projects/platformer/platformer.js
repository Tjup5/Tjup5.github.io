$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(500, 500, 70, 29);
createPlatform( 400, 625, 50, 50, "red");
createPlatform(725, 425, 50, 10, "lime"); 
createPlatform( 625, 400, 50, 50, "red");
createPlatform(425, 800, 50, 10, "lime"); 
createPlatform(100, 20, 10, 10, "lime"); // bright green for a finished platform
createPlatform(500, 0, 20, 290);
createPlatform(800, 325, 50, 50, "red");
createPlatform(500, 0, 20, 290);
createPlatform(1350, 200, 1000, 100, "red");
createPlatform(500, 0, 20, 290);
createPlatform(830, 325, 50, 50, "red");
createPlatform(500, 0, 20, 290);
createPlatform(850, 325, 800, 50, "red");




// TODO 3 - Create Collectables

createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("steve", 400, 400);
createCollectable("diamond", 800, 500, 0.5, 0.1);



// TODO 4 - Create Cannons



createCannon("top", 300, 700);
createCannon("right", 500, 2000);
  createCannon("top", 700, 2000);
createCannon("right", 250, 1200);
  
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
