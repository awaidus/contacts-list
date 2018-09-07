import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactsChanged = new EventEmitter<Contact[]>(); 

  constructor() { }

  private contacts: Contact[] = [
    new Contact("Muhammad Awaidus", "0334-8566415"), 
    new Contact("Ahmed", "55815-454554-1")
  ];

  getContacts(){
    return this.contacts.slice();
  }

  addContact(contact: Contact){
    this.contacts.push(contact); 
    this.contactsChanged.emit(this.contacts.slice());
  }
  
}
