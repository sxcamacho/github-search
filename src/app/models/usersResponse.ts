import { User } from './user'

export class UsersResponse {
  users: Array<User>
  total: number

  constructor(params: any) {
    this.users = params.users
    this.total = params.total
  }
}
