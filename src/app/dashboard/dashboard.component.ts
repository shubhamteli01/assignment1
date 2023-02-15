import { Component } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(

    private service: ApiserviceService) {

  }


  // getData(column: any) {

  //   console.log(column)
  //   this.service.getData(column)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res)


  //       },
  //       error: () => {
  //         alert("data fetching error")
  //       }
  //     })
  // }

}
