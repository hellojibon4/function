const numbers = [1, 2, 3, 4, 5];
const players = [ {}, {}, {}, {}]
const employees = [
    { id: 1, name: "Alice", position: "Developer", salary: 2900 },
    { id: 2, name: "Bob", position: "Designer", salary: 2500 },
    { id: 3, name: "Charlie", position: "Manager", salary: 3500 }
]

employees[1].name = "jibon";
console.log(employees[1].name);
console.log(employees[2].position);

// for(const employee of employees){
//     console.log(employee.position, employee.salary);
// }

for(const emp of employees){
    const person = emp;
    const personInfo = person.name+ ': '+ person.salary;
    console.log(personInfo);
}