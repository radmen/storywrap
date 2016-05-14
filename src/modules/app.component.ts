import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import '../style/app.scss';
import { HelloComponent } from './users/component/hello.component';
import { HomeComponent } from './home/component/home.component';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  directives: [...ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent},
  {path: '/hello', name: 'Hello', component: HelloComponent},
])
export class AppComponent {
}
