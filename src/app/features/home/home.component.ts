import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from '../table/table.component';
import { CalenderComponent } from '../calender/calender.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    TranslateModule,
    TableComponent,
    CalenderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
