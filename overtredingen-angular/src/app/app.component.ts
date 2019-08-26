import { Component, OnInit } from '@angular/core';
import { OvertredingenService } from './overtredingen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public overtredingenservice: OvertredingenService
  ) { }

  overtredingenlijstPlaats = []
overtredingenlijstSort = []
overtredingenlijstSnelheid =[]
  straat 
  overtredingen

  ngOnInit(){
    console.log(this.overtredingenservice.getAllOvertredingen())
  }

  findOvertredingenPlaats(){
    this.overtredingenlijstPlaats = this.overtredingenservice.getOvertredingenPlaats(this.straat)
  }

  findOvertredingenSnelheid(){
    this.overtredingenlijstSnelheid = this.overtredingenservice.getOvertredingenSnelheid(this.overtredingen)
  }

  findAllOvertredingenSort(){
    this.overtredingenlijstSort = this.overtredingenservice.getAllOvertredingen();
    this.overtredingenlijstSort.sort((a, b) => a.datum_vaststelling > b.datum_vaststelling ? 1: (a.datum_vaststelling === b.datum_vaststelling) ? (( a.opnameplaats_straat > b.opnameplaats_straat) ? 1 : -1) : -1);
  }
}
