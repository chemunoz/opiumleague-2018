import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public chart_jornada_winner: Chart;
  public chart_leader: Chart;
  public chart_champions: Chart;
  public chart_uefa: Chart;
  public chart_intertoto: Chart;
  public chart_descenso: Chart;

  players_chart: any[] = [];
  jornadas: any;

  constructor(private _servicio: DataService) {
    this.jornadas = _servicio.getjornadas();
    console.log ('Jornadasss', this.jornadas);

    this.players_chart = _servicio.readPlayers();
    console.log('PLAYERS', this.players_chart);

    // Comparison function
    const cmp = (x: any, y: any) => {
      return (x > y) ? 1 : (x < y) ? -1 : 0;
    };

    // Sort
    this.players_chart.sort(function(a, b) {
      // note the minus before -cmp, for descending order
      return cmp(
        [cmp(a.name, b.name)],
        [cmp(b.name, a.name)]
      );
    });

    // Axis X legend
    const categorias = [];
    this.players_chart[0].points.filter((position) => position !== null).forEach((player, index) => {
      categorias.push(`J${index + 1}`);
    });
    console.log('categorias', categorias);

    const position_evolution = [];
    const score_evolution = [];

    const position_series = {
      leader: [],
      champions: [],
      uefa: [],
      intertoto: [],
      descenso: [],
      jornada_winner: []
    };

    const filter_players = this.players_chart.filter(player => player.positions_general.length > 0);
    filter_players.forEach((player, index) => {
      // Jornadas LIDER
      if (player.positions_general.filter((position: any) => position === 1).length > 0) {
        position_series.leader.push({
            name: `${player.team} (${player.positions_general.filter((position) => position === 1).length})`,
            y: player.positions_general.filter((position: any) => position === 1).length
        });
      }
      // Jornadas CHAMPIONS
      if (player.positions_general.filter((position: any) => position <= 3).length > 0) {
        position_series.champions.push({
            name: `${player.team} (${player.positions_general.filter((position: any) => position <= 3).length})`,
            y: player.positions_general.filter((position: any) => position <= 3).length
        });
      }
      // Jornadas UEFA
      if (player.positions_general.filter((position: any) => (position > 3 && position < 6)).length > 0) {
        position_series.uefa.push({
            name: `${player.team} (${player.positions_general.filter((position: any) => (position > 3 && position < 6)).length})`,
            y: player.positions_general.filter((position: any) => (position > 3 && position < 6)).length
        });
      }
      // Jornadas INTERTOTO
      if (player.positions_general.filter((position: any) => position > 5 && position < 11).length > 0) {
        position_series.intertoto.push({
            name: `${player.team} (${player.positions_general.filter((position: any) => position > 5 && position < 11).length})`,
            y: player.positions_general.filter((position: any) => position > 5 && position < 11).length
        });
      }
      // Jornadas DESCENSO
      if (player.positions_general.filter((position: any) => (position >= filter_players.length - 3 && position <= filter_players.length)).length > 0) {
        position_series.descenso.push({
            name: `${player.team} (${player.positions_general.filter((position: any) => (position <= filter_players.length && position >= filter_players.length - 3)).length})`,
            y: player.positions_general.filter((position: any) => (position <= filter_players.length && position >= filter_players.length - 3)).length
        });
      }

      // CHARTS of Evolutions
      position_evolution.push({
          name: player.team,
          data: player.positions_general
      });
      score_evolution.push({
          name: player.team,
          data: player.positions_jornada
      });


      // Jornadas GANADOR JORNADA
      if (player.positions_jornada.filter((position: any) => position === 1).length > 0) {
        position_series.jornada_winner.push({
            name: `${player.team}`,
            data: [player.positions_jornada.filter((position: any) => position === 1).length],
            showInLegend: false,
            groupPadding: 0.1
        });
      }
    });


    // Sort series
    for (const serie in position_series) {
      if (serie === 'jornada_winner') {
        position_series[serie].sort(function(a, b) {
          // note the minus before -cmp, for descending order
          return cmp(
            [-cmp(a.data, b.data)],
            [-cmp(b.data, a.data)]
          );
        });
      } else {
        position_series[serie].sort(function(a: any, b: any) {
          // note the minus before -cmp, for descending order
          return cmp(
            [-cmp(a.y, b.y)],
            [-cmp(b.y, a.y)]
          );
        });
      }
    }
    console.log('Position Series: ', position_series);
    console.log('Position Evolution: ', position_evolution);






    // // GRAFICO 'GANADORES DE JORNADA'
    this.chart_jornada_winner = new Chart({
      chart: {
        type: 'column'
        // marginLeft: 5,
        // marginRight: 5
      },
      title: {
        text: null // 'GANADORES DE JORNADA'
      },
      subtitle: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['JORNADAS'], // categorias,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: null // 'Jornadas'
        },
        minRange: 1,
        allowDecimals: false
      },
      tooltip: {
        headerFormat: 'EQUIPO<br>',
        // '<span style="font-size:10px">{point.key}</span><table>',
        // pointFormat: `<tr>
        //                 <td style="color:{series.color};padding:0">{series.name}: </td>
        //                 <td style="padding:0"><b>{point.y} jornadas</b></td>
        //               </tr>`,
        // footerFormat: '</table>',
        // shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: position_series.jornada_winner
    });




    // // GRAFICO 'JORNADAS COMO LÍDER'
    this.chart_leader = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: null // 'JORNADAS COMO LÍDER'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>', // : {point.percentage:.1f} %',
            style: {
              // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Porcentaje',
        // colorByPoint: true,
        data: position_series.leader
      }]
    });



    // // GRAFICO 'JORNADAS EN CHAMPIONS'
    this.chart_champions = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: null // 'JORNADAS EN CHAMPIONS'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>', // : {point.percentage:.1f} %',
            style: {
              // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Porcentaje',
        // colorByPoint: true,
        data: position_series.champions
      }]
    });



    // // GRAFICO 'JORNADAS EN UEFA'
    this.chart_uefa = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: null // 'JORNADAS EN EUROPA LEAGUE'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>', // : {point.percentage:.1f} %',
            style: {
              // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Porcentaje',
        // colorByPoint: true,
        data: position_series.uefa
      }]
    });


    // // GRAFICO 'JORNADAS EN INTERTOTO'
    this.chart_intertoto = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: null // 'JORNADAS EN INTERTOTO'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>', // : {point.percentage:.1f} %',
            style: {
              // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Porcentaje',
        // colorByPoint: true,
        data: position_series.intertoto
      }]
    });



    // // GRAFICO 'JORNADAS EN DESCENSO'
    this.chart_descenso = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: null // 'JORNADAS EN DESCENSO'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>', // : {point.percentage:.1f} %',
            style: {
              // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Porcentaje',
        // colorByPoint: true,
        data: position_series.descenso
      }]
    });




    // // GRAFICO 'EVOLUCION POSICION GENERAL'
    // Highcharts.chart('chart_position_evolution', {
    //   chart: {
    //     zoomType: 'xy'
    //   },
    //   title: {
    //     text: null // 'EVOLUCIÓN DE POSICIONES EN LA GENERAL'
    //   },
    //   subtitle: {
    //     text: '(posiciones en la general en cada jornada)'
    //   },
    //   credits: {
    //     enabled: false
    //   },
    //   plotOptions: {
    //     series: {
    //       dataLabels: {
    //         format: '{y}',
    //         enabled: true,
    //         color: '#294469',
    //         shadow: false,
    //         // align: 'right',
    //         // x: -25,
    //         // style: {"fontSize": "10px", "textShadow": "0px" }
    //       },
    //       pointPadding: 0.1,
    //       groupPadding: 0
    //    }
    //   },
    //   xAxis: [{
    //     categories: categorias,
    //     min: position_evolution[0].data.length - 5,
    //     max: position_evolution[0].data.length - 1,
    //     scrollbar: {
    //       enabled: true
    //     }
    //   }],
    //   yAxis: {
    //     title: {
    //         text: null, // 'Media',
    //         style: {
    //             color: Highcharts.getOptions().colors[1]
    //         }
    //     },
    //     labels: {
    //         format: '{value}  pts',
    //         style: {
    //             color: Highcharts.getOptions().colors[1]
    //         }
    //     },
    //     reversed: true
    //   },
    //   series: position_evolution
    // });


    // // GRAFICO 'EVOLUCION POSICIONES JORNADA'
    // Highcharts.chart('chart_score_evolution', {
    //   chart: {
    //     zoomType: 'xy'
    //   },
    //   title: {
    //     text: null // 'EVOLUCIÓN DE POSICIONES EN LA JORNADA'
    //   },
    //   subtitle: {
    //     text: '(posiciones en cada jornada)'
    //   },
    //   credits: {
    //     enabled: false
    //   },
    //   plotOptions: {
    //     series: {
    //       dataLabels: {
    //         format: '{y}',
    //         enabled: true,
    //         color: '#294469',
    //         shadow: false,
    //         // align: 'right',
    //         // x: -25,
    //         // style: {"fontSize": "10px", "textShadow": "0px" }
    //       },
    //       pointPadding: 0.1,
    //       groupPadding: 0
    //    }
    //   },
    //   xAxis: {
    //     categories: categorias,
    //     min: score_evolution[0].data.length - 5,
    //     max: score_evolution[0].data.length - 1,
    //     scrollbar: {
    //       enabled: true
    //     }
    //   },
    //   yAxis: {
    //     title: {
    //         text: null, // 'Media',
    //         style: {
    //             color: Highcharts.getOptions().colors[1]
    //         }
    //     },
    //     labels: {
    //         format: '{value}  pts',
    //         style: {
    //             color: Highcharts.getOptions().colors[1]
    //         }
    //     },
    //     reversed: true
    //   },
    //   series: score_evolution
    // });
  }

  ngOnInit() {
  }

}
