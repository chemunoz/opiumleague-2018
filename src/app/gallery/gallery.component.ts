import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  players:any[] = [];

  constructor(private _servicio:DataService) {
    this.players = _servicio.readPlayers();
  }

  ngOnInit() {
  }

}
