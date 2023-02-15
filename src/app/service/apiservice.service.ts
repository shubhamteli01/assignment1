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
          console.log(res)
          alert("status updated successfully")
        },
        error: () => {
          alert("status update error")
        }
      })
  }
}


