import { Injectable } from '@angular/core';
import doc from '../overtredingen.json'

@Injectable({
  providedIn: 'root'
})
export class OvertredingenService {

  constructor() { }
  overtredinglijst = []
  allOvertredingenLijst = []

  getAllOvertredingen() {
    return doc;
  }

  getOvertredingenPlaats(str) {
    this.overtredinglijst = []
    let overtredingen = this.getAllOvertredingen()
    for (let overtreding of overtredingen) {
      if (overtreding.opnameplaats_straat.toLowerCase() === str.toLowerCase() )
        this.overtredinglijst.push(overtreding)
    }
    this.overtredinglijst.sort((a, b) => a.datum_vaststelling - b.datum_vaststelling || a.opnameplaats_straat - b.opnameplaats_straat);
    return this.overtredinglijst
  }

  getOvertredingenSnelheid(snelheid) {
    this.overtredinglijst = []
    let overtredingen = this.getAllOvertredingen()
    for (let overtreding of overtredingen) {
      if ( overtreding.aantal_overtredingen_snelheid >= snelheid)
        this.overtredinglijst.push(overtreding)
    }
    this.overtredinglijst.sort((a, b) => a.datum_vaststelling - b.datum_vaststelling || a.opnameplaats_straat - b.opnameplaats_straat);
    return this.overtredinglijst
  }


}
