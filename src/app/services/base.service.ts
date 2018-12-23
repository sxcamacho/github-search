import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GITHUB_API_URL } from '../config'

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private httpOptions: any

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
  }

  executeGet(url: string, params: any) {
    let url_request: string = params
      ? `${GITHUB_API_URL}/${url}`
      : `${GITHUB_API_URL}/${url}?${this.serialize(params)}`
    return this.http.get(url_request, this.httpOptions)
  }

  private serialize(objParams: any): String {
    return Object.keys(objParams)
      .map(key => key + '=' + objParams[key])
      .join('&')
  }
}
