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

const notes =[ {
    title: "my first note",
    content : "writing the most rando stuff on here ",
    section: "Notes",
    tone : "casual",
    wordCount: 10
},
{
    title: "my second note",
    content : "writing the most rando stuff on here ",
    section: "Poetry",
    tone: "poetry",
    wordCount: 45},


{
    title: "my third note",
    content : "writing the most random stuff on here ",
    section: "Journal",
    tone: "casual",
    wordCount: 45}

]
notes.forEach(function(note) {
    console.log(note.title + " -" + note.section )
})


const noteInput = document.getElementById("noteInput")
const addBtn = document.getElementById("addBtn")
const noteList = document.getElementById("noteList")

addBtn.addEventListener("click", function() {
    const noteText = noteInput.value

    if (noteText === "") {
        console.log("Please write something first!")
        return
    }

    noteList.innerHTML += "<p>" + noteText + "</p>"
    noteInput.value = ""
})