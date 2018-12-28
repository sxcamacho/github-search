import { Component, OnInit, HostListener } from '@angular/core'
import { UserService } from 'src/app/services'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  users: any
  page: number
  pageSize: number
  criteria: string
  initialCriteria: string
  userTotal: number
  realUserTotal: number
  loading: boolean
  isMobile: boolean

  constructor(private userService: UserService) {
    this.page = 1
    this.pageSize = 10
    this.initialCriteria = ''
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
