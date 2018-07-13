import {Component, OnInit} from '@angular/core';
import {MainData, UserData} from './main-model';
import {Router} from '@angular/router';
import {HttpService} from '../http/http.service';
import {environment} from '../../environments/environment';
import {UserInfoServiceService} from '../info/user-info-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userData: UserData = new UserData;

  constructor(private router: Router, private httpService: HttpService,
              private userInfoService: UserInfoServiceService) {
    const that = this;
    this.httpService.get(environment.domain + 'user_info/' + that.userInfoService.getUserInfo().id,
      function (message, data) {
        that.userData = data as UserData;
        console.log(that.userData);
      }, function (message) {
        console.log(message);
      });
  }

  ngOnInit() {
  }

}
