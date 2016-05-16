import { Component, Inject, OnInit } from '@angular/core';
import { IStore } from 'redux';
import { State } from '../../../bootstrap/appStore';
import { Router } from '@angular/router-deprecated';

@Component({
  template: '<h1>Hai {{ name }}</h1>'
})
export class HomeComponent implements OnInit {
  name: string;

  constructor(@Inject('AppStore') private appStore: IStore<State>,
              private router: Router) {
    this.updateState();
  }

  private updateState() {
    const state = this.appStore.getState();

    if (state.user) {
      this.name = state.user.name;
    }
  }

  ngOnInit() {
    const user = this.appStore.getState().user;

    if (!user) {
      this.router.navigate(['Hello']);
    }
  }
}
