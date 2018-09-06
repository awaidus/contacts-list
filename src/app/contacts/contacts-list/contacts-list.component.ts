import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact("Muhammad Awaidus", "0334-8566415"), 
    new Contact("Ahmed", "55815-454554-1")
  ];
  constructor() {     
  }

  ngOnInit() {
  }

}
