import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  subscription: Subscription;

  constructor(private _contactService: ContactService,
    private _router: Router,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contacts = this._contactService.getContacts();
    this.subscription = this._contactService.contactsChanged.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
  }

  onNewContact() {
    this._router.navigate(['new'], { relativeTo: this._route });
  }

  // onEditItem(index: number){
  //   this._contactService.startEditing.next(index); 
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
