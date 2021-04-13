'use struct'
function Employee (name , email , department){
  this.Name = name;
  this.Email=email;
  this.Department=department;
  this.salary=RandomNumber();
  Employee.all.push(this);
};
Employee.all=[];

Employee.prototype.render=function(){
const table=document.getElementById('Table');
const Name=document.createElement('td');
table.appendChild(Name);
Name.textContent=Employee.all.Name;

const Email=document.createElement('td');
table.appendChild(Email);
Email.textContent=Employee.all.Email;

const Department=document.createElement('td');
table.appendChild(Department);
Department.textContent=Employee.all.Department;
const salary=document.createElement('td');
table.appendChild(salary);
salary.textContent=Employee.all.salary;

}
let addToEmployee=document.getElementById('submit');
addToEmployee.addEventListener('click',addEmp)
function addEmp(event){
  event.preventDefult();
  let name=event.target.name;
  let Email=event.target.Email;
  let Department=event.target.Department;
  
  addNewPerson = new Employee(name,Email,Department);
  settingItem();
}
function settingItem(){
  let data = JSON.stringify(Employee.all);
  localStorage.setItem('Persons',data);
}
function gettingItem(){
  const position=JSON.parse(localStorage.getItem('persons'))
  emp=new Employee(position);
}

function RandomNumber(){
return Math.floor(math.random()*(500-100+1))+100;
}
Employee.render;