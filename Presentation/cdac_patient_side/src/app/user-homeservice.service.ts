import { Injectable } from '@angular/core';
import { Patients } from './patients';
import { Doctormapping } from './doctormapping';
import { Appointmentclass } from './appointmentclass';
import { Registration } from './registration';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHomeserviceService {

  url = 'http://b2012c42.ngrok.io/api/patients/login';


  cancelData: Array<Patients> = [
    {
      AppointmentId: 101,
      DoctorName: 'Dr. Omkar Nate',
      TimeSlot: '10:30',
      Date: new Date(2020, 1, 6, 12, 30)
    },
    {
      AppointmentId: 102,
      DoctorName: 'Dr. Debarshi Pal',
      TimeSlot: '17:00',
      Date: new Date(2020, 0, 22, 12, 30)
    },
    {
      AppointmentId: 103,
      DoctorName: 'Dr. Lalit Mahajan',
      TimeSlot: '13:40',
      Date: new Date(2020, 0, 29, 12, 30)
    }
  ];

  constructor(private http: HttpClient) { }




  getCancelData() {
    return this.cancelData;
  }

  cancelAppointment(AppointmentId) {
    // tslint:disable-next-line: prefer-const
    let temp: Patients;
    // tslint:disable-next-line: no-shadowed-variable
    this.cancelData.forEach(element => {
      if (element.AppointmentId === AppointmentId) {
        temp = element;
      }
    });
    // console.log(temp.AppointmentId + 'deleted successfully');
    this.cancelData.splice(this.cancelData.indexOf(temp), 1);
    console.log(this.cancelData.toString());
  }

  setTime(hrs: number, min: number) {
    const x = new Date();
    x.setHours(hrs, min);
    return x;
  }

  general() {

    const data: Array<Doctormapping> = [
      {
        doctorid: 101,
        doctorname: 'Dr Abhishek Renuse',
        education: 'MBBS,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      },
      {
        doctorid: 102,
        doctorname: 'Dr Ajit Kulkarni',
        education: 'MBBS ,(DTDC)',
        visitinghrsfrom: this.setTime(11, 0),
        visitinghrsto: this.setTime(13, 0)
      }
    ];

    return data;
  }

  ent() {
    const data: Array<Doctormapping> = [
      {
        doctorid: 103,
        doctorname: 'Dr Omkar Nate',
        education: 'MD,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      },
      {
        doctorid: 104,
        doctorname: 'Dr Lalit Mahajan',
        education: 'MD,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      }
    ];
    return data;
  }

  neurology() {
    const data: Array<Doctormapping> = [
      {
        doctorid: 105,
        doctorname: 'Dr Pranav Lengule',
        education: 'MD,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      },
      {
        doctorid: 106,
        doctorname: 'Dr Debarshi Pal',
        education: 'MD,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      }
    ];
    return data;
  }

  pulmonology() {
    const data: Array<Doctormapping> = [
      {
        doctorid: 107,
        doctorname: 'Dr Shreya garg',
        education: 'MBBS,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      },
      {
        doctorid: 108,
        doctorname: 'Dr Sumedha Mahajan',
        education: 'MBBS,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      }
    ];
    return data;
  }

  nephrology() {
    const data: Array<Doctormapping> = [
      {
        doctorid: 109,
        doctorname: 'Dr Aditya Tiwari',
        education: 'MD,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      },
      {
        doctorid: 110,
        doctorname: 'Dr Soham Chakraborty',
        education: 'MD,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      }
    ];
    return data;
  }

  urology() {
    const data: Array<Doctormapping> = [
      {
        doctorid: 111,
        doctorname: 'Dr Palash Nalode',
        education: 'MBBS,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      },
      {
        doctorid: 112,
        doctorname: 'Dr Harshil Agarwal',
        education: 'MBBS,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      }
    ];
    return data;
  }

  anaesthesiology() {
    const data: Array<Doctormapping> = [
      {
        doctorid: 113,
        doctorname: 'Dr Maxim Bady',
        education: 'MBBS,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      },
      {
        doctorid: 114,
        doctorname: 'Dr Md Uzair',
        education: 'MBBS,(DTDC)',
        visitinghrsfrom: this.setTime(15, 30),
        visitinghrsto: this.setTime(18, 30)
      }
    ];
    return data;
  }

  getAllAppointdetails() {
    const x: Array<Appointmentclass> = [
      {
        appointmentid: 'A101',
        doctorname: 'Dr Lalit Mahajan',
        appointmentdate: new Date()
      },
      {
        appointmentid: 'A102',
        doctorname: 'Dr Sumit Singh',
        appointmentdate: new Date()
      },
      {
        appointmentid: 'A103',
        doctorname: 'Dr Omkar Nate',
        appointmentdate: new Date()
      },
      {
        appointmentid: 'A104',
        doctorname: 'Dr Debarshi Pal',
        appointmentdate: new Date()
      },
      {
        appointmentid: 'A105',
        doctorname: 'Dr Shreya Garg',
        appointmentdate: new Date()
      },
      {
        appointmentid: 'A106',
        doctorname: 'Dr Vaishnavi Dhore',
        appointmentdate: new Date()
      }
    ];
    return x;
  }

  register() {
    // tslint:disable-next-line: no-unused-expression
   const x: Array<Registration> = new Array<Registration>();
  }

}
