import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { tableCardData } from '../data';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    IconFieldModule,
    InputIconModule,
    SelectButtonModule,
    TranslateModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  get cardsData() {
    return tableCardData;
  }

  products = [
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
    {
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      mail: 'Example@company.com',
      days: 'Friday',
    },
  ];
  paymentOptions: any[] = [
    { name: 'ج', value: 1 },
    { name: 'س', value: 2 },
    { name: 'ح', value: 3 },
    { name: 'ج', value: 4 },
    { name: 'س', value: 5 },
  ];
  // , workDays:'FRIDAY'
  constructor(public translate: TranslateService){}
}
