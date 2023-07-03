function startClassification()
{
    navigator.mediaDevices.getUserMedia
    (
        {
            audio:true
        }
    );
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-73Ww_N8H/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_label").innerHTML = '- Posso Ouvir - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = '- Precisão - '+ (results[0].confidence*100).toFixed(2)+"  %";
        img = document.getElementById('dog')
        img1 = document.getElementById('cat')
        img2 = document.getElementById('cow')
        img3 = document.getElementById('monkey')
        
        if (results[0].label == "Latido") 
        {
            img.src = 'dog.gif';
            img1.src = 'cat.jpeg';
            img2.src = 'cow.png';
            img3.src = 'monkey.jpg';
        }
        else if (results[0].label == "Miado")
        {
            img.src = 'dog.jpeg';
            img1.src = 'cat.gif';
            img2.src = 'cow.png';
            img3.src = 'monkey.jpg';
        }
        else if (results[0].label == "Muuu")
        {
            img.src = 'dog.jpeg';
            img1.src = 'cat.jpeg';
            img2.src = 'cow.gif';
            img3.src = 'monkey.jpg';
        }
        else if (results[0].label == "Guinchar")
        {
            img.src = 'dog.jpeg';
            img1.src = 'cat.jpeg';
            img2.src = 'cow.png';
            img3.src = 'monkey.gif';
        }
    }
}





























