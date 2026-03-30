const appName = "DERA"
const myName = "Chidera"
let currentSection = "Notes"


console.log(appName)
console.log(myName)
console.log(currentSection)

function loadSection(currentSection) {
    console.log("Loading " + currentSection + " section...")
}

const sections = ["Notes", "Articles", "Literature" , "Poetry", "journal" ]

sections.forEach(loadSection)