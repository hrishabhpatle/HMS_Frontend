 🏥 Hospital Management System – Frontend (Angular)
This is the Angular-based frontend of the Hospital Management System project. It interacts with the backend (Spring Boot REST APIs) and provides separate features for Doctors and Admins.

 
  
🚀 Tech Stack
Technology	Version
Angular	17+
TypeScript	5+
HTML / CSS	Tailwind / Bootstrap
HTTP Client	Axios / HttpClient
Backend	Spring Boot REST API
Routing	Angular Router

📂 Folder Structure
 
src/
├── app/
│   ├── components/         --> 
│   ├── pages/
│   │   ├── home/           --> Home screen
│   │   ├── patient/        --> Add/Edit/Delete Patients
│   │   ├── appointment/    --> Manage Appointments
│   │   └── medicine/       --> Medicine List + Stock Management
│   ├── services/           --> API Integration
│   └── app-routing.module.ts
👩‍⚕️ Doctor Features
✅ Patient Management

Add new patient

Update existing patient details

Delete a patient

✅ Medicine Management

View medicine list

Add new medicine

Edit medicine stock

Remove a medicine

👨‍💼 Admin Features
✅ Appointment Management

Add new appointment

View appointment list

Edit appointments

Delete appointments

🏠 Home Page
Basic navigation bar with links to:

Home

Patients

Appointments

Medicines

Logout

🔧 API Integration
All REST API calls are made to the Spring Boot backend running at:
http://localhost:8080/api/...
Use Angular's HttpClient or axios (depending on your setup) in services.

Example for patient service:
getAllPatients(): Observable<Patient[]> {
  return this.http.get<Patient[]>(`${this.apiBase}/patients`);
}
🛠️ How to Run
Clone the frontend repo

git clone https://github.com/your-username/hospital-management-frontend.git
cd hospital-management-frontend

Install dependencies
npm install

Run the app
ng serve

Open in browser:
http://localhost:4200/
 
📦 Build for Production
 
ng build --prod
📌 To Do
 Add role-based routing

 Responsive UI for mobile

 Toast notifications for CRUD actions

🔗 Backend Repo
👉 Hospital Management Backend (Spring Boot) 
https://github.com/hrishabhpatle/HMS


🙋‍♂️ Author
Hrishabh Patle
 

