
console.log(employees)

let newArray =[]
const index = 2;
for (const emp of employees) {
    if (emp.id !== index) {
        newArray.push(emp)
    }
    
}
console.log(newArray)

const arrayWithFilter = employees.filter(emp => emp.id!== index )
console.log(arrayWithFilter)