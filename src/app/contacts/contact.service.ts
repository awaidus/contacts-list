import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactsChanged = new Subject<Contact[]>(); 
  startEditing = new Subject<number>(); 

  constructor() { }

  private contacts: Contact[] = [
    new Contact("Muhammad Awaidus", "0334-8566415"), 
    new Contact("Ahmed", "55815-454554-1")
  ];

  public getContacts(){
    return this.contacts.slice();
  }

  public getContact(index: number){
    return this.contacts[index];
  }

  addContact(contact: Contact){
    this.contacts.push(contact); 
    this.contactsChanged.next(this.contacts.slice());
  }

  addContacts(contacts: Contact[]){
    this.contacts.push(...contacts);
    this.contactsChanged.next(this.contacts.slice());
  }
  
}
