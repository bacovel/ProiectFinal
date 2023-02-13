import { Component, OnInit } from '@angular/core';
import { PhoneModel } from 'src/app/models/phone-model';
import { PhoneResponseModel } from 'src/app/models/phone-model-latest-response';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private phoneService: PhoneService){}

  phones: PhoneModel[] = [];

  ngOnInit(): void {
    this.phoneService.latest().subscribe({
      next: (res) => this.phones = res.data.phones,
      error: (e) => console.error(e)
    })
  }

  checkValue(event:any){
    console.log(event.target.checked)
    if(event.target.checked){
      this.phoneService.topByInterest().subscribe({
        next:(res: PhoneResponseModel) => this.phones = res.data.phones,
        error:(e)=>console.log(e)
      });
    }
    else{
      this.phoneService.latest().subscribe({
        next:(res:PhoneResponseModel) => this.phones= res.data.phones,
        error:(e)=>console.log(e)
      });
    }
  }

}
