import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  FOCup = [];
  Champions = [];
  EuropaLeague = [];
  SupercupEuropa = [];
  SupercupSpain = [];

  constructor() {
    this.FOCup = [
      { // SORTEO
        deadline: 'Sep 24, 2019 22:00:00',
        element: 'countdown-draw-FOCup',
        distance: 0
      },
      { // COMIENZO
        deadline: 'Sep 27, 2019 21:00:00',
        element: 'countdown-FOCup',
        distance: 0
      }
    ];

    this.Champions = [
      { // SORTEO
        deadline: 'Dec 28, 2019 22:00:00',
        element: 'countdown-draw-Champions',
        distance: 0
      },
      { // COMIENZO
        deadline: 'Jan 05, 2020 17:00:00',
        element: 'countdown-Champions',
        distance: 0
      }
    ];

    this.EuropaLeague = [
      {
        deadline: 'Mar 08, 2020 17:00:00',
        element: 'countdown-EuropaLeague',
        distance: 0
      }
    ];

    this.SupercupEuropa = [
      {
        deadline: 'Aug 16, 2019 21:00:00',
        element: 'countdown-SupercupEuropa',
        distance: 0
      }
    ];

    this.SupercupSpain = [
      {
        deadline: 'Aug 30, 2019 21:00:00',
        element: 'countdown-SupercupSpain',
        distance: 0
      }
    ];

    const Competitions = [this.FOCup[0], this.FOCup[1], this.Champions[0], this.Champions[1], this.EuropaLeague[0], this.SupercupEuropa[0], this.SupercupSpain[0]];

    // Update the count down every 1 second
    const x = setInterval(() => {
      // Get todays date and time
      const now = new Date().getTime();

      Competitions.length === 0 ? clearInterval(x) : null;
      Competitions.forEach((competition, index) => {
        // Find the distance between now an the count down date
        const countDownDate = new Date(competition.deadline).getTime();
        const distance = countDownDate - now;
        let text = '';

        competition.distance = distance;
        if (distance < 0) {
          // If the count down is over, write some text
          text = 'COMENZADA!!';
          Competitions.splice(index, 1);
        } else {
          // Time calculations for days, hours, minutes and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          text = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        // Output the result validating that the element exists
        document.getElementById(competition.element) !== null ? document.getElementById(competition.element).innerHTML = text : null;
      });
    }, 1000);
  }

  ngOnInit() {  }
}
