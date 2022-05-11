// search button script
// index.html
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const searchBar = document.querySelector('#search-bar')
const resultsURL = "./results.html"
let targetElement
let newPage

function openResultsWindow(){
    newPage = window.open(url, target="_self")
    newPage.document.innerHTML.style.background = "red"
}

// important bits
const port = 3000

btn1.addEventListener('click',btn1Fetch)
btn2.addEventListener('click',btn2Fetch)

// Btn-1 Returns 10 results
function btn1Fetch(e){
    console.log("submit button press detected - btn-1")
    // prevent submit button default behaviour
    e.preventDefault()

    // specify source
    const source = "allfilms" // DATA SOURCE PAGE

    // open new window...
    openResultsWindow()
    targetElement = newPage.document.querySelector('#results-ul')
    console.log(targetElement)
    fetch(`http://localhost:${port}/${source}`)
    .then(response => response.json())
    .then(data => {
        try {        // do something with searchBar.textContent...
        for (let i = 0;i < 10;i++){
            let newLi = newPage.document.createElement('li')
            newLi.textContent = data[i]
            targetElement.appendChild(newLi)
        }
    } catch (err) {
        let newLi = newPage.document.createElement('li')
        newLi.textContent = "Something when wrong!"
        targetElement.appendChild(newLi)
    }
        console.log(data)
    });
}

// Btn-2 Returns 1 result
function btn2Fetch(e){
    console.log("submit button press detected - btn-2")
    // prevent submit button default behaviour
    e.preventDefault()

    // specify source
    const source = "random" // DATA SOURCE PAGE

    // open new window...
    openResultsWindow()

    fetch(`http://localhost:${port}/${source}`)
    .then(response => response.json())
    .then(data => {
        // do something with searchBar.textContent...
        try {
            let newLi = newPage.document.createElement('li')
            newLi.textContent = data
            targetElement.appendChild(newLi)
        }
        catch(err) {
            let newLi = newPage.document.createElement('li')
            newLi.textContent = "Something when wrong!"
            targetElement.appendChild(newLi)
        }
        console.log(data)
    });
}

