// class Shape {

//   info(): void {
//     console.log("This is a Shape");
//   }

//   draw(): void {
//     console.log("This is a Square");
//   }
// }



// class Rectangle extends Shape {
//   height: number
//   width: number
//   constructor(height: number, width: number) {
//     super()
//     this.height = height
//     this.width = width
//   }

//   area(): number {
//     return this.height * this.width
//   }

//   info(): void {
//     console.log("This is a Rectangle");
//   }
// }

// class Square {
//   height: number
//   constructor(height: number) {
//     this.height = height

//   }

//   area(): number {
//     return this.height * this.height
//   }
// }


// class ColoredRectangle extends Rectangle {
//   color: string

//   constructor(color: string, height: number, width: number

//   ) {
//     super(height,width)
//     this.color = color
//   }
//   info(): void {
//     console.log("זהו מלבן בצבע ____");
//   }
// }





// class Circle extends Shape {
//   radius: number;

//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }

//   draw(): void {
//     console.log("This is a Circle");
//   }
// }

// class Triangle extends Shape {
//   draw(): void {
//     console.log("This is a Triangle");
//   }
// }

// class Square1 extends Shape {
//   sideLength: number;

//   constructor(sideLength: number) {
//     super();
//     this.sideLength = sideLength;
//   }

//   draw(): void {
//     console.log("This is a Square");
//   }
// }

// function renderShapes(shapes: Shape[]): void {
//   for (const shape of shapes) {
//     shape.draw();
//   }
// }

// const shapes: Shape[] = [
//   new Circle(5),
//   new Triangle(),
//   new Square1(4)
// ];

// renderShapes(shapes);




class Person {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string
  ) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

class Patient extends Person {
  patientID: number

  constructor(patientID: number, firstName: string, lastName: string) {

    super(firstName, lastName)
    this.patientID = patientID
  }
}


class Doctor extends Person {
  doctorID: number
  specialization: string

  constructor(doctorID: number, specialization: string, firstName: string, lastName: string) {

    super(firstName, lastName)
    this.doctorID = doctorID
    this.specialization = specialization
  }

  DoctorInfo(): void {
    console.log(`"doctor name ${this.firstName} ${this.lastName} doctorID ${this.doctorID} specialization ${this.specialization}"`);


  }
}

let person3 = new Person("Dodo1", "Cohen")
let person1 = new Person("Dodo2", "Cohen")
let person2 = new Person("Dodo3", "Cohen")
let patient1 = new Patient(1234, "David1", "Cohen")
let patient2 = new Patient(1234, "David2", "Cohen")
let patient3 = new Patient(1234, "David3", "Cohen")
let patient4 = new Patient(1234, "David4", "Cohen")
let doctor1 = new Doctor(1234, "MainDoctor", "David1", "Cohen")
let doctor2 = new Doctor(1234, "MainDoctor", "David2", "Cohen")
let doctor3 = new Doctor(1234, "MainDoctor", "David3", "Cohen")
let doctor4 = new Doctor(1234, "MainDoctor", "David4", "Cohen")
console.log(person1);
console.log(patient1);
console.log(doctor1);

class Appointment {
  patient: Patient
  doctor: Doctor
  date: string
  time: string

  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient
    this.doctor = doctor
    this.date = date
    this.time = time
  }

  infoAppointment(): void {
    console.log(`"doctor name : ${this.doctor.firstName} ${this.doctor.lastName} , doctorID : ${this.doctor.doctorID} , specialization : ${this.doctor.specialization} , patient name : ${this.patient.firstName} ${this.patient.lastName} , date : ${this.date} , time : ${this.time}"`);

  }
}
let appointment1 = new Appointment(patient1, doctor1, "01.01.22", "10:00")
let appointment2 = new Appointment(patient1, doctor1, "01.01.22", "20:00")
let appointment3 = new Appointment(patient1, doctor1, "01.01.22", "30:00")
let appointment4 = new Appointment(patient1, doctor1, "01.01.22", "40:00")
console.log(appointment1);
appointment1.infoAppointment()

class Hospital {
  patients: Patient[]
  doctors: Doctor[]
  appointments: Appointment[]

  constructor(patients: Patient[], doctors: Doctor[], appointments: Appointment[]) {
    this.patients = patients
    this.doctors = doctors
    this.appointments = appointments

  }
  Hospitalinfo():void {
    for ( let i = 0 ; i < this.patients.length ; i ++) {
    console.log(`"firstName : ${this.patients[i].firstName}, doctor : ${this.doctors[i].lastName}, date : ${this.appointments[i].date}"`);
    } 
  }
}
const patients2 = [patient1,patient2,patient3,patient4]
const doctors2 = [doctor1,doctor2 ,doctor3 ,doctor4 ]
const appointments2 = [appointment1 ,appointment2 ,appointment3 ,appointment4 ]
let hospital = new Hospital (patients2 , doctors2 ,appointments2) 
hospital.Hospitalinfo()

//  git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ChaimCymerman0548492309/oop1.git
// git push -u origin main

