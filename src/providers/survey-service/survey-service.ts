import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EpisodeServiceProvider } from '../../providers/episode-service/episode-service';

/*
  Generated class for the SurveyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SurveyServiceProvider {
  surveys;

  constructor(public episodeService: EpisodeServiceProvider) {

  }

  load() {
    if (this.surveys) {
      return Promise.resolve(this.surveys);
    }

    return new Promise(resolve => {
      this.surveys = {};
      this.episodeService.load()
      .then(data => {
        data.forEach(episode => {
          this.surveys[episode.nid] = {
            shown: false
          };
        });
        return resolve(this.surveys);
      });
    });
  }
}
