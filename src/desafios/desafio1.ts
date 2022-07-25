// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

// 1a forma
let employee1 = {
    code: 10,
    name: "John"
};

// 2a forma
let employee2: { code: number , name: string } = {
    code: 10,
    name: "John"
};

// 3a forma
interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 10,
    name: "John"
};

// 4a forma
const employee4 = {} as employee;
employee4.code = 10;
employee4.name = "John";