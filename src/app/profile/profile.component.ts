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
      this.player = _servicio.getPlayer(params['id']);
    });

  }


  ngOnInit() {
    console.log('SELECCIONADO', this.player);
    const mijugador = this.player;
    mijugador.positions_general_differences = mijugador.positions_general.map((value: any, index: number) => {
      return (index === 0) ? 0 : mijugador.positions_general[index - 1] - value;
    });
    mijugador.positions_general_differences_max = mijugador.positions_general_differences.length === 0 ? 0 : Math.max.apply(null, mijugador.positions_general_differences.filter(value => !isNaN(value)));
    mijugador.positions_general_differences_min = mijugador.positions_general_differences.length === 0 ? 0 : Math.abs(Math.min.apply(null, mijugador.positions_general_differences.filter(value => !isNaN(value))));

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

    // Trophies
    let total_trophies = 0;
    const trophies_profile = [];
    Object.keys(mijugador.trophies).filter((value) => mijugador.trophies[value].length > 0)
    .forEach((trophy, index) => {
      total_trophies += mijugador.trophies[trophy].length;
      mijugador.trophies[trophy].forEach(season => {
        trophies_profile.push({ kind: trophy, title: trophy.replace('_', ' ') });
      });
    });
    mijugador.trophies_profile = trophies_profile;
    mijugador.trophies.total = total_trophies;

    // Awards
    let total_awards = 0;
    const awards_profile = [];
    Object.keys(mijugador.awards).filter((value) => mijugador.awards[value].length > 0)
    .forEach((award, index) => {
      total_awards += mijugador.awards[award].length;
      mijugador.awards[award].forEach(season => {
        if (award === 'round_top') {
          awards_profile.push({ kind: 'fas fa-award', title: 'Jornada Top' });
        } else if (award === 'rounds_regularity') {
          awards_profile.push({ kind: 'fab fa-think-peaks', title: 'Premio Regularidad' });
        }
      });
    });
    mijugador.awards_profile = awards_profile;
    mijugador.awards.total = total_awards;

    // Best and Worst Positions in Season
    mijugador.positions_general_max = mijugador.positions_general.length === 0 ? 0 : Math.max.apply(null, mijugador.positions_general.filter(value => !isNaN(value)));
    mijugador.positions_general_min = mijugador.positions_general.length === 0 ? 0 : Math.abs(Math.min.apply(null, mijugador.positions_general.filter(value => !isNaN(value))));




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
          min: ejes.XJornada.length - 10,
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
