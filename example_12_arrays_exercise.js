
// change the h1 tag with id="title" to have the text "flowers"
document.getElementById('title').innerHTML = "Flowers";

// create a list of flowers
const flowers = ['Kamille', 'Lilie', 'Rose', 'Gänseblümchen']

// write a function which adds a text to a ul element as an li element
const outputFlower = (ul, flower) => {
    let li = document.createElement('li')
    li.innerHTML = flower
    ul.appendChild(li)
}

// iterate through your flowers array and create an li for each flower
const ul = document.getElementById('list')
flowers.forEach(function(flower) {
    outputFlower(ul, flower)
})


