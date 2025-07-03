import { Component, OnInit } from '@angular/core';
import { IProfile } from './@shared/profile.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { TypeService } from '../../../shared/services/type.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { InstitutionService } from '../../../shared/services/institution.service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, RouterLink],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  profile: IProfile = null;

  profissions: any[] = [];

  institution: any[] = [];

  edit: boolean = false;

  constructor(
    private loginService: LoginService,
    private typeService: TypeService,
    private instService: InstitutionService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {

        this.edit = true;

        this.getUser();
      } else {
        this.profile = {
          email: "",
          name: "",
          search: "",
          institution: "",
          description: "",
          password: "",
          phone: ""
        }

        this.edit = false;
      }
    });

    this.getPro();
    this.getInst();

  }

  getPro() {
    this.profissions = this.typeService.getProfessions();
  }

  getUser() {
    this.profile = this.loginService.getUser()
  }

  getInst() {
    this.institution = this.instService.getInstitutions();
  }

  save() {
    this.loginService.createUser(this.profile);

    this.router.navigate(['/dashboard']);
  }

  navigate() {
    if (this.edit)
      this.router.navigate(['/dashboard']);
    else
      this.router.navigate(['/login']);
  }

}
