import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { Observable, tap } from 'rxjs';
import { IProfile } from './profile/@shared/profile.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  user: any = null;

  userObservable: Observable<IProfile>;

  constructor(
    private loginServ: LoginService
  ) {

    this.userObservable = this.loginServ.basicBehavior$;

    this.userObservable.pipe(
      tap((us) => {
        this.user = us;
      })
    ).subscribe();

  }

  getUser() {
    this.user = this.loginServ.getUser();
  }


}
