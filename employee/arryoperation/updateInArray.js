let employees = [
    { id: 1, firstName: "Ahmed", lastName: "A.", age: 10 },
    { id: 2, firstName: "Mohammed", lastName: "M.", age: 20 },
    { id: 3, firstName: "Ali", lastName: "Al.", age: 30 },
    { id: 4, firstName: "Sami", lastName: "S.", age: 40 }

]
console.log(employees)
const newArray = [...employees.filter(emp => emp.id !== 3),
{
    id: 3, firstName: "New Ali", lastName: "Al.", age: 30 
}]
console.log(newArray)