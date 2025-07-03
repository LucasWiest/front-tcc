import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../../shared/chat/chat.component';
import { GroupService } from '../../shared/services/group.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { TypeService } from '../../shared/services/type.service';


@Component({
  selector: 'app-group',
  imports: [
    ChatComponent,
    NgMultiSelectDropDownModule
  ],
  standalone: true,
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent implements OnInit {

  users: any[] = [];
  group: any;
  sub: any;
  alreadySend: boolean = false;
  id: number | null;

  constructor(
   private groupService: GroupService,
   private userService: UserService,
   private typeService: TypeService,
   private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    let aux = this.route.snapshot.paramMap.get('id');

    this.id = aux ? Number.parseInt(aux) : null;

    this.getGroup();
    this.getUsers();
    this.getMySub();
  }

  getGroup() {
    this.group = this.groupService.getGroupById(this.id!);
  }

  getUsers() {
    this.users = this.userService.getUsers(this.id!)
  }

  getMySub() {
    this.sub = this.userService.getMySub(this.id!);
  }

  sendAsk() {
    this.userService.postUserGroup(this.id!);

    //this.getMySub();

    this.alreadySend = true;
  }

  getType() {
    this.typeService.getProfessions();
  }


}
