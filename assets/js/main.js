class Person {
    constructor(namePara, alterPara, prufPara) {
        this.name = namePara
        this.alter = alterPara
        this.pruf = prufPara
    }
    info() {
        console.log(`${this.name} is ${this.alter} years old.`)
    }
    write() {
        document.querySelector('section').innerHTML += `${this.name}, ${this.alter} years old.`
    }
}

let emanuella = new Person("Emanuella", 18)
console.log(emanuella.info())

let arrayNamen = []

document.querySelector('[type="button"]').addEventListener('click', (event) => {
    // console.log(event.target.form[0].value)
    // console.log(event.target.form[1].value)
    // console.log(event.target.form[2].checked)
    // console.log(event)
    document.querySelector('ul').innerHTML = ""
    arrayNamen.push(new Person(event.target.form[0].value, event.target.form[1].value, event.target.form[2].checked))
    // console.log(arrayNamen)
    arrayNamen.forEach(names => {
        // console.log(names.pruf)
        if (names.pruf == true) {

            document.querySelector('ul').innerHTML += `
            <li> ${names.name}, ${names.alter} years old </li>`
        }
        else {
            document.querySelector('ul').innerHTML += `
            <li style = "color: red"> ${names.name}, ${names.alter} years old </li>`
        }
    })
})


