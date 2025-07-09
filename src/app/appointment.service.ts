import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpclinet:HttpClient) { }
  private baseUrl = 'http://localhost:8080/appointment';
  getAllAppointments():Observable<Appointment[]> {
    return this.httpclinet.get<Appointment[]>(this.baseUrl);
  }
}
