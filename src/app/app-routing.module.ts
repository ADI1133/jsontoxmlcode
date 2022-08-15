import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { BodyComponent } from './body/body.component';
// import { JpgtopdfComponent } from './tools/jpgtopdf/jpgtopdf.component';

import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent },

  { path: 'terms-conditions', component: TermsConditionComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

];

// { path: '', component: BodyComponent },
  // { path: 'jpgtopdf', component: JpgtopdfComponent},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
