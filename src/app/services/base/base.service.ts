import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ConfigService } from '../config/config.service'
import { Config } from 'src/app/interfaces/config'
import { GITHUB_API_URL, GITHUB_API_TOKEN } from '../../config'
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private httpOptions: any

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
  }

  executeGet(url: string, params: any = null) {
    let url_request: string = `${GITHUB_API_URL}/${url}?access_token=${GITHUB_API_TOKEN}`

    if (params) {
      url_request += `&${this.serialize(params)}`
    }

    return this.http.get(url_request, this.httpOptions)
  }

  getUrl(url: string, params: any = null) {
    let url_request: string = `${GITHUB_API_URL}/${url}?access_token=${GITHUB_API_TOKEN}`

    if (params) {
      url_request += `&${this.serialize(params)}`
    }

    return url_request
  }

  private serialize(objParams: any): String {
    return Object.keys(objParams)
      .map(key => key + '=' + objParams[key])
      .join('&')
  }
}
