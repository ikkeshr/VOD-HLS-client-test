import { Component, OnInit, Input } from '@angular/core';
import videojs from 'video.js';

declare var require: any;
require('videojs-contrib-quality-levels');
require('videojs-hls-quality-selector');

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  player: videojs.Player;

  @Input("width") width: number;
  @Input("height") height: number;
  @Input("src") src: string;

  constructor() { }

  ngOnInit(): void {
    this.initPlayer();
  }

  initPlayer(): void {
    const playerOptions = {
      autoplay: false,
      controls: true,
      width: this.width,
      height: this.height,
      fluid: true,
      sources: [
        {
          src: (this.src) ? this.src : "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
          type: 'application/x-mpegURL'
        }
      ],
      controlBar: {
        seekToLive: false,
        pictureInPictureToggle: false,
      }
    }


    this.player = videojs('my-video', playerOptions, function onPlayerReady() {
      // console.log('Player ready');
      var myPlayer = this, id = myPlayer.id();
      myPlayer.hlsQualitySelector();
    });
  }

  ngOnChanges(): void {
    if (this.player) {
      this.player.src(this.src);
    }
  }

  ngOnDestroy(): void {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

}
