import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ConfigService } from 'src/app/services/config/config.service'

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
    let url_request: string = `${
      this.configService.config.githubApiUrl
    }/${url}?access_token=${this.configService.config.githubApiToken}`

    if (params) {
      url_request += `&${this.serialize(params)}`
    }

    return this.http.get(url_request, this.httpOptions)
  }

  getUrl(url: string, params: any = null) {
    let url_request: string = `${
      this.configService.config.githubApiUrl
    }/${url}?access_token=${this.configService.config.githubApiToken}`

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
