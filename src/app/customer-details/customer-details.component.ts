import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service'
import { CustomerDetails } from '../app.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
      customer: CustomerDetails | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService:  DataService,
  ) {}
  
  
  ngOnInit(): void {
    this.getId();
  }
  
  getId(): void {
    const id =  this.activatedRoute.snapshot.paramMap.get('id');
    this.customer = this.dataService.getCustomerById(Number(id));
  }
}
