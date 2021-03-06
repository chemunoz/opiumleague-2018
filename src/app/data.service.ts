import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

declare var require: any;
const dataJSON = require('../assets/data/data.json');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  playersInfo: any[] = [];

  constructor (private http: HttpClient) {
    console.log('Iniciando Service de Datos');
    this.playersInfo = dataJSON;
  }

  calculatePlayers() {
    // Comparison function
    const cmp = (x, y) => {
      return (x > y) ? 1 : (x < y) ? -1 : 0;
    };

    // Generic average function
    const average = function() {
      const arr = Array.from(arguments);
      const tot = arr.reduce((sum, score) => sum += score);
      return Math.round((tot / arr.length) * 100) / 100;
    };

    const calculate_jornadas = {};
    this.playersInfo.forEach((player) => {
      // Initialize
      player.score_general = 0;
      player.score_jornada = [];
      player.positions_jornada = [];
      player.positions_general = [];
      player.score_average_jornada = [];
      player.score_best = 0;
      player.score_worst = 0;
      player.score_average = 0;
      player.num_jornadas = 0;

      // Create each jornada Object
      player.points.filter((value: any) => value !== null).forEach((score: any, index) => {
        player.score_general += score || 0;
        player.score_jornada.push(player.score_general);

        !calculate_jornadas[`jornada_${index + 1}`] ? calculate_jornadas[`jornada_${index + 1}`] = [] : null;
        calculate_jornadas[`jornada_${index + 1}`].push({
          id: player.id,
          team: player.team,
          shield: player.images.shield,
          name: player.name,
          image: player.images.profile,
          score_jornada: score,
          score_general: player.score_general
        });
      });
    });

    Object.keys(calculate_jornadas).forEach((jornada, index) => {
      // CALCULATE POSITIONS JORNADA
      calculate_jornadas[jornada].sort(function(a: any, b: any) {
        // note the minus before -cmp, for descending order
        return cmp(
          [-cmp(a.score_jornada, b.score_jornada), cmp(a.team, b.team)],
          [-cmp(b.score_jornada, a.score_jornada), cmp(b.team, a.team)]
        );
      });

      const points_average = [];
      calculate_jornadas[jornada].forEach((team: any, index: any) => {
        // Calculate position number (and if there are more than one team sharing each position)
        if (index > 0) {
          if (team.score_jornada === calculate_jornadas[jornada][index - 1].score_jornada) {
            team.position_jornada = calculate_jornadas[jornada][index - 1].position_jornada;
          } else {
            team.position_jornada = index + 1;
          }
        } else {
          team.position_jornada = index + 1;
        }

        const player = $.grep(this.playersInfo, (e) => e.id === team.id );
        player[0].positions_jornada.push(team.position_jornada);

        points_average.push(team.score_jornada);

        player[0].score_best = Math.max.apply(null, player[0].points.filter(value => value !== null));
        player[0].score_worst = Math.min.apply(null, player[0].points.filter(value => value !== null));
        player[0].score_average = average.apply(null, player[0].points.filter(value => value !== null));
        player[0].num_jornadas = player[0].points.filter(value => value !== null).length;
      });
      calculate_jornadas[jornada].score_average = average.apply(null, points_average);



      // CALCULATE POSITIONS GENERAL
      calculate_jornadas[jornada].sort(function(a, b) {
        // note the minus before -cmp, for descending order
        return cmp(
          [-cmp(a.score_general, b.score_general), -cmp(a.score_best - a.score_worst, b.score_best - b.score_worst)],
          [-cmp(b.score_general, a.score_general), -cmp(b.score_best - b.score_worst, a.score_best - a.score_worst)]
        );
      });

      calculate_jornadas[jornada].forEach((team: any, index: any) => {
        // Calculate POSITIONS GENERAL
        if (index > 0) {
          if (team.score_general === calculate_jornadas[jornada][index - 1].score_general) {
            team.position_general = calculate_jornadas[jornada][index - 1].position_general;
          } else {
            team.position_general = index + 1;
          }
        } else {
          team.position_general = index + 1;
        }

        const player = $.grep(this.playersInfo, (e) => e.id === team.id );
        player[0].positions_general.push(team.position_general);
        player[0].score_average_jornada.push(calculate_jornadas[jornada].score_average);
      });
    });

    this.playersInfo.forEach((player) => {
      player.top_jornada = player.positions_jornada.filter((value) => value === 1).length;
      player.top_clasificacion = player.positions_general.filter((value) => value === 1).length;

      player.positions_general_differences = player.positions_general.map((value: any, index: number) => {
        return (index === 0) ? 0 : player.positions_general[index - 1] - value;
      });
      player.positions_general_differences_max = player.positions_general_differences.length === 0 ? 0 : Math.max.apply(null, player.positions_general_differences.filter(value => !isNaN(value)));
      player.positions_general_differences_min = player.positions_general_differences.length === 0 ? 0 : Math.abs(Math.min.apply(null, player.positions_general_differences.filter(value => !isNaN(value))));
    });

  }

  readPlayers() {
    this.calculatePlayers();
    return this.playersInfo;
  }

  getPlayer(i) {
    this.calculatePlayers();
    return this.playersInfo.find(x => x.id === parseInt(i, 10));
    // return this.playersInfo[i];
  }

  getjornadas() {
    // Comparison function
    const cmp = (x, y) => {
      return (x > y) ? 1 : (x < y) ? -1 : 0;
    };
    // Generic average function
    const average = function() {
      const arr = Array.from(arguments);
      const tot = arr.reduce((sum, score) => sum += score);
      return Math.round((tot / arr.length) * 100) / 100;
    };

    const calculate_jornadas = {};
    this.playersInfo.forEach((player) => {
      // Initialize
      player.score_general = 0;
      player.score_jornada = [];
      player.positions_jornada = [];
      player.positions_general = [];

      // Create each jornada Object
      player.points.filter((value: any) => value !== null).forEach((score: any, index) => {
        player.score_general += score || 0;
        player.score_jornada.push(player.score_general);

        !calculate_jornadas[`jornada_${index + 1}`] ? calculate_jornadas[`jornada_${index + 1}`] = [] : null;
        calculate_jornadas[`jornada_${index + 1}`].push({
          id: player.id,
          team: player.team,
          shield: player.images.shield,
          name: player.name,
          image: player.images.profile,
          score_jornada: score,
          score_general: player.score_general
        });
      });
    });

    // SORT (by score) and calculate for TABLES (jornada and general) and other KPIs
    let count_jornada = 0;
    const last_jornada = Object.keys(calculate_jornadas).length || 0;
    const penultima = [];
    const ultima = [];
    const season_points_average = [];

    Object.keys(calculate_jornadas).forEach((jornada, index) => {
      count_jornada += 1;

      // JORNADA-TABLE POSITIONS: SORT BY SCORE and then BY TEAM NAME
      calculate_jornadas[jornada].sort(function(a: any, b: any) {
        // note the minus before -cmp, for descending order
        return cmp(
          [-cmp(a.score_jornada, b.score_jornada), cmp(a.team, b.team)],
          [-cmp(b.score_jornada, a.score_jornada), cmp(b.team, a.team)]
        );
      });


      // Create new properties by JORNADA for calculate after
      calculate_jornadas[jornada].score_best = {
        name: '',
        team: '',
        score: 0
      };
      calculate_jornadas[jornada].score_worst = {
        name: '',
        team: '',
        score: 1000
      };
      calculate_jornadas[jornada].score_average = 0;
      calculate_jornadas[jornada].name = `JORNADA ${count_jornada}`;


      const points_average = [];
      calculate_jornadas[jornada].forEach((team: any, index: any) => {
        // Calculate position number (and if there are more than one team sharing each position)
        if (index > 0) {
          if (team.score_jornada === calculate_jornadas[jornada][index - 1].score_jornada) {
            team.position_jornada = calculate_jornadas[jornada][index - 1].position_jornada;
          } else {
            team.position_jornada = index + 1;
          }
        } else {
          team.position_jornada = index + 1;
        }

        // CALCULATE BEST, WORST and AVERAGE for each JORNADA
        if (calculate_jornadas[jornada].score_best.score < team.score_jornada) {
          calculate_jornadas[jornada].score_best.name = team.name;
          calculate_jornadas[jornada].score_best.team = team.team;
          calculate_jornadas[jornada].score_best.image = team.image;
          calculate_jornadas[jornada].score_best.shield = team.shield;
          calculate_jornadas[jornada].score_best.score = team.score_jornada;
        }
        if (calculate_jornadas[jornada].score_worst.score > team.score_jornada) {
          calculate_jornadas[jornada].score_worst.name = team.name;
          calculate_jornadas[jornada].score_worst.team = team.team;
          calculate_jornadas[jornada].score_worst.image = team.image;
          calculate_jornadas[jornada].score_worst.shield = team.shield;
          calculate_jornadas[jornada].score_worst.score = team.score_jornada;
        }
        points_average.push(team.score_jornada);

        const player = $.grep(this.playersInfo, (e) => e.id === team.id );
        player[0].positions_jornada.push(team.position_jornada);

        team.score_best = Math.max.apply(null, player[0].points.filter((value) => value !== null));
        team.score_worst = Math.min.apply(null, player[0].points.filter((value) => value !== null));
        team.score_average = average.apply(null, player[0].points.filter((value) => value !== null));
        team.num_jornadas = player[0].points.filter((value) => value !== null).length;
      });
      calculate_jornadas[jornada].score_average = average.apply(null, points_average);


      // GENERAL-TABLE POSITIONS: SORT BY SCORE and subtraction between BEST-SCORE and WORST-SCORE in the season
      calculate_jornadas[jornada].sort(function(a, b) {
        // note the minus before -cmp, for descending order
        return cmp(
          [-cmp(a.score_general, b.score_general), -cmp(a.score_best - a.score_worst, b.score_best - b.score_worst)],
          [-cmp(b.score_general, a.score_general), -cmp(b.score_best - b.score_worst, a.score_best - a.score_worst)]
        );
      });

      calculate_jornadas[jornada].forEach((team: any, index) => {
        // Calculate POSITIONS GENERAL
        if (index > 0) {
          if (team.score_general === calculate_jornadas[jornada][index - 1].score_general) {
            team.position_general = calculate_jornadas[jornada][index - 1].position_general;
          } else {
            team.position_general = index + 1;
          }
        } else {
          team.position_general = index + 1;
        }

        const player = $.grep(this.playersInfo, (e) => e.id === team.id );
        player[0].positions_general.push(team.position_general);


        // Position Arrows
        if ((count_jornada + 1) === last_jornada) {
          penultima[index] = {
            id: team.id,
            team: team.team,
            position: team.position_general
          };
        }
        if (count_jornada === last_jornada && last_jornada > 1) {
          const player2 = $.grep(penultima, (e) => e.id === team.id);

          if (player2[0].position > team.position_general) {
            // console.log(`${player2[0].team} GANÓ = (ANTES: ${player2[0].position} > AHORA: ${team.position_general}`);
            team.updown = 'fas fa-chevron-up';
          }
          if (player2[0].position < team.position_general) {
            // console.log(`${player2[0].team} PERDIÓ = (ANTES: ${player2[0].position} > AHORA: ${team.position_general}`);
            team.updown = 'fas fa-chevron-down';
          }
          if (player2[0].position === team.position_general) {
            // console.log(`${player2[0].team} IGUALÓ = (ANTES: ${player2[0].position} > AHORA: ${team.position_general}`);
            team.updown = 'fas fa-equals';
          }
          team.updown_num = Math.abs(player2[0].position - team.position_general);
        } else {
          // When there only 1 jornada there is not "penultima"
          team.updown = 'fas fa-equals';
          team.updown_num = 0;
        }

      });

      // CALCULATE BEST, WORST and AVERAGE for whole SEASON
      !calculate_jornadas['score_best'] ? calculate_jornadas['score_best'] = {name: '', team: '', score: 0} : null;
      !calculate_jornadas['score_worst'] ? calculate_jornadas['score_worst'] = {name: '', team: '', score: 1000} : null;
      !calculate_jornadas['score_average'] ? calculate_jornadas['score_average'] = 0 : null;
      if (calculate_jornadas['score_best'].score < calculate_jornadas[jornada]['score_best'].score) {
        calculate_jornadas['score_best'].name = calculate_jornadas[jornada]['score_best'].name;
        calculate_jornadas['score_best'].team = calculate_jornadas[jornada]['score_best'].team;
        calculate_jornadas['score_best'].image = calculate_jornadas[jornada]['score_best'].image;
        calculate_jornadas['score_best'].shield = calculate_jornadas[jornada]['score_best'].shield;
        calculate_jornadas['score_best'].score = calculate_jornadas[jornada]['score_best'].score;
      }
      if (calculate_jornadas['score_worst'].score > calculate_jornadas[jornada]['score_worst'].score) {
        calculate_jornadas['score_worst'].name = calculate_jornadas[jornada]['score_worst'].name;
        calculate_jornadas['score_worst'].team = calculate_jornadas[jornada]['score_worst'].team;
        calculate_jornadas['score_worst'].image = calculate_jornadas[jornada]['score_worst'].image;
        calculate_jornadas['score_worst'].shield = calculate_jornadas[jornada]['score_worst'].shield;
        calculate_jornadas['score_worst'].score = calculate_jornadas[jornada]['score_worst'].score;
      }
      season_points_average.push(calculate_jornadas[jornada].score_average);
      calculate_jornadas['score_average'] = average.apply(null, season_points_average);
    });

    return calculate_jornadas;
  }
}
