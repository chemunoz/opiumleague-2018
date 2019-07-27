import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

// Charts
// <script src='https://code.highcharts.com/stock/highstock.js'></script>
// <script src='https://code.highcharts.com/highcharts.js'></script>
// <script src='https://code.highcharts.com/modules/exporting.js'></script>
// <script src='https://code.highcharts.com/modules/export-data.js'></script>
// <script src='https://blacklabel.github.io/grouped_categories/grouped-categories.js' charset='utf-8'></script>

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
        height: 300,
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
          {y: 10, color: '#dc4f21'},
          {y: 10, color: '#dc4f21'},
          {y: 8, color: '#a09661'},
          {y: 8, color: '#a09661'},
          {y: 8, color: '#a09661'},
          {y: 8, color: '#a09661'},
          {y: 7, color: '#01fe6e'},
          {y: 7, color: '#01fe6e'},
          {y: 6, color: '#d33497'},
          {y: 6, color: '#d33497'},
          {y: 6, color: '#d33497'},
          {y: 5, color: '#1a8251'},
          {y: 5, color: '#1a8251'},
          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},
          {y: 4, color: '#fdfe5f'},
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
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'},
          {y: 1, color: '#6dcf5c'}
        ]
      }],
      yAxis: {
        title: null,
        max: 10
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
        categories: ['Che', 'David O.', 'Adolfo', 'Fran', 'JC', 'Mario', 'Luis', 'Paloma', 'A.Cadelo', 'Raúl', 'Chente', 'Borja L.',
                     'Danilo', 'Borja R.', 'Carlos Julio', 'Dani', 'David M.', 'Ivan', 'Javi', 'Nandelas', 'Raúl Magni', 'Ru',
                     'Serious', 'Will', 'Chus Contador', 'Cruchi', 'Dani Magni', 'Diego', 'Dioni',  'Juanan', 'Chema', 'Ekaitz', 'Manunu',
                     'Nando', 'Ovidiu', 'Adrialys', 'Cresmar', 'Dani G.', 'David', 'Felipe', 'Ines', 'Javier Rey', 'Jose', 'Miguel',
                     'Pablo', 'Poli', 'Rafa']
          // [
            // {
          //   name: '10 Tmp',
          //   categories: ['Che', 'David O.'],
          //   color: 'red'
          // },
          // {
          //   name: '8 Tmp',
          //   categories: ['Adolfo', 'Fran', 'JC', 'Mario']
          // },
          // {
          //   name: '7 Tmp',
          //   categories: ['Luis', 'Paloma']
          // },
          // {
          //   name: '6 Tmp',
          //   categories: ['A.Cadelo', 'Raúl', 'Chente']
          // },
          // {
          //   name: '5 Tmp',
          //   categories: ['Borja L.', 'Danilo']
          // },
          // {
          //   name: '4 Tmp',
          //   categories: ['Borja R.', 'Carlos Julio', 'Dani', 'David M.', 'Ivan', 'Javi', 'Nandelas',
          //                'Raúl Magni', 'Ru', 'Serious', 'Will']
          // },
          // {
          //   name: '3 Tmp',
          //   categories: ['Chus Contador', 'Cruchi', 'Dani Magni', 'Diego', 'Dioni',  'Juanan']
          // },
          // {
          //   name: '2 Tmp',
          //   categories: ['Chema', 'Ekaitz', 'Manunu', 'Nando', 'Ovidiu']
          // },
          // {
          //   name: '1 Tmp',
          //   categories: ['Adrialys', 'Cresmar', 'Dani G.', 'David', 'Felipe', 'Ines', 'Javier Rey',
          //                'Jose', 'Miguel', 'Pablo', 'Poli', 'Rafa']
          // }
        // ]
      }
    });
  }

}
