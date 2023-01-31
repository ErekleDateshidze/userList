import { Injectable } from '@angular/core';
import { default as data } from '../customerList.json';
import { default as details } from '../customerDetails.json';
import { CustomerList, CustomerDetails } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getCustomerList(): Promise<CustomerList[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, 1000);
    });
  }

  getCustomerById(id: number): CustomerDetails | undefined {
    return details.find((r: CustomerDetails) => r.id === id);
  }
  constructor() { }
}
