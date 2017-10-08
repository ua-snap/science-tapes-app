import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EpisodeServiceProvider } from '../../providers/episode-service/episode-service';
import { AudioProvider } from 'ionic-audio';
import { SurveyPage } from '../survey/survey'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  episodes = [];
  allTracks: any[];
  selectedTrack;
  survey = false;

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
    if (this.survey === false) {
      this.navCtrl.push(SurveyPage);
      this.survey = true
    }
    console.log('Track finished', track)
  }
}
