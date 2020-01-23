export class Patients{
    mobile_no: number;
    patient_name: string;
    email_id: string;
    dob: Date;
    gender: string;
    blood_group: string;
    address: string;
}

export class Doctors{
    doctor_id:string;
    doctor_name:string;
    speciality_name:string;
    visiting_hrs:string;
    education:string;
    password:string;
}

export class AppointmentData{
    appointment_id: string;
    patient_name: string;
    doctor_name: string;
    appointment_date: Date;
    appointment_status: string;
    speciality_name: string;
    visiting_hrs: string;
    doctor_id: string;
    mobile_no: 9421951125
}

export class Login{
    login_id: string;
    login_password: string;
}