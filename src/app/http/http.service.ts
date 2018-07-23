import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
  };


  constructor(private http: HttpClient) {
  }

  /**
   *
   * @param reqUrl
   * @param reqBody
   * @param success
   * @param error
   */
  public post(reqUrl: string, reqBody, success: Function, error: Function) {
    this.http.post(reqUrl, reqBody, this.httpOptions)
      .subscribe(
        val => {
          if (val['resultCode'] === 200) {
            console.log('success');
            success(val['message'], val['data']);
          } else {
            error(val['message']);
          }
        },
        err => {
          console.log('post请求失败', err);
          error(err['message']);
        }
      );
  }

  /**
   *
   * @param reqUrl
   * @param success
   * @param error
   */
  public get(reqUrl: string, success: Function, error: Function) {
    this.http.get(reqUrl, this.httpOptions)
      .subscribe(
        val => {
          if (val['resultCode'] === 200) {
            success(val['message'], val['data']);
          } else {
            error(val['message']);
          }
        },
        err => {
          console.log('get请求失败', err);
          error(err['message']);
        }
      );
  }
}
