//edited

/*
numbers of sections:
1- amygdala - s1
2- brainstem - s2
3- cerabellum - s3
4- frontal lobe - s4
5- hippocampus - s5
6- hypothalamus - s6
7- occipital lobe - s7
8- parietal lobe - s8
9- temporal lobe - s9
10-thalamus - s10
*/

//variables
//=========================================================================== 

var level = parseInt(localStorage.getItem("level"), 10);
var choice = localStorage.getItem("choice");
//each object represents one level, each property is the points for one selection in that level's situation
var points = [
  [4, 5, 8, 7, 0, 13, 0, 0, 0, 0],
  [0, 0, 6, 7, 0, 0, 13, 0, 13, 10],
  [10, 0, 0, 10, 13, 0, 12, 0, 9, 6],
  [13, 0, 0, 12, 6, 9, 0, 0, 0, 0],
  [0,0,13,9,0,0,6,11,0,0],
  [0,0,0,13,0,0,0,0,0,0],
  [0,0,0,5,0,0,10,10,10,13],
  [0,0,0,7,0,0,13,0,0,9],
  [0,13,7,0,0,5, 0 , 0 , 0, 0],
  [0,0,10,5,4,0,0,13,0,0]
];

//Text for the situations

var problems = ["It's 10:30. Time to start reminding your human that it's almost time for that lunch break they have in 1 1/2 hours!",
"A friend walks up beside your human and you're almost too busy gaping at their hair and wondering how much hairspray it must have taken to pull off that style to realize they're talking to your human. Quick, which part of the brain do you need to activate?",
"Your human just walked into a room full of people whose names they're going to have to learn. Either you're going to have to find something to write with or route all this new information somewhere to store it in memory.",
"The human's friend just brought them flowers. A lot of strong emotions coming in on your console right now, which part of the brain will you allocate this memory to for storage?",
"It's been a while since your human has ridden a bike with all this icy winter weather but there must be information stored away somewhere in this brain to help them out...",
"Your human looks at the list of homework they have in their planner. It's far too much to finish tonight, they're going to need to decide which is the highest priority and make a plan to complete the rest later. ",
"Today, the human is going to the amusement park with their friends. There's going to be a lot of sensory information coming in which you need to sort out and send to the right place. ",
"Your human just got their driver's license so now they're going to be doing a lot more driving. All that visual information coming information coming in is going to need to be sent somewhere for processing quickly.",
"The night time is when you get a break from your job and let the brain do it's own thing but you need to appoint someone to keep your human's basic functions such as breathing going while they're asleep.",
"Your human is taking a gymnastics class! You learn that its essential to be able to know where your body is in space to do all those fancy flips. Where might you find a brain function to help with this?"];




//OnClick functions
//===========================================================================

//switches page and levels up/ selects a choice to save in local storage if required by button
function switchPage(newPage, levelUp, lockChoice) {
  window.location.href = newPage;

  if (levelUp == true) {
    localStorage.setItem("level", level + 1);
  }
  if (lockChoice == true) {
    if (choice == "null") {
      alert("Please choose an option");
      window.location.href = "select.html";
    }
    localStorage.setItem("choice", choice);
    setPoints();
  }
}

//sets choice equal to selected brain part
function setChoice(section) {
  var borderOff = document.getElementsByTagName("img");
  for (var i = 0; i < borderOff.length; i++) {
    borderOff[i].style.borderColor = "black";
  }
  document.getElementById(section).style.borderColor = "purple";
  choice = section;
}

//Game Funtionality
//===========================================================================

function setPoints() {
  var idx;
  switch (choice) {
    case "amygdala":
      idx = 0;
      break;
    case "brainstem":
      idx = 1;
      break;
    case "cerebellum":
      idx = 2;
      break;
    case "frontal":
      idx = 3;
      break;
    case "hippocampus":
      idx = 4;
      break;
    case "hypothalamus":
      idx = 5;
      break;
    case "occipital":
      idx = 6;
      break;
    case "parietal":
      idx = 7;
      break;
    case "temporal":
      idx = 8;
      break;
    case "thalamus":
      idx = 9;
      break;
  }
  localStorage.setItem("numPoints", points[level][idx]);
}


document.getElementById('problem').innerHTML = problems[level];
