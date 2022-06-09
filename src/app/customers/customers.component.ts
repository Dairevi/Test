import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customers: any;
  constructor(public customersService: CustomersService) { }

  ngOnInit(): void {
    this.customers = this.customersService.getCustomers();
  }


}
