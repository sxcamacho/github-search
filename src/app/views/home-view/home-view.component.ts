import { Component, OnInit, HostListener } from '@angular/core'
import { UsersService } from 'src/app/services'
import { User } from 'src/app/models/user'
import { TouchSequence } from 'selenium-webdriver'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  private users: any
  private page: number
  private pageSize: number
  private criteria: string
  private initialCriteria: string
  private userTotal: number
  private realUserTotal: number
  private loading: boolean
  private isMobile: boolean

  constructor(private userService: UsersService) {
    this.page = 1
    this.pageSize = 10
    this.initialCriteria = 'sebastian'
    this.criteria = this.initialCriteria
    this.userTotal = 0
    this.realUserTotal = 0
    this.loading = false
  }

  ngOnInit() {
    if (this.initialCriteria) {
      this.loadUsers()
    }
  }

  onChangePage() {
    this.loadUsers()
  }

  onChangeCriteria(criteria) {
    this.page = 1
    this.criteria = criteria
    if (criteria) {
      this.loadUsers()
    } else {
      this.userTotal = 0
      this.realUserTotal = 0
    }
  }

  loadUsers() {
    this.loading = true
    this.userService
      .getUsers({
        criteria: this.criteria,
        page: this.page,
        pageSize: this.pageSize,
      })
      .subscribe(
        response => {
          this.users = response.users
          this.userTotal = response.total < 1000 ? response.total : 1000
          this.realUserTotal = response.total
        },
        error => {
          console.error(error)
        },
        () => {
          this.loading = false
        }
      )
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768
  }
}
