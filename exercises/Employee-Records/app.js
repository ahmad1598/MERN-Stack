

let employees = [];

function Employee(name, jobTitle, salary){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = 'Full Time';

    this.printEmployeeForm = function(){
        console.log('Name: ' + this.name + ',' +  ' Job Title: ' +  this.jobTitle + ',' + ' Salary:' +  this.salary + ',' + ' Status:' + this.status);
    }
}


let bob = new Employee('Bob' , 'V School Instructor' , '$3000/hour');
bob.status = 'Part time';
employees.push(bob);

let mo = new Employee('Mo' , 'Founder' , '$3/hour');
mo.status = 'always';
employees.push(mo);

let nate = new Employee('Nate' , 'Full Stack Web developer' , '$100/hour');
employees.push(nate);

