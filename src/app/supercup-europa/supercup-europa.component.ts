import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supercup-europa',
  templateUrl: './supercup-europa.component.html',
  styleUrls: ['./supercup-europa.component.css']
})
export class SupercupEuropaComponent implements OnInit {

  constructor() {
    const SupercupEuropa = {
      deadline: new Date('Aug 16, 2019 21:00:00').getTime(),
      date: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      distance: 0,
      text: ''
    };

    const Competitions = [SupercupEuropa];

    // Update the count down every 1 second
    setInterval(function() {
      // console.log('seconddd');
      // Get todays date and time
      const now = new Date().getTime();

      Competitions.forEach((competition)=>{
        // Find the distance between now an the count down date
        competition.distance = competition.deadline - now;
        // Time calculations for days, hours, minutes and seconds
        competition.date.days = Math.floor(competition.distance / (1000 * 60 * 60 * 24));
        competition.date.hours = Math.floor((competition.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        competition.date.minutes = Math.floor((competition.distance % (1000 * 60 * 60)) / (1000 * 60));
        competition.date.seconds = Math.floor((competition.distance % (1000 * 60)) / 1000);
        // If the count down is over, write some text
        if (competition.distance < 0) {
          clearInterval();
          competition.text = 'COMENZADA!!';
        } else {
          competition.text = `${competition.date.days}d ${competition.date.hours}h 
                              ${competition.date.minutes}m ${competition.date.seconds}s`;
        }
      });

      // Output the result validating that the element exists
      document.getElementById('countdown-SupercupEuropa') !== null ? document.getElementById('countdown-SupercupEuropa').innerHTML = SupercupEuropa.text : null;
    }, 1000);
  }

  ngOnInit() {
  }

}
