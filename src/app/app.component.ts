import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Go Head';
  name = 'super me';
  result = String;
  address = {
    province: '浙江',
    city:  '杭州'
  };
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get('https://api.github.com/users/seeschweiler')
      .subscribe(data => {
        console.log(data);
      });
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
