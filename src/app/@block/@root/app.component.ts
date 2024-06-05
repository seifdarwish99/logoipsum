import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HomeComponent } from '../../features/home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet  , ButtonModule , NavbarComponent ,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'logoipsum';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
