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

  getOvertredingenPlaatsEnSnelheid(str, snelheid) {
    this.overtredinglijst = []
    let overtredingen = this.getAllOvertredingen()
    for (let overtreding of overtredingen) {
      if (overtreding.opnameplaats_straat.toLowerCase() === str.toLowerCase() && overtreding.aantal_overtredingen_snelheid >= snelheid)
        this.overtredinglijst.push(overtreding)
    }
    this.overtredinglijst.sort((a, b) => a.datum_vaststelling - b.datum_vaststelling || a.opnameplaats_straat - b.opnameplaats_straat);
    return this.overtredinglijst
  }

  getAllOvertredingenSort() {
    let overtredingen = this.getAllOvertredingen()
    for (let overtreding of overtredingen) {
      this.allOvertredingenLijst.push(overtreding)
    }
    return this.allOvertredingenLijst.sort((a, b) => a.datum_vaststelling - b.datum_vaststelling || a.opnameplaats_straat.toLowerCase() - b.opnameplaats_straat.toLowerCase());
  }

}
