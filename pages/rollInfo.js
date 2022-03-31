//adds "lobe" to the choices that need it
var choice = localStorage.getItem("choice");
if (
  choice == "occipital" ||
  choice == "parietal" ||
  choice == "frontal" ||
  choice == "temporal"
) {
  choice += " lobe";
}

//writes correct information in first p tags & rolls the die
var level = localStorage.getItem("level");
//if(localStorage.getItem("increasePoints")==""){
 // console.log("hi");
 roll(parseInt(localStorage.getItem("numPoints")), choice);
//} else {
 // display(parseInt(localStorage.getItem("numPoints")), choice);

//}


//functions
//=======================================================================
function roll(numPoints, choice) {
  if (numPoints == 0) {
    document.getElementById("positiveFeedback").innerHTML =
      "Sorry, the " + choice + " won't help you in this situation.";
    document.getElementById("rollDiv").style.display = "none";
   // document.getElementById("passFail").style.display = "none";
  //  document.getElementById("needToRoll").style.display = "none";
    document.getElementById("pointsAdded").style.display = "none";
    localStorage.setItem("increasePoints", 0);
  } else {
    if(numPoints == 13)
    {
      var current = parseInt(localStorage.getItem("correctAnswers"));
      localStorage.setItem("correctAnswers", current + 1);
      document.getElementById("positiveFeedback").style.display = "block";
      document.getElementById("positiveFeedback").innerHTML = "You got it!";
    }
    else{
      document.getElementById("positiveFeedback").style.display = "block";
      document.getElementById("positiveFeedback").innerHTML = "That's not a bad answer.";
    }
   // document.getElementById("needToRoll").innerHTML =
   //   "You need to roll a " +
    //  Math.round(80 / numPoints) +
    //  " or above to use the " +
    //  choice +
    //  ".";
    //roll die
    var rollNum = Math.floor((Math.random() * 20)+1);
    var pointsEarned = rollNum*numPoints;
    document.getElementById("roll").innerHTML = "Your Roll: " + rollNum;
    document.getElementById("rollDiv").style.display = "block";
   // if (pointsEarned >= 80) {
   //   document.getElementById("passFail").innerHTML = "Woohoo! You did it!";
   // } else {
   //   document.getElementById("passFail").innerHTML =
      //  "You didn't roll high enough.";
   // }
   // document.getElementById("passFail").style.display = "block";
    document.getElementById("pointsAdded").innerHTML = "(+ " + pointsEarned + " points)";
    document.getElementById("pointsAdded").style.display = "block";

  localStorage.setItem("increasePoints", pointsEarned);
  var current = parseInt(localStorage.getItem("totalPoints"));
    localStorage.setItem("totalPoints", current + pointsEarned);
  }
}

function display(numPoints,choice){
if (numPoints == 0) {
    document.getElementById("positiveFeedback").innerHTML =
      "Sorry, the " + choice + " won't help you in this situation.";
    document.getElementById("rollDiv").style.display = "none";
    document.getElementById("pointsAdded").style.display = "none";
    localStorage.setItem("increasePoints", 0);
  } else {
    if(numPoints == 13)
    {
      document.getElementById("positiveFeedback").style.display = "block";
      document.getElementById("positiveFeedback").innerHTML = "You got it!";
    }
    else{
      document.getElementById("positiveFeedback").style.display = "block";
      document.getElementById("positiveFeedback").innerHTML = "That's not a bad answer.";
    }
    document.getElementById("roll").innerHTML = "Your Roll: " + (parseInt(localStorage.getItem("increasePoints"))/numPoints);
    document.getElementById("rollDiv").style.display = "block";
    document.getElementById("pointsAdded").innerHTML = "(+ " + localStorage.getItem("increasePoints") + " points)";
    document.getElementById("pointsAdded").style.display = "block";

  }
}



var bestAnswer = [
  "The best answer was the hypothalamus because it is the part of the brain that determines hunger. It also regulates your body temperature, circadian rhythms and when you're thirsty. The hypothalamus is the link between the nervous and endocrine system so it has control over horomone releases in your body.",
  "The temporal lobe would have been the best answer for this situation because it is what processes sound and allows you to understand and recognize sounds such as language. This section of the cerebral cortex also plays a part in object recognition, especially recognizing the faces of people you know. *The occipital lobe would also have been a valid choice, assuming that your human lip reads.",
  "The hippocampus would be the ideal choice for this problem as it's function is to learn things and store them in long-term memory.",
  "The amygdala is the best choice for this. It's function centers around emotions, causing fear and emotional extremes when relied on to process a situation without the help of higher functions. Because of this, it is in charge of forming and storing emotional memories. The amygdala, too, plays a role in facial recognition along with the temporal lobe.",
  "The cerebellum is the best option for this situation. It is the part of your brain that you use when you learn and perform coordinated movements and things in your muscle memory such as riding a bike, writing or playing an instrument. This section also helps in paying attention and your perception of time passing. It is impaired easily by alcohol.",
  "The best choice here is the frontal lobe, the part of your cerebral cortex responsible for planning. The frontal lobe has a wide variety of functions from giving you your personality to retrieving and storing memories. It can perform abstract thinking, plan and carry out physical movements, process social or emotional factors, help you pay attention, and speak.",
  "The thalamus is the best option here. It acts as a relay, sending sensory information related to sight, hearing, touch and taste to the part of the brain it needs to reach for processing. Being an older part of the brain, the thalamus also regulates sleep and alertness.",
  "The occipital lobe is the part of the brain that processes visual information, making it the best choice for this situation. It also is involved in various types of visual short-term memory.",
  "The brainstem will help you out best as it controls the body's most basic functions. These are things like breathing, feeling pain, and falling asleep. It can keep your human alive without causing too much activity in the higher brain levels so that they can get to sleep.",
  "The parietal lobe is what you're looking for here. It gives you the ability to know where you are in reference to the things around you with spacial processing. As a bonus, it processes sensory information related to touch."
];

document.getElementById("bestAnswer").innerHTML = bestAnswer[level];
