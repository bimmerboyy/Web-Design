import { printAvgOfStudent, printStudent } from "./src/helper.js";
import Student from "./src/student.js";
import "./src/stilovi.scss";

console.log("Hello from main js file");

const s = new Student("Aldin","Mekic");
s.addSubj(10);
s.addSubj(9);

printStudent(s);
printAvgOfStudent(s);