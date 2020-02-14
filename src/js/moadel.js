/*
    {
        grade:x,
        zarib:z,
        finalgrade:y
    }
*/
export default class Moadel {
    constructor() {
        this.grades = [];
    }
    addGrade(grade, zarib, mostamar) {

        grade = `${grade}` * 1;
        mostamar = `${mostamar}` * 1;
        zarib = `${zarib}` * 1;
        const length = 1 + zarib;
        console.log(length);
        this.grades.push({ grade, zarib, mostamar, finalGrade: (grade * zarib + mostamar) / length });
        return this;
    }
    showMoadel() {
        let finalGrades = [];
        let grades = 0;
        this.grades.forEach(el => {
            finalGrades.push(el.finalGrade);
        });
        finalGrades.forEach(el => {
            grades = grades + el;
        });
        return grades / finalGrades.length;
    }
}