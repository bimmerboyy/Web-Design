class Student{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.subjects = []
    }

    addSubj(value){
        this.subjects.push(value);
    }

    calcAvg(){
        const sum = this.subjects.reduce((pre,cur) => pre+cur);
        return sum / this.subjects.length;
    }
}

export default Student