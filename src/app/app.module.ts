import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeViewComponent } from './views'
import {
  SearchBoxComponent,
  UserListComponent,
  UserListItemComponent,
} from './components'
import { ConfigService } from './services'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { NumberPipe } from './pipes'

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    SearchBoxComponent,
    UserListComponent,
    UserListItemComponent,
    NumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    FormsModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => () => config.loadConfig(),
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
