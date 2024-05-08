responses = [
    "Sure?",
    "Reconsidering?",
    "No, really?",
    "Why not yes?",
    "Not ready for yes?",
    "Second thoughts?",
    "Try yes?",
    "Switch to yes?",
    "No? Think again.",
    "Yes, maybe?"
];
let counter = 0
let size = 33
document.getElementById("no").addEventListener("click", function(){
    size *= 1.3;
    document.getElementById("yes").style.fontSize = size + "px";
    document.getElementById("txt").innerHTML = responses[counter]
    counter += 1
});