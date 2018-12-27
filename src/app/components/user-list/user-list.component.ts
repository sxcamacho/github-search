import { Component, Input } from '@angular/core'
import { User } from 'src/app/models'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() loading: boolean
  @Input() users: Array<User>

  private selectedUser: User

  constructor() {}

  onChange(user: User) {
    this.selectedUser = user
    window.open(this.selectedUser.apiPageUrl, '_blank')
  }
}
