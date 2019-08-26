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

  overtredingenlijst = []
overtredingenlijstSort = []
  straat 
  overtredingen

  ngOnInit(){
    console.log(this.overtredingenservice.getAllOvertredingen())
  }

  findOvertredingen(){
    this.overtredingenlijst = this.overtredingenservice.getOvertredingenPlaatsEnSnelheid(this.straat, this.overtredingen)
  }

  findAllOvertredingenSort(){
    this.overtredingenlijstSort = this.overtredingenservice.getAllOvertredingenSort();
  }
}
