import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../champions.service';

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
  SupercupOpium = [];

  constructor(private _servicioChampions: ChampionsService) {
    this.FOCup = [
      { // SORTEO
        deadline: 'Oct 16, 2020 22:00:00',
        element: 'countdown-draw-FOCup',
        distance: 0
      },
      { // COMIENZO
        deadline: 'Oct 23, 2020 21:00:00',
        element: 'countdown-FOCup',
        distance: 0
      }
    ];

    this.Champions = _servicioChampions.getCountdowns();

    this.EuropaLeague = [
      {
        deadline: 'Mar 19, 2021 21:00:00',
        element: 'countdown-EuropaLeague',
        distance: 0
      }
    ];

    this.SupercupEuropa = [
      {
        deadline: 'Sep 19, 2020 16:00:00',
        element: 'countdown-SupercupEuropa',
        distance: 0
      }
    ];

    this.SupercupSpain = [
      {
        deadline: 'Sep 29, 2020 21:00:00',
        element: 'countdown-SupercupSpain',
        distance: 0
      }
    ];

    this.SupercupOpium = [
      {
        deadline: 'Jan 19, 2021 21:00:00',
        element: 'countdown-SupercupOpium',
        distance: 0
      }
    ];

    const Competitions = [
      this.FOCup[0],
      this.FOCup[1],
      this.Champions[0],
      this.Champions[1],
      this.EuropaLeague[0],
      this.SupercupEuropa[0],
      this.SupercupSpain[0],
      this.SupercupOpium[0]
    ];

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
