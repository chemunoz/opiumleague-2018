import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit() {

    this.chart = new Chart({
      chart: {
        height: 500,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
      },
      title: {
        useHTML: true,
        x: -10,
        y: 8,
        text: 'RESUMEN GRÁFICO'
      },
      credits: {
        enabled: false
      },
      series: [{
        // showInLegend: false,
        name: 'Temporadas',
        data: [
          {y: 12, color: '#dc4f21'},
          {y: 12, color: '#dc4f21'},

          {y: 10, color: '#a09661'},
          {y: 10, color: '#a09661'},
          {y: 10, color: '#a09661'},
          {y: 10, color: '#a09661'},

          {y: 9, color: '#01fe6e'},
          {y: 9, color: '#01fe6e'},

          {y: 8, color: '#58d7d7'},

          {y: 7, color: '#d33497'},
          {y: 7, color: '#d33497'},

          {y: 6, color: '#1a8251'},
          {y: 6, color: '#1a8251'},
          {y: 6, color: '#1a8251'},
          {y: 6, color: '#1a8251'},
          {y: 6, color: '#1a8251'},
          {y: 6, color: '#1a8251'},
          {y: 6, color: '#1a8251'},

          {y: 5, color: '#fdfe5f'},
          {y: 5, color: '#fdfe5f'},
          {y: 5, color: '#fdfe5f'},
          {y: 5, color: '#fdfe5f'},
          {y: 5, color: '#fdfe5f'},

          {y: 4, color: '#d8944d'},
          {y: 4, color: '#d8944d'},
          {y: 4, color: '#d8944d'},
          {y: 4, color: '#d8944d'},

          {y: 3, color: '#7eb5da'},
          {y: 3, color: '#7eb5da'},
          {y: 3, color: '#7eb5da'},
          {y: 3, color: '#7eb5da'},
          {y: 3, color: '#7eb5da'},
          {y: 3, color: '#7eb5da'},
          {y: 3, color: '#7eb5da'},
          {y: 3, color: '#7eb5da'},
          {y: 3, color: '#7eb5da'},

          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},
          {y: 2, color: '#e03d12'},

          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'},
          {y: 1, color: '#a1b2d5'}
        ]
      }],
      yAxis: {
        title: null,
        allowDecimals: false
        // max: 15
      },
      xAxis: {
        labels: {
          groupedOptions: [
            {
              style: {
                color: 'red' // set red font for labels in 1st-Level
              }
            },
            {
              rotation: -45, // rotate labels for a 2nd-level
              align: 'right'
            }
          ],
          rotation: -45 // 0-level options aren't changed, use them as always
        },
        // scrollbar: {
        //   enabled: true
        // },
        categories: [
          // 12
          'Che',
          'David O.',
          // 10
          'Adolfo',
          'Fran',
          'JC',
          'Mario',
          // 9
          'Luis',
          'Paloma',
          // 8
          'Raúl',
          // 7
          'Danilo',
          'Chente',
          // 6
          'A.Cadelo',
          'Borja R.',
          'Dani',
          'Javi',
          'Nandelas',
          'Serious',
          'Will',
          // 5
          'Borja L.',
          'David M.',
          'Ru',
          'Diego',
          'Juanan',
          // 4
          'Carlos Julio',
          'Ivan',
          'Raúl Magni',
          'Ovidiu',
          // 3
          'Chus Contador',
          'Cruchi',
          'Dani Magni',
          'Dioni',
          'Ekaitz',
          'Nando',
          'Dani G.',
          'Ines',
          'Pablo',
          // 2
          'Chema',
          'Manunu',
          'Felipe',
          'Miguel',
          'Javier Rey',
          'Javi',
          'Javi N.',
          'Lorea',
          'Luis R.',
          'Richard',
          'Ezequiel',
          'Mayfex',
          'Nuria',
          'Dani L.',
          'Javichu',
          'Daniel',
          'Pedro',
          'Hector',
          // 1
          'Adrialys',
          'Cresmar',
          'David',
          'Jose Ramón',
          'Poli',
          'Rafa',
          'Jose C.',
          'Iñaki',
          'Vanessa',
          'Ramón',
          'Murube',
          'Pablo'
        ]
      }
    });
  }

}
