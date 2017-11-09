import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// TODO: Move this URL into a configuration file.
var drupalUrl = 'http://path/to/endpoint';

/*
  Generated class for the EpisodeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EpisodeServiceProvider {
  episodes;

  constructor(public http: Http) {

  }

  load() {
    if (this.episodes) {
      return Promise.resolve(this.episodes);
    }

    return new Promise(resolve => {
      this.http.get(drupalUrl + '/api/episodes')
      .subscribe(data => {
        this.episodes = JSON.parse(data['_body']).map(node => {
          return ({
            nid: node.nid,
            src: drupalUrl + node.audio,
            artist: node.title,
            title: node.description,
            art: drupalUrl + node.thumbnail,
            preload: 'metadata'
          });
        })
        return resolve(this.episodes);
      });
    });
  }

}
