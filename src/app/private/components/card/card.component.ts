import { Component, Input, OnInit } from '@angular/core';
import { PhoneDetails } from 'src/app/models/phone-model-details';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() slug: string = "";

  details?: PhoneDetails 

  constructor(private phoneService: PhoneService){}

  ngOnInit(): void {
    this.phoneService.details(this.slug).subscribe({
      next: (res) => this.details = res.data
    });
  }
}
