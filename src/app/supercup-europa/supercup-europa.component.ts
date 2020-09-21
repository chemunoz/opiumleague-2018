import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supercup-europa',
  templateUrl: './supercup-europa.component.html',
  styleUrls: ['./supercup-europa.component.css']
})
export class SupercupEuropaComponent implements OnInit {
  SupercupEuropa = [];

  constructor() {
    this.SupercupEuropa = [
      {
        deadline: 'Sep 19, 2020 16:00:00',
        element: 'countdown-SupercupEuropa',
        distance: 0
      }
    ];

    const Competitions = [this.SupercupEuropa[0]];

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

  ngOnInit() {
  }

}
