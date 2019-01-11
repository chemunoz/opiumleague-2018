import { Injectable, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { myJSON } from './../assets/data.json';
declare var $: any;

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor (private httpService: HttpClient) {
    console.log('Iniciando Service constructor');
  }

  arrPlayers: any[] = [
    {
      'id': 0,
      'name': 'JC',
      'team': 'Frente Popular',
      'shield': 'jc.png',
      'image': 'jc.jpg',
      'points': [79, 68, 54, 41, 65, 82, 63, 67, 86, 77, 67, 71, 63, 63, 76, 89, 48, 69, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2009-2010', '2010-2011',	'2011-2012', '2012-2013', '2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 1,
      'name': 'Fran',
      'team': `Rino's Boys`,
      'shield': 'fran.png',
      'image': 'fran.jpg',
      'points': [68, 63, 97, 61, 48, 60, 52, 62, 78, 83, 40, 48, 50, 96, 76, 92, 51, 53, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': ['copa_liga_verde.png']
    },
    {
      'id': 2,
      'name': 'Borja R.',
      'team': 'Bierzo Power',
      'shield': 'borja_ramos.png',
      'image': 'borja_ramos.jpg',
      'points': [72, 57, 73, 41, 66, 70, 63, 50, 70, 105, 56, 57, 46, 41, 58, 66, 44, 82, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': ['copa_liga_azul.png']
    },
    {
      'id': 3,
      'name': 'Che',
      'team': 'Amunt Che',
      'shield': 'che.png',
      'image': 'che.jpg',
      'points': [56, 62, 72, 49, 55, 50, 54, 71, 59, 96, 54, 60, 44, 79, 116, 88, 59, 67, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2009-2010', '2010-2011',	'2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017',
                  '2017-2018', '2018-2019'],
      'trophies': ['copa_liga_azul.png', 'copa_liga_azul.png']
    },
    {
      'id': 4,
      'name': 'Diego',
      'team': 'Orgullo de Runner',
      'shield': 'diego.png',
      'image': 'diego.jpg',
      'points': [54, 73, 39, 44, 40, 56, 54, 83, 65, 85, 67, 70, 56, 65, 84, 94, 53, 64, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2016-2017', '2017-2018', '2018-2019'],
      'trophies': ['copa_facup_negra.png']
    },
    {
      'id': 5,
      'name': 'Juanan',
      'team': 'Balompédica Porrua',
      'shield': 'juanan.png',
      'image': 'juanan.jpg',
      'points': [53, 70, 72, 28, 71, 36, 57, 75, 67, 70, 60, 49, 57, 52, 54, 83, 54, 45, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 6,
      'name': 'Adolfo',
      'team': 'Galizano 18-19',
      'shield': 'adolfo.png',
      'image': 'adolfo.jpg',
      'points': [41, 65, 53, 50, 53, 54, 59, 50, 61, 57, 50, 67, 44, 54, 71, 95, 41, 61, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2009-2010', '2010-2011',	'2011-2012', '2012-2013', '2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 7,
      'name': 'Will',
      'team': 'Williessous',
      'shield': 'will.png',
      'image': 'will.jpg',
      'points': [64, 64, 56, 55, 63, 43, 46, 67, 34, 73, 46, 74, 41, 53, 63, 87, 38, 56, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': ['copa_champions_negra.png']
    },
    {
      'id': 8,
      'name': 'Ovidiu',
      'team': 'Ovi Dan',
      'shield': 'ovidiu.png',
      'image': 'ovidiu.jpg',
      'points': [44, 54, 70, 45, 59, 51, 43, 84, 70, 58, 59, 76, 42, 62, 58, 81, 48, 62, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 9,
      'name': 'Luis',
      'team': 'Porrua City',
      'shield': 'luis.png',
      'image': 'luis.jpg',
      'points': [69, 58, 65, 51, 49, 41, 48, 64, 46, 60, 48, 65, 46, 72, 56, 88, 47, 54, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2009-2010', '2010-2011',	'2011-2012', '2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 10,
      'name': 'Raúl',
      'team': 'Dojo Cobra KAI',
      'shield': 'raul.png',
      'image': 'raul.jpg',
      'points': [56, 89, 48, 43, 52, 37, 49, 61, 69, 91, 52, 70, 54, 59, 69, 64, 59, 62, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2012-2013', '2013-2014', '2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 11,
      'name': 'Ekaitz',
      'team': 'Yellow Storm F.C.',
      'shield': 'ekaitz.png',
      'image': 'ekaitz.jpg',
      'points': [69, 61, 63, 39, 65, 43, 50, 76, 83, 66, 65, 42, 71, 55, 51, 94, 55, 81, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 12,
      'name': 'David O.',
      'team': 'David Valcan',
      'shield': 'ortega.png',
      'image': 'ortega.jpg',
      'points': [82, 72, 73, 53, 64, 55, 60, 78, 48, 104, 59, 40, 55, 60, 82, 91, 57, 75, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2009-2010', '2010-2011',	'2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017',
                  '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 13,
      'name': 'Nando',
      'team': 'Infican Viajes',
      'shield': 'nandelas.png',
      'image': 'nandelas.jpg',
      'points': [45, 70, 65, 42, 27, 58, 57, 50, 44, 94, 37, 43, 43, 82, 107, 103, 54, 80, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 14,
      'name': 'Mario',
      'team': 'Mario 13-14',
      'shield': 'mario.png',
      'image': 'mario.jpg',
      'points': [0, 69, 42, 41, 53, 48, 39, 44, 34, 45, 53, 65, 44, 65, 61, 77, 27, 32, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2009-2010', '2010-2011',	'2011-2012', '2012-2013', '2014-2015', '2015-2016', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 15,
      'name': 'Paloma',
      'team': 'Super Palomba',
      'shield': 'paloma.png',
      'image': 'paloma.jpg',
      'points': [-30, 66, 57, 55, 35, 78, 39, 56, 88, 80, 45, 44, 40, 53, 54, 60, 41, 51, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2009-2010', '2010-2011',	'2011-2012', '2012-2013', '2015-2016', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 16,
      'name': 'Javi',
      'team': 'Sito Miñanco',
      'shield': 'javi_bsh.png',
      'image': 'javi_bsh.jpg',
      'points': [56, 70, 90, 50, 50, 64, 71, 63, 72, 84, 56, 61, 47, 69, 61, 106, 54, 73, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2009-2010', '2010-2011', '2012-2013', '2018-2019'],
      'trophies': []
    },
    {
      'id': 17,
      'name': 'Inés',
      'team': 'Capitán Tsubasa',
      'shield': 'ines.png',
      'image': 'ines.jpg',
      'points': [40, 56, 46, 34, 65, 68, 67, 78, 58, 92, 51, 55, 45, 57, 87, 102, 50, 57, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2018-2019'],
      'trophies': []
    },
    {
      'id': 18,
      'name': 'Dani R.',
      'team': 'Racing de Santander',
      'shield': 'dani_negro.png',
      'image': 'dani_negro.jpg',
      'points': [60, 51, 53, 52, 89, 55, 43, 55, 37, 101, 69, 50, 29, 73, 82, 63, 38, 53, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 19,
      'name': 'Chente',
      'team': 'Wayne team',
      'shield': 'vicente.png',
      'image': 'vicente.jpg',
      'points': [51, 49, 71, 44, 87, 35, 73, 66, 31, 88, 61, 63, 47, 65, 66, 90, 55, 65, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2012-2013', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 20,
      'name': 'Serious',
      'team': 'Meneillos',
      'shield': 'serious.png',
      'image': 'serious.jpg',
      'points': [51, 60, 45, 48, 31, 55, 54, 71, 72, 102, 46, 60, 31, 52, 61, 97, 36, 88, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 21,
      'name': 'David M.',
      'team': 'New Tikis',
      'shield': 'david_munoz.png',
      'image': 'david_munoz.jpg',
      'points': [66, 67, 53, 27, 74, 77, 55, 59, 33, 109, 58, 56, 53, 58, 84, 90, 55, 60, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 22,
      'name': 'Felipe',
      'team': 'Old Tikis',
      'shield': 'felipe.png',
      'image': 'felipe.jpg',
      'points': [82, 57, 66, 40, 39, 57, 79, 46, 52, 44, 41, 51, 52, 75, 73, 90, 56, 57, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2018-2019'],
      'trophies': []
    },
    {
      'id': 23,
      'name': 'Borja L.',
      'team': 'Asturgijón',
      'shield': 'borja.png',
      'image': 'borja.jpg',
      'points': [49, 45, 54, 45, 53, 38, 49, 48, 51, 46, 44, 33, 37, 42, 68, 70, 42, 52, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2012-2013', '2013-2014', '2015-2016', '2016-2017', '2018-2019'],
      'trophies': []
    },
    {
      'id': 24,
      'name': 'Pablo',
      'team': 'Lábaro FC',
      'shield': 'pablo_fernandez.png',
      'image': 'pablo_fernandez.jpg',
      'points': [69, 53, 62, 41, 62, 56, 46, 57, 61, 89, 55, 66, 74, 41, 66, 86, 64, 57, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2018-2019'],
      'trophies': []
    },
    {
      'id': 25,
      'name': 'Carlos Julio',
      'team': 'Cabimas FC',
      'shield': 'carlos_julio.png',
      'image': 'carlos_julio.jpg',
      'points': [47, 45, 45, 46, 44, 56, 58, 43, 59, 94, 49, 67, 28, 39, 40, 49, 37, 55, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2015-2016', '2016-2017', '2017-2018', '2018-2019'],
      'trophies': []
    },
    {
      'id': 26,
      'name': 'Miguel',
      'team': 'Zea 1+8 FC',
      'shield': 'zea.png',
      'image': 'zea.jpg',
      'points': [73, 57, 44, 56, 23, 47, 48, 48, 31, 105, 29, 69, 47, 65, 75, 95, 61, 39, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2018-2019'],
      'trophies': []
    },
    {
      'id': 27,
      'name': 'Dani G.',
      'team': 'Caracas FC',
      'shield': 'daniel_gonzalez.png',
      'image': 'daniel_gonzalez.jpg',
      'points': [64, 40, 80, 50, 61, 61, 75, 46, 56, 66, 48, 59, 55, 65, 52, 109, 44, 71, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      'seasons': ['2018-2019'],
      'trophies': []
    }
  ];

  // readPlayersFile () {
  //   this.httpService.get('../assets/data.json').subscribe(data => {
  //     this.arrData = data['2018-2019'] as any[];	 // FILL THE ARRAY WITH DATA.
  //     console.log('LECTURA JSON', this.arrPlayers);
  //     return this.arrPlayers;
  //   });
  // }

  calulatePlayers(){
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
    this.arrPlayers.forEach((player) => {
      // Initialize
      player.score_general = 0;
      player.score_jornada = [];
      player.positions_jornada = [];
      player.positions_general = [];
      player.score_average_jornada = [];

      // Create each jornada Object
      player.points.filter((value: any) => value !== null).forEach((score: any, index) => {
        player.score_general += score || 0;
        player.score_jornada.push(player.score_general);

        !calculate_jornadas[`jornada_${index + 1}`] ? calculate_jornadas[`jornada_${index + 1}`] = [] : null;
        calculate_jornadas[`jornada_${index + 1}`].push({
          id: player.id,
          team: player.team,
          shield: player.shield,
          name: player.name,
          image: player.image,
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
          team.score_jornada === calculate_jornadas[jornada][index-1].score_jornada ? team.position_jornada = calculate_jornadas[jornada][index-1].position_jornada : team.position_jornada = index + 1;
        } else {
          team.position_jornada = index + 1;
        }

        const player = $.grep(this.arrPlayers, (e) => e.id === team.id );
        player[0].positions_jornada.push(team.position_jornada);

        points_average.push(team.score_jornada);

        player[0].score_best = Math.max.apply(null, player[0].points.filter((value) => value !== null));
        player[0].score_worst = Math.min.apply(null, player[0].points.filter((value) => value !== null));
        player[0].score_average = average.apply(null, player[0].points.filter((value) => value !== null));
        player[0].num_jornadas = player[0].points.filter((value) => value !== null).length;
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
          team.score_general === calculate_jornadas[jornada][index-1].score_general ? team.position_general = calculate_jornadas[jornada][index-1].position_general : team.position_general = index + 1;
        } else {
          team.position_general = index + 1;
        }

        const player = $.grep(this.arrPlayers, (e) => e.id === team.id );
        player[0].positions_general.push(team.position_general);
        player[0].score_average_jornada.push(calculate_jornadas[jornada].score_average);
      });
    });

    this.arrPlayers.forEach((player) => {
      player.top_jornada = player.positions_jornada.filter((value) => value === 1).length;
      player.top_clasificacion = player.positions_general.filter((value) => value === 1).length;
    });

  }

  readPlayers() {
    this.calulatePlayers();
    return this.arrPlayers;
  }

  getPlayer(i) {
    this.calulatePlayers();
    return this.arrPlayers[i];
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
    this.arrPlayers.forEach((player) => {
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
          shield: player.shield,
          name: player.name,
          image: player.image,
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
          team.score_jornada === calculate_jornadas[jornada][index-1].score_jornada ? team.position_jornada = calculate_jornadas[jornada][index-1].position_jornada : team.position_jornada = index + 1;
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

        const player = $.grep(this.arrPlayers, (e) => e.id === team.id );
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
          team.score_general === calculate_jornadas[jornada][index-1].score_general ? team.position_general = calculate_jornadas[jornada][index-1].position_general : team.position_general = index + 1;
        } else {
          team.position_general = index + 1;
        }

        const player = $.grep(this.arrPlayers, (e) => e.id === team.id );
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
            team.updown = 'arrow_up.png';
          }
          if (player2[0].position < team.position_general) {
            // console.log(`${player2[0].team} PERDIÓ = (ANTES: ${player2[0].position} > AHORA: ${team.position_general}`);
            team.updown = 'arrow_down.png';
          }
          if (player2[0].position === team.position_general) {
            // console.log(`${player2[0].team} IGUALÓ = (ANTES: ${player2[0].position} > AHORA: ${team.position_general}`);
            team.updown = 'arrow_equal.png';
          }
          team.updown_num = Math.abs(player2[0].position - team.position_general);
        } else {
          // When there only 1 jornada there is not "penultima"
          team.updown = 'arrow_equal.png';
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
