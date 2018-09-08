import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactStartComponent } from "./contacts/contact-start/contact-start.component";
import { ContactEditComponent } from "./contacts/contact-edit/contact-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    {
        path: 'contacts', component: ContactsComponent, children: [
            { path: "", component: ContactStartComponent },
            { path: 'new', component: ContactEditComponent },
            { path: ':id', component: ContactDetailComponent },
            { path: ':id/edit', component: ContactEditComponent }
        ]
    },

    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}