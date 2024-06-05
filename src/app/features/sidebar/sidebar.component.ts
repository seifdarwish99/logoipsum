import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TranslateModule, DropdownModule , FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menu: SelectItem[] = [];
  constructor(public translate: TranslateService) {
    console.log(translate.instant('sidebar.miniMenu'));
    
    this.menu = [
      { label: translate.instant('sidebar.miniMenu'), value: 'NY' },
      { label: translate.instant('sidebar.miniMenu'), value: 'RM' },
      { label: translate.instant('sidebar.miniMenu'), value: 'LD' }
    ];
  }
}
