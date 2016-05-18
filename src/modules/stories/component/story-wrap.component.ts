import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { IStore } from '~redux/redux';
import { State } from '../../../bootstrap/appStore';
import { Story } from '../story';
import { StoryChunkComponent } from './story-wrap/story-chunk.component';

@Component({
  template: require('./story-wrap.component.html'),
  directives: [
    StoryChunkComponent,
    NgFor,
  ]
})
export class StoryWrapComponent implements OnInit, OnDestroy {
  unsubscribe: Function;

  story: Story;

  constructor(@Inject('AppStore') private appStore: IStore<State>) {
  }

  ngOnInit(): any {
    this.unsubscribe = this.appStore.subscribe(this.updateState.bind(this));
    this.updateState();
  }

  ngOnDestroy(): any {
    this.unsubscribe();
  }

  private updateState() {
    this.story = this.appStore.getState().story;
  }
}
