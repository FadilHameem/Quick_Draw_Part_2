quick_draw_data_array=["Pen","Paper","Book","Bottle","Tree", "Car"];
random_no = Math.floor((Math.random()*quick_draw_data_array.length)+1);
console.log(random_no, quick_draw_data_array);

sketch = quick_draw_data_array[random_no];
console.log("Sketch to be drawn : ", sketch);
document.getElementById("sketch_to_be_drawn").innerHTML =  '<p id="sketch_to_be_drawn">Sketch To Be Drawn : '+sketch+'</p>';

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score: 0;

function updateCanvas(){
    background("white");
    random_no = Math.floor((Math.random()*quick_draw_data_array.length)+1);
    console.log(random_no, quick_draw_data_array);
    document.getElementById("sketch_to_be_drawn").innerHTML =  '<p id="sketch_to_be_drawn">Sketch To Be Drawn : '+sketch+'</p>';
}

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function draw(){
    check_sketch();
    if(drawn_sketch == sketch){
        answer_holder = "set";
        score++;
        document.getElementById("score").innerHTML = '<span id="score">Score : '+score+'</p>';
    }
}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = '<span id="timer">Timer : '+timer_counter+'</span>';
    console.log("Time : ", timer_counter);
    if(timer_counter > 1000){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}