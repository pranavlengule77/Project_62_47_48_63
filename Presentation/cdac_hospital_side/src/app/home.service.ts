import { Injectable } from '@angular/core';
import { Patients, Doctors } from './models';
@Injectable({
  providedIn: 'root'
})

export class Home {
  dataPatients: Array<Patients> = [
    {
      appointmentId: 401,
      patientName: "Sonali Garg",
      doctorName: "Omkar Nate",
      apptDate: new Date(2019, 11, 29, 12, 30),
      speciality: "general surgery",
      appointmentStatus: "confirmed"
    },
    {
      appointmentId: 402,
      patientName: "Ratan gupta",
      doctorName: "uzair",
      apptDate: new Date(2019, 12, 22, 12, 20),
      speciality: "general surgery",
      appointmentStatus: "not confirmed"
    },
    {
      appointmentId: 403,
      patientName: "Harshil Agrawal",
      doctorName: "Mahendra",
      apptDate: new Date(2019, 9, 22, 12, 20),
      speciality: "general surgery",
      appointmentStatus: "confirmed"
    }
  ]
  dataToday: Array<Patients> = [
    {
      appointmentId: 401,
      patientName: "Vaibhav Kumar",
      apptDate: new Date(2019, 11, 29, 12, 30),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    },
    {
      appointmentId: 402,
      patientName: "Sunil Rathod",
      apptDate: new Date(2019, 11, 29, 12, 40),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    },
    {
      appointmentId: 403,
      patientName: "Shiv Kumar",
      apptDate: new Date(2019, 11, 29, 12, 50),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    }
  ];
  dataFuture: Array<Patients> = [
    {
      appointmentId: 401,
      patientName: "Vaibhav Kumar",
      apptDate: new Date(2020, 0, 1, 12, 30),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    },
    {
      appointmentId: 402,
      patientName: "Sunil Rathod",
      apptDate: new Date(2020, 0, 3, 12, 40),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    },
    {
      appointmentId: 403,
      patientName: "Shiv Kumar",
      apptDate: new Date(2020, 0, 2, 12, 50),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    }
  ];
  dataRequests: Array<Patients> = [
    {
      appointmentId: 404,
      patientName: "Kashish Kamara",
      apptDate: new Date(2020, 0, 1, 12, 30),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    },
    {
      appointmentId: 405,
      patientName: "Dheeraj Chordiya",
      apptDate: new Date(2020, 0, 3, 12, 40),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    },
    {
      appointmentId: 406,
      patientName: "Sumit Kumar",
      apptDate: new Date(2020, 0, 2, 12, 50),
      doctorName: "Omkar Nate",
      speciality: "General Surgery",
      appointmentStatus: "Confirmed"
    }
  ];

  dataDoctors: Array<Doctors> = [
    {
      doctorid: "A101",
      doctorname: "Dr Maxim Bady",
      education: "MBBS,(DTDC)",
      speciality: "General surgeon",
      visitinghrs: "9:00 to 11:00"
    },
    {
      doctorid: "A102",
      doctorname: "Dr Omkar Nate",
      education: "MD,(DTDC)",
      speciality: "Urologist",
      visitinghrs: "11:00 to 13:00"
    },
    {
      doctorid: "A103",
      doctorname: "Dr Pranav Lengule",
      education: "MD,(DTDC)",
      speciality: "Nephrologist",
      visitinghrs: "13:00 to 15:00"
    }
  ]
  constructor() {

  }

   updateDoctor(_doctor: Doctors) {
    let temp: Doctors;
    this.dataDoctors.forEach(element => {
      if (_doctor.doctorid === element.doctorid) {
        temp = element;
      }
    });
    if (temp != null) {
      let index = this.dataDoctors.indexOf(temp);
      this.dataDoctors[index].education = _doctor.education;
      this.dataDoctors[index].visitinghrs = _doctor.visitinghrs;
      return true;
    }
    return false;
  }

  searchDoctor(_doctorId: string){
    let temp: Doctors;
    this.dataDoctors.forEach(element => {
      if (_doctorId === element.doctorid) {
        temp = element;
      }
    });
    return temp;
  }

  searchPatient(_patienName:string){
    let temp: Patients;
    this.dataPatients.forEach(element => {
      if(_patienName === element.patientName){
        temp=element;
      }
    });
    return temp;
  }

  deletePatient(_patient:Patients){
    console.log(_patient.appointmentId + " deleted successfully");
    this.dataToday = this.dataToday.splice(this.dataToday.indexOf(_patient), 1);
    console.log(this.dataToday.toString());
  }

  getPatient(_patientAppointmentId: number): Patients {
    let temp: Patients = null;
    this.dataPatients.forEach(element => {
      if (element.appointmentId === _patientAppointmentId) {
        console.log("Data Found");
        temp = element;
      }
    });
    console.log("Data Not Found" + _patientAppointmentId);
    return temp;
  }

  getToday() {
    return this.dataToday;
  }

  getFuture() {
    return this.dataFuture;
  }

  getRequests() {
    return this.dataRequests;
  }
  startPatientSession(appointmentId) {
    var temp: Patients;
    this.dataToday.forEach(element => {
      if (element.appointmentId === appointmentId) {
        temp = element;
      }
    });
    console.log(temp.appointmentId + " deleted successfully");
    this.dataToday.splice(this.dataToday.indexOf(temp), 1);
    console.log(this.dataToday.toString());
  }
  cancelTodayAppointment(appointmentId) {
    var temp: Patients;
    this.dataToday.forEach(element => {
      if (element.appointmentId === appointmentId) {
        temp = element;
      }
    });
    console.log(temp.appointmentId + " deleted successfully");
    this.dataToday.splice(this.dataToday.indexOf(temp), 1);
    console.log(this.dataToday.toString());
  }
  cancelFutureAppointment(appointmentId) {
    var temp: Patients;
    this.dataFuture.forEach(element => {
      if (element.appointmentId === appointmentId) {
        temp = element;
      }
    });
    console.log(temp.appointmentId + " deleted successfully");
    this.dataFuture.splice(this.dataFuture.indexOf(temp), 1);
    console.log(this.dataFuture.toString());
  }
  confirmAppointmentRequest(_appointmentId) {
    var temp: Patients;
    this.dataRequests.forEach(element => {
      if (element.appointmentId === _appointmentId) {
        temp = element;
      }
    });
    if (temp != null) {
      this.dataFuture.push(temp);
      this.dataRequests.splice(this.dataRequests.indexOf(temp), 1);
      console.log(this.dataFuture);
      console.log(this.dataRequests);
      return true;
    }
    return false;
  }

  cancelAppointmentRequest(_appointmentId) {
    var temp: Patients;
    this.dataRequests.forEach(element => {
      if (element.appointmentId === _appointmentId) {
        temp = element;
      }
    });
    console.log(temp.appointmentId + " deleted successfully");
    this.dataRequests.splice(this.dataRequests.indexOf(temp), 1);
    console.log(this.dataRequests.toString());
  }
  // confirmFutureAppointment(appointmentId){

  // }
} 
