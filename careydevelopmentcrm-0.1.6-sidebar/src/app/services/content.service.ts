import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }

  public getallabouthospital(){
    return this.httpClient.get("https://localhost:5001/api/AboutHospital");
  }

  public getallappointmentform(){
    return this.httpClient.get("https://localhost:5001/api/AppointmentForm");

  }
  public getcontact(){
    return this.httpClient.get("https://localhost:5001/api/Contact");

  }
  public getalldoctors(){
    return this.httpClient.get("https://localhost:5001/api/Doctor");

  }
  public getalldepartments(){
    return this.httpClient.get("https://localhost:5001/api/Departments");

  }
  public getallourservices(){
    return this.httpClient.get("https://localhost:5001/api/OurServices");

  }
  public getallourexpertise(){
    return this.httpClient.get("https://localhost:5001/api/OurExpertise");

  }
  public getallfaqs(){
    return this.httpClient.get("https://localhost:5001/api/FAQs");

  }
  public getallblogs(){

    return this.httpClient.get("https://localhost:5001/api/Blogs");
  }
  public getalltestimonials(){
    return this.httpClient.get("https://localhost:5001/api/Testimonials");

  }
  public getprivacypolicyandtnc(){
    return this.httpClient.get("https://localhost:5001/api/PrivacyPolicyAndTnC");

  }
  public getallhomeslider(){
    return this.httpClient.get("https://localhost:5001/api/HomeSlider");

  }
  public getallvideo(){
    return this.httpClient.get("https://localhost:5001/api/Video");

  }
}
