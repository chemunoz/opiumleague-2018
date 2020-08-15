import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryPlayers: any[] = [];

  constructor(private dataService: DataService) {
    this.galleryPlayers = dataService.readPlayers();

    // Comparison function
    const cmp = (x, y) => {
      return (x > y) ? 1 : (x < y) ? -1 : 0;
    };

    // Sort
    this.galleryPlayers.sort(function(a, b) {
      // note the minus before -cmp, for descending order
      return cmp(
        [-cmp(a.badges.avg, b.badges.avg)],
        [-cmp(b.badges.avg, a.badges.avg)]
      );
    });
  }

  ngOnInit() {}

}
