const appName = "DERA"
const myName = "Chidera"
let currentSection = "Notes"


console.log(appName)
console.log(myName)
console.log(currentSection)

function loadSection(currentSection) {
    console.log("Loading " + currentSection + " section...")
}

loadSection("Notes")
loadSection("Poetry")
loadSection("Articles")