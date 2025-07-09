import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
constructor(private appointmentService:AppointmentService) { }
Appointments: any[] = [];
ngOnInit(): void {
  this.getAllAppointments();
}
getAllAppointments() {
  this.appointmentService.getAllAppointments().subscribe(
    (data: any[]) => {
      this.Appointments = data;
    },
    (error) => {
      console.error('Error fetching appointments:', error);
    }
  );
}
}