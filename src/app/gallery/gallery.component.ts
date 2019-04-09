import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryPlayers:any[] = [];

  constructor(private _servicio:DataService) {
    this.galleryPlayers = _servicio.readPlayers();

    // Comparison function
    const cmp = (x, y) => {
      return (x > y) ? 1 : (x < y) ? -1 : 0;
    };
    
    // Sort
    this.galleryPlayers.sort(function(a, b){
      //note the minus before -cmp, for descending order
      return cmp(
        [cmp(a.name, b.name)],
        [cmp(b.name, a.name)]
      );
    });
  }

  ngOnInit() {
  }

}
