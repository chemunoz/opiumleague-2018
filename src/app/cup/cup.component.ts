import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {
  FOCup = [];

  constructor() {
    this.FOCup = [
      { // SORTEO
        deadline: 'Sep 21, 2019 21:00:00',
        element: 'countdown-draw-FOCup',
        distance: 0
      },
      { // COMIENZO
        deadline: 'Sep 29, 2019 17:00:00',
        element: 'countdown-FOCup',
        distance: 0
      }
    ];

    const Competitions = [this.FOCup[0], this.FOCup[1]];

    // Update the count down every 1 second
    let x = setInterval(() => {
      // Get todays date and time
      const now = new Date().getTime();

      Competitions.length === 0 ? clearInterval(x) : null;
      Competitions.forEach((competition, index)=>{
        // Find the distance between now an the count down date
        let countDownDate = new Date(competition.deadline).getTime();
        let distance = countDownDate - now;
        let text = '';
        
        competition.distance = distance;
        if (distance < 0) {
          // If the count down is over, write some text
          text = 'COMENZADA!!';
          Competitions.splice(index, 1);
        } else {
          // Time calculations for days, hours, minutes and seconds
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
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
