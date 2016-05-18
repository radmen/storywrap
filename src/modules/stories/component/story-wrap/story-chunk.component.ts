import { Component, Input } from '@angular/core';
import { StoryChunk } from '../../story-chunk';

@Component({
  selector: 'story-chunk',
  template: '{{ chunk.text }}',
})
export class StoryChunkComponent {
  @Input('chunk')
  chunk: StoryChunk;
}
