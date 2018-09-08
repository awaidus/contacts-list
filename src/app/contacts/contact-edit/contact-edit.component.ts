import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  subscription: Subscription; 
  contact: Contact;
  editedItemIndex: number;
  editMode = false;

  constructor(private _contactService: ContactService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {        
        this.contact = this._contactService.getContact(+params['id']);    
      }
    )

    this.subscription = this._contactService.startEditing.subscribe(
      (index: number)=> {
        this.editMode = true; 
        this.editedItemIndex = index; 
        // if (this.editMode) {
        //   this.contact = this._contactService.getContact(index);          
        // } else {
        //   this.contact = new Contact(); 
        // }
      }
    )
  }

  onSubmit(form: NgForm) {    
    this.contact = form.value; 
    this._contactService.addContact(this.contact); 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe; 
  }

}
