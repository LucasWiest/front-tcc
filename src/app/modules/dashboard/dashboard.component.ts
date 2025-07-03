import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GroupService } from '../../shared/services/group.service';
import { NgClass } from '@angular/common';
import { TypeService } from '../../shared/services/type.service';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginService } from '../../core/shared/services/login.service';
import { IProfile } from '../../core/nav/profile/@shared/profile.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    NgClass,
    FormsModule
    
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  myGroups: any[] = [];
  groupsToEnter: any[] = [];
  types: any[] = [];

  profile$: Observable<IProfile>;

  profile: IProfile;

  filter: any = {
    search: "",
    status: null,
    onlyTarget: false
  }

  constructor (
    private groupService: GroupService,
    private typeService: TypeService,
    private loginUser: LoginService
  ) {
    this.profile$ = this.loginUser.basicBehavior$

    this.profile$.subscribe(x => {
      this.profile = x;
    });
  }

  ngOnInit(): void {
    this.getEnterGroups();
    this.getMyGroup();
    this.getTypeStatus();
  }

  onFilter() {

    let target = "";

    if (this.filter.onlyTarget)
      target = this.profile.search;

    this.groupsToEnter = this.groupService.getGroupSimple(false, target, this.filter.search, this.filter.status);
  }

  getEnterGroups () {
    this.groupsToEnter = this.groupService.getGroupSimple(false, this.profile.search, this.profile.search);
  }

  getMyGroup () {
    this.myGroups = this.groupService.getGroupSimple(true);
  }

  getTypeStatus() {
    this.types = this.typeService.getTypeByCategory("Status");
  }

}
