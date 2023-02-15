import { Component } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {




  constructor(

    private service: ApiserviceService) { }

  submit(data: any) {
    console.log("submit called")
    console.log(data)

    this.service.addData(data)
      .subscribe({
        next: (res) => {
          alert("data added successfully")
        },
        error: () => {
          alert("data added failure")
        }
      })
  }







}
