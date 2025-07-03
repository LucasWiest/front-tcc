import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { GroupService } from '../../../shared/services/group.service';
import { TypeService } from '../../../shared/services/type.service';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [
    NgMultiSelectDropDownModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})

export class EditComponent implements OnInit {

  types: any[] = [];

  group: any = {
  name: '',
  description: '',
  target: [],
  status: "Ativo",
  id: 200,
  nMembers: 1
};

  options: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'description',
    allowSearchFilter: true
  }

  constructor(
    private groupService: GroupService,
    private typeService: TypeService,
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getProfessions();
  }

  save() {

    this.groupService.save(this.group);

    this.userService.saveProfile(this.group.id);

    this.router.navigate(['/dashboard']);

  }

  getProfessions() {
    this.types = this.typeService.getProfessions();
  }

}
