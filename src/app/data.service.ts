import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor (private http: HttpClient) {
    console.log('Iniciando Service de Datos');
  }

  arrPlayers:any[] = [
    {
      "id": 0,
      "name": "JC",
      "team": "Frente Popular",
      "shield": "jc.png",
      "image": "jc.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2009-2010", "2010-2011",	"2011-2012", "2012-2013", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 1,
      "name": "Che",
      "team": "Amunt Che",
      "shield": "che.png",
      "image": "che.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2009-2010", "2010-2011",	"2011-2012", "2012-2013", "2013-2014", "2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": ["copa_liga_azul.png", "copa_liga_azul.png"]
    },
    {
      "id": 2,
      "name": "David O.",
      "team": "David Valcan",
      "shield": "ortega.png",
      "image": "ortega.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2009-2010", "2010-2011",	"2011-2012", "2012-2013", "2013-2014", "2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": ["copa_liga_verde.png"]
    },
    {
      "id": 3,
      "name": "Luis",
      "team": "Porrua City",
      "shield": "luis.png",
      "image": "luis.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2009-2010", "2010-2011",	"2011-2012", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 4,
      "name": "Javi",
      "team": "C.D. Monte",
      "shield": "javi_monte.png",
      "image": "javi_monte.png",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 5,
      "name": "Javi",
      "team": "Sito Miñanco",
      "shield": "javi_bsh.png",
      "image": "javi_bsh.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2009-2010", "2010-2011", "2012-2013", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 6,
      "name": "Adolfo",
      "team": "Galizano 18-19",
      "shield": "adolfo.png",
      "image": "adolfo.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2009-2010", "2010-2011",	"2011-2012", "2012-2013", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 7,
      "name": "Fran",
      "team": "Rino's Boys",
      "shield": "fran.png",
      "image": "fran.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2011-2012", "2012-2013", "2013-2014", "2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": ["copa_liga_verde.png", "copa_uefa_negra.png"]
    },
    {
      "id": 8,
      "name": "Inés",
      "team": "Capitán Tsubasa",
      "shield": "ines.png",
      "image": "ines.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 9,
      "name": "Nando",
      "team": "Infican Viajes",
      "shield": "nandelas.png",
      "image": "nandelas.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 10,
      "name": "Will",
      "team": "Williessous",
      "shield": "will.png",
      "image": "will.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": ["copa_champions_negra.png"]
    },
    {
      "id": 11,
      "name": "Javi N.",
      "team": "Jabulani FC",
      "shield": "javi_nieto.png",
      "image": "javi_nieto.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 12,
      "name": "Pablo",
      "team": "Lábaro FC",
      "shield": "pablo_fernandez.png",
      "image": "pablo_fernandez.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 13,
      "name": "Borja R.",
      "team": "Bierzo Power",
      "shield": "borja_ramos.png",
      "image": "borja_ramos.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": ["copa_liga_azul.png"]
    },
    {
      "id": 14,
      "name": "Lorea",
      "team": "Lorea Team",
      "shield": "logo_opium_icono.png",
      "image": "icono_femenino.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 15,
      "name": "Juanan",
      "team": "Balompédica Porrua",
      "shield": "juanan.png",
      "image": "juanan.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 16,
      "name": "Ovidiu",
      "team": "Ovi Dan",
      "shield": "ovidiu.png",
      "image": "ovidiu.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 17,
      "name": "Luis R.",
      "team": "Mompys CF",
      "shield": "luis_roll.png",
      "image": "luis_roll.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 18,
      "name": "Ezequiel",
      "team": "Eze Team",
      "shield": "logo_opium_icono.png",
      "image": "icono_masculino.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 19,
      "name": "Mayfex",
      "team": "CaZuVeNe",
      "shield": "mayfex.png",
      "image": "mayfex.png",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 20,
      "name": "Felipe",
      "team": "Old Tikis",
      "shield": "felipe.png",
      "image": "felipe.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 21,
      "name": "Miguel",
      "team": "Zea 1+8 FC",
      "shield": "zea.png",
      "image": "zea.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 22,
      "name": "Ekaitz",
      "team": "Yellow Storm F.C.",
      "shield": "ekaitz.png",
      "image": "ekaitz.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2017-2018", "2018-2019", "2019-2020"],
      "trophies": ["copa_champions_negra.png"]
    },
    {
      "id": 23,
      "name": "Diego",
      "team": "Orgullo de Runner",
      "shield": "diego.png",
      "image": "diego.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": ["copa_facup_negra.png"]
    },
    {
      "id": 24,
      "name": "Nuria",
      "team": "Steaua no Beberé",
      "shield": "nuria.png",
      "image": "nuria.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 25,
      "name": "Raúl",
      "team": "Dojo Cobra KAI",
      "shield": "raul.png",
      "image": "raul.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2012-2013", "2013-2014", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 26,
      "name": "Serious",
      "team": "Meneillos",
      "shield": "serious.png",
      "image": "serious.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 27,
      "name": "Dani G.",
      "team": "Caracas FC",
      "shield": "daniel_gonzalez.png",
      "image": "daniel_gonzalez.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 28,
      "name": "Jose C.",
      "team": "Autos Esprilla",
      "shield": "jose_cagigas.png",
      "image": "jose_cagigas.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 29,
      "name": "David M.",
      "team": "New Tikis",
      "shield": "david_munoz.png",
      "image": "david_munoz.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 30,
      "name": "Angel C.",
      "team": "Tikis de la Valle",
      "shield": "angel_cuesta.png",
      "image": "angel_cuesta.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 31,
      "name": "Dani L.",
      "team": "New Team",
      "shield": "dani_lozano.png",
      "image": "icono_masculino.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 32,
      "name": "Javichu",
      "team": "Racing Hoznayo",
      "shield": "logo_opium_icono.png",
      "image": "javichu.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2019-2020"],
      "trophies": []
    },
    {
      "id": 33,
      "name": "Mario",
      "team": "Mario's Eleven",
      "shield": "mario.png",
      "image": "mario.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2009-2010", "2010-2011",	"2011-2012", "2012-2013", "2014-2015", "2015-2016", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
    {
      "id": 34,
      "name": "Paloma",
      "team": "Super Palomba",
      "shield": "paloma.png",
      "image": "paloma.jpg",
      "points": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "seasons": ["2009-2010", "2010-2011",	"2011-2012", "2012-2013", "2015-2016", "2017-2018", "2018-2019", "2019-2020"],
      "trophies": []
    },
  ];

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
    this.calculatePlayers();
    return this.arrPlayers;
  }

  getPlayer(i) {
    this.calculatePlayers();
    return this.arrPlayers.find(x => x.id == i);
    // return this.arrPlayers[i];
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
