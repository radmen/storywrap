import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import '../style/app.scss';
import { HelloComponent } from './users/component/hello.component';
import { NewStoryComponent } from './stories/component/new-story.component';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  directives: [...ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path: '/story/new', name: 'NewStory', component: NewStoryComponent, useAsDefault: true},
  {path: '/hello', name: 'Hello', component: HelloComponent},
])
export class AppComponent {
}
