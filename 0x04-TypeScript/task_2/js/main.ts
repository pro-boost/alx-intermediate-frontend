interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks():string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "working from home"
  }
  getCoffeeBreak(){
    return "Getting a coffee break"
  }
  workDirectorTasks(){
    return "Getting to director tasks"
  }
}
class Teacher  implements TeacherInterface{
  workFromHome(){
    return "cannot work from home"
  }
  getCoffeeBreak(){
    return "Cannot have a break"
  }
  workTeacherTasks(){
    return "Getting to work"
  }
}
function createEmployee(salary:number|string): Teacher | Director{ 
if (typeof salary === "number" && salary < 500){
return new Teacher()
}
return new Director()
}

 function isDirector(employee:Director|Teacher): employee is Director {
  return employee instanceof Director;
 }


function executeWork(employee:Director|Teacher): string{
  if(isDirector(employee)){
    return employee.workDirectorTasks()
  }
  else {
  return employee.workTeacherTasks()
}
}

  type Subject = "Math" | "History";

  function teachClass(todayClass: Subject){
    if(todayClass==="Math"){
      return "Teaching Math"
    }
    return "Teaching History"
  }
  console.log(teachClass('Math'))
  console.log(teachClass('History'))