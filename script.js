// .daywrap includes the day!

console.log('scripting in progress')

let events = document.querySelectorAll('li.calendar_popover_trigger')
let dayWrap = document.querySelectorAll('.daywrap')
console.log(dayWrap)


document.querySelector('body').remove()
let newBody = document.createElement('body')
let newUl = document.createElement('ul')
newUl.setAttribute('id', 'newUl')

newBody.append(newUl)
document.querySelector('html').append(newBody)


// for (let day of dayWrap){
//     console.log(day.children)
// }

// console.log(events)

for (let i of events){
    console.log(i.children)
    try {
        console.log(i.title)
        console.log(i.innerText)
    } catch (error) {
        console.log('err')
    }

    let newLi = document.createElement('li')
    newLi.innerText = i.innerText
    let newLi2 = document.createElement('li')
    newLi2.innerText = i.title
    newLi.style.margin = '10px 0'
    newLi.style.fontWeight = 'bold'

    document.querySelector('#newUl').append(newLi)
    // document.querySelector('#newUl').append(newLi2)

    // let newHr = document.createElement('hr')
    // document.querySelector('#newUl').append(newHr)
}