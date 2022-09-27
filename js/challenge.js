// 1. Required: See the timer increment every second once the page has loaded.
const counter = document.querySelector('#counter')
let interval = setInterval(incrementCounter, 1000)
function incrementCounter(){
    counter.innerText = parseInt(counter.innerText) + 1
}

// 2. Required: Manually increment and decrement the counter using the plus and minus buttons.
// My Notes: I already created an increment fucntion for the 1st step. Both an increment & decrement function is required for step 2. Then add event listeners
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
function decrementCounter(){
    counter.innerText = parseInt(counter.innerText) - 1
}
plus.addEventListener('click', incrementCounter)
minus.addEventListener('click', decrementCounter)

// 3. Required: "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
const heart = document.querySelector('#heart')
const likes = document.querySelector('.likes')
const numberTracker = {}
heart.addEventListener('click', addLikes)
function addLikes(){
    let second = counter.innerText
    // console.log(second)
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
    // number that is being liked (key):
    console.log(numberTracker)
    // How many clicks that number receives:
    console.log(numberTracker[second])
    renderLikes()
}
function renderLikes(){
    likes.innerHTML = ''
    for(let key in numberTracker){
        console.log('Like Rendered')
        const li = document.createElement('li')
        likes.appendChild(li)
        li.innerText = `
            ${key} has been liked ${numberTracker[key]} time(s)
        `
    }
}

// Pause the counter, which should: pause the counter, disable all buttons, except the pause button, switch the label on the button from "pause" to "resume"
// My Notes: Involves moving from one state to another (toggle between 2 states)
const pause = document.querySelector('#pause')
// initial state:
let paused = false
pause.addEventListener('click', togglePause)
function togglePause(){
    console.log('Pause Counter')
    paused = !paused
    if (paused){
        clearInterval(interval)
        pause.innerText = 'resume'
    }
    else{
        interval = setInterval(incrementCounter, 1000)
        pause.innerText = 'pause'
    }
}

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."
const comments = document.querySelector('#list')
const form = document.querySelector('#comment-form')
const input = document.querySelector('#comment-input')
form.addEventListener('submit', commentSubmit)

function commentSubmit(e){
    e.preventDefault()
    // console.log(document.querySelector('#comment-input').value)
    // console.log(input.value)
    const li = document.createElement('li')
    comments.appendChild(li)
    li.innerText = input.value
    form.reset()
}

