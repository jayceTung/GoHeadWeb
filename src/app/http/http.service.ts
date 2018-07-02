import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
  };


  constructor(private http: HttpClient) {
  }

  // public request(url: string, options: RequestOptionsArgs, success: Function, error: Function): any {
  //   // this.spinService.spin(true);
  //   this.http.request(url, options).subscribe(res => {
  //     // this.spinService.spin(false);
  //     success(res.ok, res.json(), res);
  //   }, err => {
  //     // this.spinService.spin(false);
  //     // 处理请求失败
  //     let msg = this.requestFailed(url, options, err);
  //     error(err.ok, msg, err);
  //   });
  //
  // }
  //
  // public request(url: String, success: Function, error: Function) {
  //   this.http.post().subscribe((res) => {
  //     // 成功回调
  //   }, (err) => {
  //     // 失败回调
  //   });
  // }

  public post(reqUrl: string, reqBody) {
    this.http.post(reqUrl, reqBody, this.httpOptions)
      .subscribe(
        val => {
          console.log('post请求成功', val);

          if (val['resultCode'] === 200) {
            // comp.postOk(val, flag);
            console.log('success');
          } else {
            // comp.postErr(val, flag);
          }
        },
        error => {
          console.log('post请求失败', error);
          // comp.postErr(error, flag);
        }
      );
  }

  public get(reqUrl: string) {
    this.http.get(reqUrl, this.httpOptions)
      .subscribe(
        val => {
          console.log('get请求成功', val);

          if (val['resultCode'] === 200) {
            // comp.getOk(val, flag);
          } else {
            // comp.getErr(val, flag);
          }

        },
        error => {
          console.log('get请求失败', error);
          // comp.getErr(error, flag);
        }
      );
  }


  // public get(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  // }, error: Function = function (successful, msg, err) {
  // }): any {
  //   return this.request(url, new RequestOptions({
  //     method: RequestMethod.Get,
  //     search: HttpService.buildURLSearchParams(paramMap)
  //   }), success, error);
  // }
  //
  // public post(url: string, body: any = null, success: Function = function (successful, data, res) {
  // }, error: Function = function (successful, msg, err) {
  // }): any {
  //
  //   return this.request(url, new RequestOptions({
  //     method: RequestMethod.Post,
  //     body: body,
  //     headers: new Headers({
  //       'Content-Type': 'application/json; charset=UTF-8'
  //     })
  //   }), success, error);
  // }
  //
  // public postFormData(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  // }, error: Function = function (successful, msg, err) {
  // }): any {
  //   return this.request(url, new RequestOptions({
  //     method: RequestMethod.Post,
  //     search: HttpService.buildURLSearchParams(paramMap).toString(),
  //     headers: new Headers({
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  //     })
  //   }), success, error);
  // }
  //
  // public put(url: string, body: any = null, success: Function = function (successful, data, res) {
  // }, error: Function = function (successful, msg, err) {
  // }): any {
  //   return this.request(url, new RequestOptions({
  //     method: RequestMethod.Put,
  //     body: body
  //   }), success, error);
  // }
  //
  // public delete(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  // }, error: Function = function (successful, msg, err) {
  // }): any {
  //   return this.request(url, new RequestOptions({
  //     method: RequestMethod.Delete,
  //     search: HttpService.buildURLSearchParams(paramMap).toString()
  //   }), success, error);
  // }
  //
  // public patch(url: string, body: any = null, success: Function = function (successful, data, res) {
  // }, error: Function = function (successful, msg, err) {
  // }): any {
  //   return this.request(url, new RequestOptions({
  //     method: RequestMethod.Patch,
  //     body: body
  //   }), success, error);
  // }
  //
  // public head(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  // }, error: Function = function (successful, msg, err) {
  // }): any {
  //   return this.request(url, new RequestOptions({
  //     method: RequestMethod.Head,
  //     search: HttpService.buildURLSearchParams(paramMap).toString()
  //   }), success, error);
  // }
  //
  // public options(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  // }, error: Function = function (successful, msg, err) {
  // }): any {
  //   return this.request(url, new RequestOptions({
  //     method: RequestMethod.Options,
  //     search: HttpService.buildURLSearchParams(paramMap).toString()
  //   }), success, error);
  // }
  //
  // /**
  //  * 将对象转为查询参数
  //  * @param paramMap
  //  * @returns {URLSearchParams}
  //  */
  // private static buildURLSearchParams(paramMap): URLSearchParams {
  //   let params = new URLSearchParams();
  //   if (!paramMap) {
  //     return params;
  //   }
  //   for (let key in paramMap) {
  //     let val = paramMap[key];
  //     if (val instanceof Date) {
  //       val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
  //     }
  //     params.set(key, val);
  //   }
  //   return params;
  // }
  //
  // /**
  //  * 处理请求失败事件
  //  * @param url
  //  * @param options
  //  * @param err
  //  */
  // private requestFailed(url: string, options: RequestOptionsArgs, err) {
  //   let msg = '请求发生异常', status = err.status;
  //   if (status === 0) {
  //     msg = '请求失败，请求响应出错';
  //   } else if (status === 404) {
  //     msg = '请求失败，未找到请求地址';
  //   } else if (status === 500) {
  //     msg = '请求失败，服务器出错，请稍后再试';
  //   } else {
  //     msg = "未知错误，请检查网络";
  //   }
  //
  //   return msg;
  //
  // }
}
