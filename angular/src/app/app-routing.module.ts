import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { AppitemComponent } from './appitem/appitem.component';
import { EditlistComponent } from './editlist/editlist.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes: Routes = [
  { path: '', component: ItemlistComponent },
  { path: 'appitem', component: AppitemComponent },

  { path: 'editlist', component: EditlistComponent },
  { path: 'viewlist', component: ViewlistComponent },
  { path: 'itemlist', component: ItemlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
