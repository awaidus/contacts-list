import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  id: number;

  constructor(private _contactService: ContactService,
    private _route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contact = this._contactService.getContact(this.id);
        
      }
    )
  }

  onEditContact() {    
    this._contactService.startEditing.next(this.id); 
    this._router.navigate(['edit'], { relativeTo: this._route }); //this wil append "edit" at current route
    
  }

}
