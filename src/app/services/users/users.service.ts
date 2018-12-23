import { Injectable } from '@angular/core'
import { BaseService } from '../../services'
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private baseService: BaseService) {}

  getUsers(criteria: String) {
    this.baseService.executeGet('search/users', { q: criteria }).subscribe(
      response => {
        //
        debugger
        console.log(response)
      },
      error => {
        //
      }
    )
  }
}
