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
    return this.httpService.get(`http://localhost:3000/posts/` + id).subscribe({
      next: (res: any) => {
        // Updating object
        let ob = {
          category: res.category,
          department: res.department,
          division: res.division,
          endDate: res.endDate,
          location: res.location,
          priority: res.priority,
          projectName: res.projectName,
          reason: res.reason,
          startDate: res.startDate,
          status: data.status,
          type: res.type,
        };
        console.log(data.status);
        console.log(ob);
        this.httpService
          .put('http://localhost:3000/posts/' + id, ob)
          .subscribe({
            next: (data: any) => {
              console.log(data);
            },
            error: (data: any) => {
              console.log(data);
            },
          }); // adding updated object in JSON server

        alert('status updated successfully');
      },
      error: () => {
        alert('status update error');
      },
    });
  }
}


