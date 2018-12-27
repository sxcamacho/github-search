import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Config } from 'src/app/interfaces/config'

const configUrl = 'assets/config.json'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _config: Config
  constructor(private http: HttpClient) {}

  get config(): Config {
    return this._config
  }

  loadConfig() {
    this.http.get(configUrl).subscribe((data: Config) => {
      this._config = { ...data }
    })
  }
}
