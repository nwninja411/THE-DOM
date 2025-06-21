//this function will take the input from the form and display on the page
function processForm(){
    //create shortcuts
    let travelersName = document.getElementById("txtName");
    let Kinship = document.getElementById("txtKin");
    let Vitality = document.getElementById("numVitality");
    let Honor = document.getElementById("numHonor");

    //console.log("name=" + heroName.value + "Skills=" + Skills.value + "Health=" + Health.value + "Points=" + Points.value);

    let output = "Travlers Name: " + travelersName.value + "<BR>" +
                "Kinship: " + Kinship.value + "<BR>" +  
                "Vitality: " + Vitality.value + "<BR>" +
                "Points: " + Honor.value;

    //console.log(output);

    document.getElementById("h2Travler").style.display = "block";
    document.getElementById("divOutput").style.display = "block";

    //direct reference to the output
    document.getElementById("divOutput").innerHTML = output;

    //clear out the form inputs in case the browser does not do it automatically
    travelersName.value = "";
    Kinship.value = "";
    Vitality.value = "";
    Honor.value = "";
}

//Create an event listner so that the enter key will add an item to the list
document.getElementById("frmTravler").addEventListener("keypress", function (Enter){
    if(Enter.key === "Enter"){
     processForm();
}
})