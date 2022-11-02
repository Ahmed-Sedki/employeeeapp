//const
const msg = "Hi";
console.log(msg);

//let
let i = 1;
while (i < 5) {
    console.log(i)
    i++
}

//array
const employees = [
    "Ahmed Ali",
    "Hallar Ali",
    "Ehsan Amini",
    "Ali Ahmed"
]
console.log("for loop")
for (let index = 0; index < employees.length; index++) {
    const element = employees[index];
    console.log(element)

}

for (const emp of employees) {
    console.log(emp)

}


const root = document.getElementById("root")
root.innerHTML = "Hi from js"

console.log("map")
employees.map(emp => {
    console.log(emp)
    const element = document.createElement("p")
    element.innerHTML = emp
    root.append(element)
})