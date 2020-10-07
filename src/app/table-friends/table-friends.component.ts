import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-table-friends',
  templateUrl: './table-friends.component.html',
  styleUrls: ['./table-friends.component.css']
})
export class TableFriendsComponent implements OnInit {
  tablePlayers: any[] = [];
  tables: any;
  sportFriends: number[] = [1, 29, 2, 0, 20, 34, 32, 12];
  general_table: any;

  constructor(private _servicio: DataService) {
    // Comparison function
    const cmp = (x, y) => {
      return (x > y) ? 1 : (x < y) ? -1 : 0;
    };

    this.tablePlayers = _servicio.readPlayers().filter(player => this.sportFriends.includes(player['id']));
    console.log('PLAYERS', this.tablePlayers);

    this.tables = _servicio.getjornadas();
    console.log('JORNADAS', this.tables);

    // CLASIFICACION ACTUAL (los datos YA vienen ordenados de lo anterior)
    if (Object.values(this.tables).length > 0) {
      this.general_table = this.tables[`jornada_${Object.values(this.tables).length - 3}`];

      // Added 'positions_jornada' positions to calculate column 'Racha' in the view
      this.tablePlayers.forEach((player, index) => {
        if (this.sportFriends.includes(player['id'])) {
          const myplayer = $.grep(this.general_table, (e: any) => e.id === player.id);
          if (myplayer[0] !== undefined) {
            if (player.positions_jornada.length > 5) {
              myplayer[0].positions_jornada = player.positions_jornada.splice((player.positions_jornada.length - 5), 5);
            } else {
              myplayer[0].positions_jornada = player.positions_jornada;
            }
          }
        }
      });
      console.log('PLAYERS 2', this.tablePlayers);

      // SORT by GENERAL SCORE and then by BEST SCORE in season
      this.general_table = this.general_table.filter(player => this.sportFriends.includes(player['id']));
      this.general_table.sort(function(a: any, b: any) {
        // note the minus before -cmp, for descending order
        return cmp(
          [-cmp(a.score_general, b.score_general), -cmp(a.score_best, b.score_best)],
          [-cmp(b.score_general, a.score_general), -cmp(b.score_best, a.score_best)]
        );
      });
      this.general_table.forEach((element, index) => {
        element.position_general = index + 1;
      });
      console.log('Ult. Clasificacion', this.general_table);
    }


  }

  ngOnInit() {
  }

}
