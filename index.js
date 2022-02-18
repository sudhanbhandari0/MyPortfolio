var texts = ["STUDENT","ENGINEER", "DEVELOPER"];
var count = 0;
var i = 0;
function changeText() {

    if(i<texts[count].length){
        document.getElementById("changing-text").innerHTML += texts[count].charAt(i);
        i++;
        setTimeout(changeText,300);
    }
    else{
        i=0;
        document.getElementById("changing-text").innerHTML = "";
        if(count<2){
            count++;
        }
        else{
            count=0;
        }
        changeText();
    }
}
changeText();
