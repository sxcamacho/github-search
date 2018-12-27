import { Component, OnInit, Input } from '@angular/core'
import { User } from 'src/app/models'
import { UsersService } from 'src/app/services'

@Component({
  selector: 'user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input() user: User

  private internalUser: User

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.loadUser(this.user)
  }

  loadUser(user: User) {
    this.userService
      .getUser({
        username: user.username,
      })
      .subscribe(
        data => {
          this.internalUser = data
        },
        error => {
          console.error(error)
        }
      )
  }

  fullname(user: User) {
    return user && user.name ? ` - ${user.name}` : ''
  }
}
