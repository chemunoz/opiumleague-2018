import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    (<any>window).twttr = (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0],
        t = (<any>window).twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, 'script', 'twitter-wjs'));
  }

}
