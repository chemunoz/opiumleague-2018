import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tablePlayers: any[] = [];
  tables: any;
  general_table: any;
  historic_general: any[] = [];
  historic_jornada: any[] = [];

  constructor(private _servicio: DataService) {

    // Comparison function
    const cmp = (x, y) => {
      return (x > y) ? 1 : (x < y) ? -1 : 0;
    };

    this.tablePlayers = _servicio.readPlayers();
    console.log('PLAYERS', this.tablePlayers);

    this.tables = _servicio.getjornadas();
    console.log('JORNADAS', this.tables);

    // CLASIFICACION ACTUAL (los datos YA vienen ordenados de lo anterior)
    if (Object.values(this.tables).length > 0){
      this.general_table = this.tables[`jornada_${Object.values(this.tables).length - 3}`];
    
      // Added 'positions_jornada' positions to calculate column 'Racha' in the view
      this.tablePlayers.forEach((player, index) => {
        const myplayer = $.grep(this.general_table, (e) => e.id === player.id );
        if (myplayer[0] !== undefined){
          if (player.positions_jornada.length > 5){
            player.positions_jornada.splice(0, -5); //lo hago en 2 líneas porque splice devuelve el array descartado
            myplayer[0].positions_jornada = player.positions_jornada;
          }else{
            myplayer[0].positions_jornada = player.positions_jornada;
          }
        }
      })
      console.log('Ult. Clasificacion', this.general_table);
    }
    


    // CLASIFICACIONES HISTORICAS
    Object.keys(this.tables).forEach((jornada, index) => {
      if (typeof this.tables[jornada] === 'object' && Object.keys(this.tables[jornada]).length > 5) {

        // CLASIFICACIONES GENERALES HISTORICAS
        this.historic_general.push(JSON.parse(JSON.stringify(this.tables[jornada])));
        this.historic_general[this.historic_general.length - 1].sort(function(a: any, b: any) {
          // note the minus before -cmp, for descending order
          return cmp(
            [-cmp(a.score_general, b.score_general), cmp(a.team, b.team)],
            [-cmp(b.score_general, a.score_general), cmp(b.team, a.team)]
          );
        });
        this.historic_general[this.historic_general.length - 1].jor_name = `${jornada}`.replace('_', ' ').toUpperCase();

        // CLASIFICACIONES JORNADAS HISTORICAS
        this.historic_jornada.push(JSON.parse(JSON.stringify(this.tables[jornada])));
        this.historic_jornada[this.historic_jornada.length - 1].sort(function(a: any, b: any) {
          // note the minus before -cmp, for descending order
          return cmp(
            [-cmp(a.score_jornada, b.score_jornada), cmp(a.team, b.team)],
            [-cmp(b.score_jornada, a.score_jornada), cmp(b.team, a.team)]
          );
        });
        this.historic_jornada[this.historic_jornada.length - 1].jor_name = `${jornada}`.replace('_', ' ').toUpperCase();
      }
    });
    console.log('Hist generales', this.historic_general);
    console.log('Hist jornadas', this.historic_jornada);
  }

  ngOnInit() { }

}
