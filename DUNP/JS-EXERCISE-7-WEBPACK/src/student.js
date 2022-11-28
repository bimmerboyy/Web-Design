class Student {
    constructor(firstName, LastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subjects = [10, 9, 8];
    }
    addSubject(value) {
        this.subjects.push(value);
    }

    calcAvg() {
        const sum = this.subjects.reduce((pre, cur) => pre + cur);
        return sum / this.subjects.length;
    }
}

export default Student