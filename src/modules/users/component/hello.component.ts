import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { setName } from '../action/setName';
import { IStore } from '~redux/redux';
import { State } from '../../../bootstrap/appStore';
import { Router } from '@angular/router-deprecated';

@Component({
  template: require('./hello.component.html'),
})
export class HelloComponent {
  constructor(@Inject('AppStore') private appStore: IStore<State>,
              private router: Router) {
  }

  saveName(form) {
    const name = form.querySelector('[name="name"]').value;

    this.appStore.dispatch(setName(name));
    this.router.navigate(['Home']);

    return false;
  }
}
