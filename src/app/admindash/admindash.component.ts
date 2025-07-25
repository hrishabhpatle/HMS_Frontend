import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  patients:Patient[]=[];
  constructor(private patientService:PatientService){}
  ngOnInit():void{
    this.getPatient();
  }
  getPatient(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

}
