import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EpisodeServiceProvider } from '../../providers/episode-service/episode-service';
import { SurveyServiceProvider } from '../../providers/survey-service/survey-service';
import { AudioProvider } from 'ionic-audio';
import { SurveyPage } from '../survey/survey'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  episodes = [];
  surveys = [];
  allTracks: any[];
  selectedTrack;

  constructor(public navCtrl: NavController, public episodeService: EpisodeServiceProvider, public surveyService: SurveyServiceProvider, private _audioProvider: AudioProvider) {
    this.episodeService.load()
    .then(data => {
      this.episodes = data;
    });

    this.surveyService.load()
    .then(data => {
      this.surveys = data;
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
    if (!this.surveys[1].shown) {
      this.surveys[1].shown = true;
      this.navCtrl.push(SurveyPage);
    }
  }
}
