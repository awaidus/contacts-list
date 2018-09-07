import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private _contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this._contactService.getContacts();
    this._contactService.contactsChanged.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts; 
      }
    );
  }

}
