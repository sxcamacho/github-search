import { Injectable } from '@angular/core'
import { BaseService } from '../../services/base/base.service'
import { User, UsersResponse } from 'src/app/models'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private baseService: BaseService) {}

  getUsers(params: any): Observable<UsersResponse> {
    return Observable.create(observer => {
      const endpoint = 'search/users'
      const requestParams = {
        q: params.criteria,
        page: params.page,
        per_page: params.pageSize,
      }
      this.baseService.executeGet(endpoint, requestParams).subscribe(
        (response: any) => {
          observer.next({
            users: response.items.map(
              data =>
                new User({
                  ...data,
                  apiPageUrl: this.baseService.getUrl(endpoint, requestParams),
                })
            ),
            total: response.total_count,
          })
        },
        error => {
          observer.error(error)
        },
        () => {
          observer.complete()
        }
      )
    })
  }

  getUser(params: any): Observable<User> {
    return Observable.create(observer => {
      this.baseService.executeGet(`users/${params.username}`).subscribe(
        (response: any) => {
          observer.next(new User(response))
        },
        error => {
          observer.error(error)
        },
        () => {
          observer.complete()
        }
      )
    })
  }
}
