import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'super me';
  lang = 'zh';

  constructor(private http: HttpClient, private translate: TranslateService) {
  }

  ngOnInit(): void {
    // this.http
    //   .get('https://api.github.com/users/seeschweiler')
    //   .subscribe(data => {
    //     console.log(data);
    //   });

    // ng2-translate国际化服务相关的配置
    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang(this.lang);
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }
}

// interface Address {
//   province: String;
//   city: String;
// }
//
// export class UserComponent {
//   name: string;
//   address: Address;
//   showSkills: boolean;
//   skills: string[];
//
//   constructor() {
//     this.name = 'Semlinker';
//     this.address = {
//       province: '福建',
//       city: '厦门'
//     };
//     this.showSkills = true;
//     this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
//   }
// }
