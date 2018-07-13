import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http/http.service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {UserInfoServiceService} from '../info/user-info-service.service';
import {UserInfoData} from './user-info-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = 'admin';
  passwd = 123456;

  constructor(private router: Router, private httpService: HttpService, private userInfo: UserInfoServiceService) {
  }

  ngOnInit() {
    $('body').append('<h3>test</h3>');
  }

  onLogin(value) {
    const that = this;
    const reqBody = {
      userName: value.username,
      password: value.passwd
    };

    // 测试逻辑
    // that.router.navigate(['/app/home']);

    this.httpService.post(environment.domain + 'users/login', reqBody, function (message, data) {
      const user = data as UserInfoData;
      console.log(user);
      that.userInfo.setUserInfo(user);
      that.router.navigate(['/app/home']);
    }, function (message) {
      console.log(message);
    });
  }
}




// /**
//  * 登录
//  */
// login() {
//   /* if (this.loginForm.valid) {
//    let that = this;
//    this.httpService.post(this.userBusinessService.login(), {
//    userName:  this.loginForm.controls['userName'].value,
//    password:  this.loginForm.controls['password'].value
//    }, function (successful, data, res) {
//    if (successful && Utils.resultSuccess(data.resultType)) {
//    const toastCfg = new ToastConfig(ToastType.SUCCESS, '', data.resultMsg, 3000);
//    that.toastService.toast(toastCfg);
//    that.router.navigate(['/app/home']);
//    }else if(successful && Utils.resultFailure(data.resultType)){
//    const toastCfg = new ToastConfig(ToastType.WARNING, '', data.resultMsg, 3000);
//    that.toastService.toast(toastCfg);
//    }else{
//    const toastCfg = new ToastConfig(ToastType.ERROR, '', data.resultMsg, 3000);
//    that.toastService.toast(toastCfg);
//    }
//    }, function (successful, msg, err) {
//    const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
//    that.toastService.toast(toastCfg);
//    });
//
//    }*/
//
//   const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '登录成功！', 3000);
//   this.toastService.toast(toastCfg);
//   this.router.navigate(['/app/home']);
// }
