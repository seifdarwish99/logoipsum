import { Component } from '@angular/core';
import { TranslateService , TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  lang!: string;

  constructor(
    public translate: TranslateService
  ) {
    (this.lang = localStorage.getItem('lang') || 'en'),
      this.translate.use(this.lang);
    document.documentElement.dir = this.lang == 'en' ? 'ltr' : 'rtl';
  }

  changeLang(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
    window.location.reload();
  }
}
