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
          {y: 11, color: '#dc4f21'},
          {y: 11, color: '#dc4f21'},

          {y: 9, color: '#a09661'},
          {y: 9, color: '#a09661'},
          {y: 9, color: '#a09661'},
          {y: 9, color: '#a09661'},

          {y: 8, color: '#01fe6e'},
          {y: 8, color: '#01fe6e'},

          {y: 7, color: '#58d7d7'},

          {y: 6, color: '#d33497'},
          {y: 6, color: '#d33497'},
          {y: 6, color: '#d33497'},

          {y: 5, color: '#1a8251'},
          {y: 5, color: '#1a8251'},
          {y: 5, color: '#1a8251'},
          {y: 5, color: '#1a8251'},
          {y: 5, color: '#1a8251'},
          {y: 5, color: '#1a8251'},
          {y: 5, color: '#1a8251'},
          {y: 5, color: '#1a8251'},

          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},

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
        title: null
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
          // 11
          'Che',
          'David O.',
          // 9
          'Adolfo',
          'Fran',
          'JC',
          'Mario',
          // 8
          'Luis',
          'Paloma',
          // 7
          'Raúl',
          // 6
          'A.Cadelo',
          'Danilo',
          'Chente',
          // 5
          'Borja L.',
          'Borja R.',
          'Dani',
          'David M.',
          'Javi',
          'Nandelas',
          'Serious',
          'Will',
          // 4
          'Carlos Julio',
          'Ivan',
          'Raúl Magni',
          'Ru',
          'Diego',
          'Juanan',
          // 3
          'Chus Contador',
          'Cruchi',
          'Dani Magni',
          'Dioni',
          'Ekaitz',
          'Ovidiu',
          // 2
          'Chema',
          'Manunu',
          'Nando',
          'Dani G.',
          'Felipe',
          'Ines',
          'Pablo',
          'Miguel',
          // 1
          'Adrialys',
          'Cresmar',
          'David',
          'Javier Rey',
          'Jose',
          'Poli',
          'Rafa',
          'Javi',
          'Javi N.',
          'Lorea',
          'Luis R.',
          'Ezequiel',
          'Mayfex',
          'Nuria',
          'Jose C.',
          'Dani L.',
          'Javichu',
          'Daniel',
          'Pedro'
        ]
      }
    });
  }

}
