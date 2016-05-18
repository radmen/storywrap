import { Component, Inject } from '@angular/core';
import { IStore } from '~redux/redux';
import { State } from '../../../../bootstrap/appStore';
import { addStoryChunk } from '../../action/addStoryChunk';

@Component({
  selector: 'add-story-chunk',
  template: require('./add-story-chunk.component.html'),
})
export class AddStoryChunkComponent {
  formData = {
    text: '',
  };

  constructor(@Inject('AppStore') private appStore: IStore<State>) {
  }

  addChunk() {
    const {user} = this.appStore.getState();

    this.appStore.dispatch(addStoryChunk(this.formData.text, user));
    this.formData.text = '';
  }
}
