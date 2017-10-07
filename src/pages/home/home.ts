import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EpisodeServiceProvider } from '../../providers/episode-service/episode-service';
import { AudioProvider } from 'ionic-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  episodes = [];
  allTracks: any[];
  selectedTrack;

  constructor(public navCtrl: NavController, public episodeService: EpisodeServiceProvider, private _audioProvider: AudioProvider) {
    this.episodeService.load()
    .then(data => {
      this.episodes = data;
    });
  }

  ngAfterContentInit() {
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
    this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }
}
