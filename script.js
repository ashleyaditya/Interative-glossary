import { glossary } from "./glossary.js"

let glossaryList = document.querySelector("#glossaryList")
let searchBar = document.querySelector("#searchBar")
let selectClass = document.querySelector("#selectClass")
let selectTags = document.querySelectorAll(".button-value")

searchBar.addEventListener("keyup", (e) => {
  let searchTerm = e.target.value.toLowerCase()
  const filteredGlossary = glossary.filter((item) => {
    return item.term.toLowerCase().includes(searchTerm)
  })
  displayGlossary(filteredGlossary)
})

selectClass.addEventListener("change", (e) => {
  let selectedClass = e.target.value
  const filteredGlossary = glossary.filter((item) => {
    return item.class == selectedClass
  })
  displayGlossary(filteredGlossary)
})

selectTags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    let selectedTag = e.target.value.toLowerCase()
    if (selectedTag == "all") {
      displayGlossary(glossary)
    } else {
      const filteredGlossary = glossary.filter((item) => {
        let tags = item.tags.toString().toLowerCase()
        return tags.includes(selectedTag)
      })
      displayGlossary(filteredGlossary)
    }
  })
})

// display all words
const displayGlossary = (glossary) => {
  const htmlString = glossary
    .map((word) => {
      return `
        <li class="container">
        <h4 class="words">${word.term}</h4>
        <p class="definition">${word.definition}</p>
        </li>`
    })
    .join("")
  glossaryList.innerHTML = htmlString
}

displayGlossary(glossary)
