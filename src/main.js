//Вам необхідно створити конструктор Студента, у якого мають бути властивості: 
//ім'я, прізвище, рік народження, оцінки, відвідуваність, курс. 
//Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент. 
//Так само у Студента є методи: додати оцінку, додати відвідування, 
//отримати середню успішність, отримати середнє відвідування, 
//отримати кількість пройдених занять, змінити курс (мають оновитися дані про курс), 
//а також отримати всю інформацію про студента.
//Додати Студенту можливість навчатися на кількох курсах з можливістю додавання 
//і видалення курсу.

const student = {

  courses: ['math', 'biology', 'Chemistry'],

  addMark: function(x){
    this.marks.push(x)
  },

  addAttendents: function (pres) {
    if(pres == 'yes')
    {this.attendents.push(1)}
    if(pres == 'no')
      {this.attendents.push(0)}
  },

  averageScore: function(arr){
    let sum = 0;    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length
    console.log(`Average score is ${average}`)
  },

  averageAttendents: function(arr){
    let sum = 0;    
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == 1)
        {sum++}
    }
    let averageAtt = sum / arr.length
    console.log(`Average attendents is ${averageAtt}%`)
  },

  addCourse: function(some, arr){
    for (let i = 0; i <= this.courses.length; i++){
      if (some == this.courses[i]){
        arr.push(some)
      }
    }
  },

  delCourses: function(some, arr){
    for (let i = 0; i <= arr.length; i++){
      if (some == arr[i]){
        arr.splice(i, 1)
      }
    }
  }

}


console.log(student);

const Jhon =  {
  name: 'Jhon',
  surname: 'Ivanko',
  yearBirth: '1995',
  marks: [3, 5, 4, 5],
  attendents: [1, 0, 1, 1, 1],
  trainingCourses: ['Math'],
}

Object.setPrototypeOf(Jhon, student);
console.log(student.isPrototypeOf(Jhon))
console.log(Jhon)

Jhon.addMark(3);
Jhon.addAttendents('yes');
Jhon.addMark(5);
Jhon.addAttendents('yes');
Jhon.addAttendents('no');

Jhon.averageScore(Jhon.marks)
Jhon.averageAttendents(Jhon.attendents)

Jhon.addCourse('biology', Jhon.trainingCourses)

const Emma =  {
  
    name: 'Emma',
    surname: 'Stone',
    yearBirth: '1996',
    marks: [3, 2, 2, 5],
    attendents: [1, 0, 0, 0, 1],
    trainingCourses: ['Math'],
  
}

Object.setPrototypeOf(Emma, student);
console.log(student.isPrototypeOf(Emma))
console.log(Emma)

Emma.addMark(4);
Emma.addAttendents('yes');
Emma.addMark(4);
Emma.addAttendents('yes');
Emma.addAttendents('no');

Emma.averageScore(Emma.marks)
Emma.averageAttendents(Emma.attendents)

Emma.addCourse('biology', Emma.trainingCourses)
Emma.addCourse('Chemistry', Emma.trainingCourses)

Emma.delCourses('biology', Emma.trainingCourses)

const Steve =  {
  
  name: 'Steve',
  surname: 'Stoned',
  yearBirth: '1996',
  marks: [4, 5, 5, 5],
  attendents: [1, 1, 1, 1, 1],
  trainingCourses: ['Math'],
  

}

Object.setPrototypeOf(Steve, student);
console.log(student.isPrototypeOf(Steve))
console.log(Steve)

Steve.addMark(4);
Steve.addAttendents('yes');
Steve.addMark(4);
Steve.addAttendents('yes');
Steve.addAttendents('no');

Steve.averageScore(Steve.marks)
Steve.averageAttendents(Steve.attendents)

Steve.addCourse('biology', Steve.trainingCourses)
Steve.addCourse('Chemistry', Steve.trainingCourses)


//Створити конструктор Група, яка має список студентів і методи для додавання, 
//видалення студентів, а також одержання рейтингу студентів за відвідуваністю і успішністю.

const group = {
  students: [Jhon, Emma],
  

  addStudent: function(name){
        this.students.push(name)
  },

  delStudent: function(name2){
    for (let i = 0; i <= this.students.length; i++){
      if (name2 == this.students[i]){
        this.students.splice(i, 1)
      }
    }
  },

  ratingMarks: function(arr) {
    let scoreArr = []
    
    for (let i = 0; i < arr.length; i++){
      scoreArr.push(arr[i].marks)
            
    }
    console.log(scoreArr)

    const avScoreArr = scoreArr.flatMap(elem => elem.reduce((acc, val) => acc + val, 0) / (elem.length || 1));
    console.log(avScoreArr)

    const ratStudy = {}

    for(let j = 0; j < arr.length; j++){
      ratStudy[arr[j].surname] = avScoreArr[j]

    }
      
    console.log(ratStudy)

    }
    
  }

 
console.log(group)

group.addStudent(Steve)
group.delStudent(Steve) //видалила
group.addStudent(Steve) //додала

console.log(group.students)

group.ratingMarks(group.students)


