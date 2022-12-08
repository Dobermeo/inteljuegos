window.onload = function() {
    var context = canvas.getContext("2d");
        var x = 300;
        var y = 350;
    
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle="red";
        context.fill();
        
        
        let count=0;
        document.onkeydown = function() {
        count += 1;
        //changing the y position
        y -= 25;
        //clearing the canvas
        
        function draw() {    
        context.clearRect(0, 0, 600, 400);
             
        //redrawing the circle   
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle="red";
        context.fill();
    
        //drawing the count value
        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText("Count: " + count, 20, 30);
        
        window.requestAnimationFrame(draw);
    }
    draw();
    }
    }; 
    
    var puzzle = 0; 
    
    function jump() {
    puzzle++;
        puzzle;
     if(puzzle >= 1) {
    alert("Ha pulsado el boton:" +puzzle + "veces");
    }
    else {
    console.log(puzzle);
    }
    }