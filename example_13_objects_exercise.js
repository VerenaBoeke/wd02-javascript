// define an array with at least 3 fruits, with their names and their sweetness (1 to 10)
let fruits = [
    {
        name: 'Banane',
        sweetness: 10
    },
    {
        name: 'Zitrone',
        sweetness: 1
    },
    {
        name: 'Wassermelone',
        sweetness: 4
    }
]

// write a function which can append a row to the fruits table, with a fruit as input

let addFruit = (fruit) => {
    fruits.push(fruit)
}

addFruit({
    name: 'Apfel',
    sweetness: 6
})

// iterate over all fruits and insert them as rows in the table
const outputFruit = (fruitsTableBody, fruit) => {
    let tr = document.createElement('tr')
    let tdName = document.createElement('td')
    let tdSweetness = document.createElement('td')
    tdName.innerHTML = fruit.name
    tdSweetness.innerHTML = fruit.sweetness
    tr.appendChild(tdName)
    tr.appendChild(tdSweetness)
    fruitsTableBody.appendChild(tr)
}

const fruitsTableBody = document.getElementById('fruitsTableBody')
fruits.forEach(function(fruit) {
    outputFruit(fruitsTableBody, fruit)
})