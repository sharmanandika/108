function startclassification(){
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/x7jHlpsTq/model.json",modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotresults);
}

function gotresults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_r=Math.floor(Math.random()*255)+1;
    random_g=Math.floor(Math.random()*255)+1;
    random_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I hear"+results[0].label;
    document.getElementById("result_label").style.color="rbg("+random_r+","+random_g+","+random_b+")";
    document.getElementById("result_confidence").innerHTML="Accuracy"+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    img=document.getElementById("Ear img.png")
}

}