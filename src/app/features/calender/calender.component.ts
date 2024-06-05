import { Component } from '@angular/core';
import { calenderData } from '../data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';



@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [TranslateModule , CalendarModule , SelectButtonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})
export class CalenderComponent {

  get calenderCards() {
    return calenderData;
  }
  paymentOptions: any[] = [
    { name: 'السبت', value: 1 },
    { name: 'الاحد', value: 2 },
    { name: 'الاثنين', value: 3 },
    { name: 'الثلاثاء', value: 4 },
    { name: 'الاربعاء', value: 5 },
    { name: 'الخميس', value: 6 },
    { name: 'الجمعة', value: 7 },
  ];

  constructor(){
    console.log(this.calenderCards);
    
  }
}
