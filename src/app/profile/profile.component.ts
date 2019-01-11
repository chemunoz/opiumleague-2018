import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  player: any;
  public points_chart: Chart;
  public positions_chart: Chart;

  constructor(private URI: ActivatedRoute, private _servicio: DataService) {
    this.URI.params.subscribe(params => {
      // console.log(params['id']);
      this.player = _servicio.getPlayer(params['id']);
    });

  }


  ngOnInit() {
    console.log('SELECCIONADO', this.player);
    const mijugador = this.player;
    mijugador.positions_general_differences = mijugador.positions_general.map(function(value: any, index) {
      return (index === 0) ? 0 : mijugador.positions_general[index - 1] - value;
    });
    mijugador.positions_general_differences_max = Math.max.apply(null, mijugador.positions_general_differences.filter((value)=>{return !isNaN(value);}));
    mijugador.positions_general_differences_min = Math.abs(Math.min.apply(null, mijugador.positions_general_differences.filter((value)=>{return !isNaN(value);})));

    const ejes = {
      XJornada: [],
      YJornada: [],
      YMedia: [],
      YPosicionesGeneral: [],
      YPosicionesJornada: []
    };

    for (let i = 0; i < mijugador['points'].filter((value) => value !== null).length; i++) {
      // if ((i+1) >= mijugador['points'].filter((value) => value !== null).length - 5){
        ejes.XJornada.push(`J${i + 1}`);
        ejes.YJornada.push(mijugador['points'][i]);
        ejes.YMedia.push(mijugador.score_average_jornada[i]);
        ejes.YPosicionesGeneral.push(mijugador['positions_general'][i]);
        ejes.YPosicionesJornada.push(mijugador['positions_jornada'][i]);
      // }
    }




    // CHARTS
    this.points_chart = new Chart({
      chart: {
          zoomType: 'xy'
      },
      title: {
          text: 'PUNTOS'
      },
      subtitle: {
          text: 'Jornada vs Media'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            format: '{y}',
            enabled: true,
            color: '#294469',
            shadow: false,
            // align: 'right',
            // x: -25,
            // style: {"fontSize": "10px", "textShadow": "0px" }
          },
        //   pointPadding: 0.1,
        //   groupPadding: 0
       }
      },
      xAxis: [{
          categories: ejes.XJornada,
          crosshair: true,
          min: ejes.XJornada.length - 5,
          max: ejes.XJornada.length - 1,
        //   scrollbar: {
        //     enabled: true
        //   }
      }],
      yAxis: [
        { // Primary yAxis
          title: {
              text: null, // 'Media',
              style: {
                  // color: Highcharts.getOptions().colors[1]
              }
          },
          labels: {
              format: '{value}  pts',
              style: {
                  // color: Highcharts.getOptions().colors[1]
              }
          }
        },
        { // Secondary yAxis
          title: {
              text: null, // 'Jornada',
              style: {
                  // color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              format: '{value} pts',
              style: {
                  // color: Highcharts.getOptions().colors[0]
              }
          },
          opposite: true
        }
      ],
      tooltip: {
          shared: true
      },
      // legend: {
      //     layout: 'vertical',
      //     align: 'left',
      //     x: 120,
      //     verticalAlign: 'top',
      //     y: 100,
      //     floating: true,
      //     backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      // },
      series: [
        {
          name: 'Jornada',
          type: 'column',
          yAxis: 1,
          data: ejes.YJornada,
        //   tooltip: {
        //       valueSuffix: ' pts'
        //   },
          pointWidth: 40
        },
        {
          name: 'Media',
          type: 'spline',
          data: ejes.YMedia,
        //   tooltip: {
        //       valueSuffix: ' pts'
        //   }
      }]
    });

    this.positions_chart = new Chart({
      chart: {
          zoomType: 'xy'
      },
      title: {
          text: 'POSICIONES'
      },
      subtitle: {
          text: 'Jornada vs General'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            format: '{y}',
            enabled: true,
            color: '#294469',
            shadow: false,
            // align: 'right',
            // x: -25,
            // style: {"fontSize": "10px", "textShadow": "0px" }
          },
        //   pointPadding: 0.1,
        //   groupPadding: 0
       }
      },
      xAxis: [{
          categories: ejes.XJornada,
          crosshair: true,
          min: ejes.XJornada.length - 5,
          max: ejes.XJornada.length - 1,
        //   scrollbar: {
        //     enabled: true
        //   }
      }],
      yAxis: [
        { // Primary yAxis
          title: {
              text: null, // 'General',
              style: {
                  // color: Highcharts.getOptions().colors[1]
              }
          },
          labels: {
              format: '{value}',
              style: {
                  // color: Highcharts.getOptions().colors[1]
              }
          },
          reversed: true,
          tickInterval: 1
        },
        { // Secondary yAxis
          title: {
              text: null, // 'Jornada',
              style: {
                  // color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              format: '{value}',
              style: {
                  // color: Highcharts.getOptions().colors[0]
              }
          },
          opposite: true,
          reversed: true,
          tickInterval: 1
        }
      ],
      tooltip: {
          shared: true
      },
      // legend: {
      //     layout: 'vertical',
      //     align: 'left',
      //     x: 120,
      //     verticalAlign: 'top',
      //     y: 100,
      //     floating: true,
      //     backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      // },
      series: [{
          name: 'Jornada',
          type: 'spline',
          yAxis: 1,
          data: ejes.YPosicionesJornada,
        //   tooltip: {
        //       valueSuffix: 'º puesto'
        //   }

      }, {
          name: 'General',
          type: 'spline',
          data: ejes.YPosicionesGeneral,
        //   tooltip: {
        //       valueSuffix: 'º puesto'
        //   }
      }]
    });
  }

}
