import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeViewComponent } from './views/home-view/home-view.component'
import { SearchBoxComponent } from './components/search-box/search-box.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { UserListComponent } from './components/user-list/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    SearchBoxComponent,
    PaginationComponent,
    UserListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
