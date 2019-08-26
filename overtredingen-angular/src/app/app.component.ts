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

  ngOnInit(){
    console.log(this.overtredingenservice.getOvertredingenPlaatsEnSnelheid("BISSCHOPPENHOFLAAN", 20))
  }
}
