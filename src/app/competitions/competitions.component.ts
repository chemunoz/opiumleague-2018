import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  constructor() {
    // COUNTDOWN
    // Set the date we're counting down to

    const FOCup = [
      // SORTEO
      {
        deadline: new Date('Sep 21, 2019 21:00:00').getTime(),
        date: { days: 0, hours: 0, minutes: 0, seconds: 0 },
        distance: 0,
        text: '',
        container: 'countdown-draw-FOCup'
      },
      // COMIENZO
      {
        deadline: new Date('Sep 29, 2019 17:00:00').getTime(),
        date: { days: 0, hours: 0, minutes: 0, seconds: 0 },
        distance: 0,
        text: '',
        container: 'countdown-FOCup'
      }
    ];

    const Champions = [
      // SORTEO
      {
        deadline: new Date('Dec 21, 2019 21:00:00').getTime(),
        date: { days: 0, hours: 0, minutes: 0, seconds: 0 },
        distance: 0,
        text: '',
        container: 'countdown-draw-Champions'
      },
      // COMIENZO
      {
        deadline: new Date('Jan 05, 2020 17:00:00').getTime(),
        date: { days: 0, hours: 0, minutes: 0, seconds: 0 },
        distance: 0,
        text: '',
        container: 'countdown-Champions'
      }
    ];

    const EuropaLeague = {
      deadline: new Date('Mar 08, 2020 17:00:00').getTime(),
      date: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      distance: 0,
      text: '',
      container: 'countdown-EuropaLeague'
    };

    const SupercupEuropa = {
      deadline: new Date('Aug 16, 2019 21:00:00').getTime(),
      date: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      distance: 0,
      text: '',
      container: 'countdown-SupercupEuropa'
    };

    const SupercupSpain = {
      deadline: new Date('Aug 30, 2019 21:00:00').getTime(),
      date: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      distance: 0,
      text: '',
      container: 'countdown-SupercupSpain'
    };

    const Competitions = [FOCup[0], FOCup[1], Champions[0], Champions[1], EuropaLeague, SupercupEuropa, SupercupSpain];

    // Update the count down every 1 second
    setInterval(() => {
      // Get todays date and time
      const now = new Date().getTime();

      Competitions.forEach((competition)=>{
        // Find the distance between now an the count down date
        competition.distance = competition.deadline - now;
        if (competition.distance < 0) {
          // If the count down is over, write some text
          competition.text = 'COMENZADA!!';
          clearInterval();
        } else {
          // Time calculations for days, hours, minutes and seconds
          competition.date.days = Math.floor(competition.distance / (1000 * 60 * 60 * 24));
          competition.date.hours = Math.floor((competition.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          competition.date.minutes = Math.floor((competition.distance % (1000 * 60 * 60)) / (1000 * 60));
          competition.date.seconds = Math.floor((competition.distance % (1000 * 60)) / 1000);
          competition.text = `${competition.date.days}d ${competition.date.hours}h 
                              ${competition.date.minutes}m ${competition.date.seconds}s`;
          // Output the result validating that the element exists
          document.getElementById(competition.container) !== null ? document.getElementById(competition.container).innerHTML = competition.text : null;
        }
      });
    }, 1000);
  }

  ngOnInit() {  }
}
