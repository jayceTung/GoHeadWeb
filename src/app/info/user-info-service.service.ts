import { Injectable } from '@angular/core';
import {UserInfoData} from '../login/user-info-model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoServiceService {

  private userInfo = new UserInfoData();

  constructor() { }

  public setUserInfo(userInfo: UserInfoData) {
    this.userInfo = userInfo;
  }

  public getUserInfo(): UserInfoData {
    return this.userInfo;
  }
}
