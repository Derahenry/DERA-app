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

const notes = {
    title: "my first note",
    content : "writing the most rando stuff on here ",
    section: "Notes",
    tone : "casual",
    wordCount: 10
}

console.log(notes.title)
console.log(notes.content)
console.log(notes.section)
console.log(notes.tone)
console.log(notes.wordCount)