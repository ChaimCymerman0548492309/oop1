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

let person = new Person("Dodo", "Cohen")
let patient = new Patient(1234, "David", "Cohen")
let doctor = new Doctor(1234, "MainDoctor", "David", "Cohen")
console.log(person);
console.log(patient);
console.log(doctor);

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

  infoAppointment (): void {
    console.log(`"doctor name : ${this.doctor.firstName} ${this.doctor.lastName} , doctorID : ${this.doctor.doctorID} , specialization : ${this.doctor.specialization} , patient name : ${this.patient.firstName} ${this.patient.lastName} , date : ${this.date} , time : ${this.time}"`);
    
  }
}
 let appointment = new Appointment(patient ,doctor , "01.01.22" , "10:00" )
 console.log(appointment);
 appointment.infoAppointment()

