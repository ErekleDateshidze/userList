import { Component } from '@angular/core';
import { CustomerList } from '../app.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
 constructor(private dataService:  DataService) {}
  customers!: CustomerList[];
  async loadUsers() {
    this.customers = await this.dataService.getCustomerList();
  }

  ngOnInit(): void {
    this.loadUsers();
  }
}
