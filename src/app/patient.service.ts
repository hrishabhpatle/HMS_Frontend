import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) { }
 private baseUrl = 'http://localhost:8080/patient';
 getPatientList():Observable<Patient[]>{
  return this.httpclient.get<Patient[]>(`${this.baseUrl}`)
 }
}
