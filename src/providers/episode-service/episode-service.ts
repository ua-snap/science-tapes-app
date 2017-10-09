import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EpisodeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EpisodeServiceProvider {
  data;

  constructor(public http: Http) {

  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      var episodes = [];
      this.http.get('http://path/to/endpoint')
      .subscribe(data => {
        JSON.parse(data['_body']).forEach((node) => {
          episodes.push({
            nid: node.nid,
            src: node.audio,
            artist: node.title,
            title: node.description,
            art: node.thumbnail.src,
            preload: 'metadata'
          });
        })
        this.data = episodes;
        resolve(episodes);
      });
    });
  }

}
