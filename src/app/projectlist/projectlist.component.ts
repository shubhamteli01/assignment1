import { Component } from '@angular/core';
import { Project } from '../Model/model';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})



export class ProjectlistComponent {
  constructor(
    private service: ApiserviceService) {
    this.getData(this.column)
  }

  datasource: any = []
  totalLength: any
  page: number = 1
  searchText: any
  // sortedArray: any[]
  linelist!: Project | any
  linelist2!: Project | any
  column = "type";



  getData(column: any) {

    console.log(column)
    this.service.getDataSorted(column)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.datasource = res
          this.totalLength = this.datasource.length
          console.log(this.datasource.length)
          console.log(this.totalLength)

        },
        error: () => {
          alert("data fetching error")
        }
      })
  }

  getvalue(name: any) {
    console.log(name)
  }

  updateProjectStatus(status: string, id: number) {

    let data
    this.service.getDataById(id)
      .subscribe({
        next: (res) => {
          console.log(res)

          this.linelist = res
          this.linelist2 = this.linelist
          console.log(this.linelist2)
          // this.linelist2.status = "band"
          console.log(this.linelist2)
          data = this.linelist2
          console.log(data)
          // this.putDataObj.type = this.linelist.type
          // this.putDataObj.location = this.linelist.location
          // this.putDataObj.priority = this.linelist.priority

          // console.log(this.putDataObj)
          // console.log(this.putDataObj.type)
          // console.log(this.putDataObj.location)
          // console.log(this.putDataObj.priority)
          alert("status updated")
        },
        error: () => {
          alert("data updating error")
        }
      })



    this.service.updateStatus(id, data)





  }





  //   sortData(list: any[], column: string): any[] {
  //     let sortedArray = list.sort((a, b) => {
  //       if (a[column] > b[column]) {
  //         return 1;
  //       }
  //       if (a[column] > b[column]) {
  //         return -1;
  //       }
  //       return 0;
  //     })
  //     return sortedArray;
  //   }

}
