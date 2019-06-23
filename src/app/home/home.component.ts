import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homePlayers:any[] = [];

  constructor(private _servicio:DataService) { }

  ngOnInit() {
    // Comparison function
    const cmp = (x: any, y: any) => {
      return (x > y) ? 1 : (x < y) ? -1 : 0;
    };

    this.homePlayers = this._servicio.readPlayers();
      
    // Sort
    this.homePlayers.sort(function(a, b) {
      // note the minus before -cmp, for descending order
      return cmp(
        [cmp(a.team, b.team)],
        [cmp(b.team, a.team)]
      );
    });
    
    console.log('HOME', this.homePlayers);
    
    // Call to countdown timer
    this.countdown();
  }

  countdown = () => {
    // Set the date we're counting down to
    let countDownDate = new Date("Aug 17, 2019 20:15:00").getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {
      // Get todays date and time
      let now = new Date().getTime();
    
      // Find the distance between now an the count down date
      let distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Output the result in an element with id="demo"
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is over, write some text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
}
