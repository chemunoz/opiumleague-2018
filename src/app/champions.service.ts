import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var require: any;
const championsJSON = require('../assets/data/champions.json');

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  championsInfo: any[] = [];

  constructor (private http: HttpClient) {
    console.log('Iniciando Service de Champions');
    this.championsInfo = championsJSON;
  }

  getGroups() {
    return this.championsInfo['groups'];
  }

  getRounds() {
    return this.championsInfo['rounds'];
  }

  getCountdowns() {
    return this.championsInfo['countdowns'];
  }
}
