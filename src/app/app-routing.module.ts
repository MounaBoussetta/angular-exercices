import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartiesComponent } from './components/parties/parties.component';

const routes: Routes = [
  { path: '', redirectTo: 'parties', pathMatch: 'full' },
  { path: 'parties', component: PartiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
