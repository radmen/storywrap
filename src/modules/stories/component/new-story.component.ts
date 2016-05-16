import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { IStore } from '~redux/redux';
import { State } from '../../../bootstrap/appStore';
import { User } from '../../users/user';

@Component({
  template: '<h1>Hai {{ user && user.name }}</h1>',
})
export class NewStoryComponent implements OnInit {
  private user: User;

  constructor(@Inject('AppStore') private appStore: IStore<State>,
              private router: Router) {
  }

  ngOnInit() {
    const user = this.appStore.getState().user;

    if (!user) {
      this.router.navigate(['Hello', {
        backUrl: this.router.generate(['NewStory']).toRootUrl(),
      }]);
    }

    this.user = user;
  }
}
