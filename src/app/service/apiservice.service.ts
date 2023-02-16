import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Model/model';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  project!: Project
    ; constructor(
      private httpService: HttpClient
    ) { }

  addData(data: any) {
    return this.httpService.post('http://localhost:3000/posts', data)
  }
  getDataById(id: number) {
    // return this.httpService.get('http://localhost:3000/posts')
    return this.httpService.get(`http://localhost:3000/posts/` + id)
  }
  getDataSorted(column: any) {
    // return this.httpService.get('http://localhost:3000/posts')
    return this.httpService.get(`http://localhost:3000/posts?_sort=${column}&_order=asc`)
  }
  updateStatus(id: number, data: any) {
    return this.httpService.put(`http://localhost:3000/posts/` + id, data)
      .subscribe({
        next: (res) => {
          // Updating object 
          let ob = {
             category: res.category,
             department: res.department,
             division: res.division,
             endDate: res.endDate,
             id: res.id,
             location: res.location,
             priority: res.priority,
             projectName: res.projectName,
             reason: res.reason,
             startDate: res.startDate,
             status: obj.status,
             type: res.type
          }
          // Here call delete api of JSON server
           this.httpService.delete('http://localhost:3000/posts'+id);
          
            this.httpService.post('http://localhost:3000/posts', ob); // adding updated object in JSON server
          console.log(res)
          alert("status updated successfully")
        },
        error: () => {
          alert("status update error")
        }
      })
  }
}


