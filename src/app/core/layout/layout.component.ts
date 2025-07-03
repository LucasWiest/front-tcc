import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NavComponent, RouterModule],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
