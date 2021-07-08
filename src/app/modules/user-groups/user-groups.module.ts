import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGroupsRoutingModule } from './user-groups-routing.module';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupListComponent } from './components/group-list/group-list.component';


@NgModule({
  declarations: [GroupDetailComponent, GroupListComponent],
  imports: [
    CommonModule,
    UserGroupsRoutingModule
  ]
})
export class UserGroupsModule { }
