import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { element } from '@angular/core/src/render3/instructions';

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
    const countdowns = {
      payment: {
        date: "Aug 11, 2019 21:00:00",
        element: "countdown-money"
      },
      start: {
        date: "Aug 16, 2019 21:00:00",
        element: "countdown"
      }
    };
    if (new Date(countdowns.payment.date).getTime() > new Date().getTime()){
      this.countdown(countdowns.payment.date, countdowns.payment.element);
    }else{
      this.countdown(countdowns.start.date, countdowns.start.element);
    }
  }

  countdown = (fecha, elemento_id) => {
    // Set the date we're counting down to
    let countDownDate = new Date(fecha).getTime();

    if (countDownDate - new Date().getTime() > 0){
      let periodo = elemento_id === 'countdown-money' ? `<div style="font-size: 0.6em;">PLAZO DE INSCRIPCIÓN: <br> 01 JULIO HASTA EL 11 AGOSTO</div>` : `<div style="font-size: 0.6em;">LA LIGA COMIENZA EN...</div>`;
      document.getElementById('countdowns').innerHTML = `<div>${periodo}<i class="far ${elemento_id === 'countdown' ? 'fa-futbol' : 'fa-money-bill-alt'}"></i> <span id="${elemento_id}" class="cuenta-atras"></span></div>`;
    }
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
      document.getElementById(elemento_id) ? document.getElementById(elemento_id).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s` : null;
    
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        // document.getElementById(elemento_id).innerHTML = "EXPIRED";
        document.getElementById('countdowns').style.display = 'none';
      }
    }, 1000);
  }
}
