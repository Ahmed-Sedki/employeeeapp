let employees = [
    { id: 1, firstName: "Ahmed", lastName: "A.", age: 10 },
    { id: 2, firstName: "Mohammed", lastName: "M.", age: 20 },
    { id: 3, firstName: "Ali", lastName: "Al.", age: 30 },
    { id: 4, firstName: "Sami", lastName: "S.", age: 40 }

]

const newEmployee = { id: 5, firstName: "Ahmed", lastName: "Saleh", age: 50 }
employees.push(newEmployee)
console.log(employees)  
const newArray =[...employees,
{
    id: 6, firstName: "Thabit", lastName: "Aloui", age: 40   
}]
console.log(newArray)