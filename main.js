//https://teachablemachine.withgoogle.com/models/j4kD9kP-v

function preload() {

}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function setup(){
    canvas=createCanvas(300, 300);//used to create a canvas in p5.js. Create canvas is a predifined function of p5.js used to load in the canvas.
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j4kD9kP-v/model.json', modelLoaded);
}

function modelLoaded() {
    console.log(" Teacheble Machine Face Recognition model has been successfully Loaded")
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}