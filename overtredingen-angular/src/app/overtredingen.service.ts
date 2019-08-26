import { Injectable } from '@angular/core';
import doc from '../overtredingen.json'

@Injectable({
  providedIn: 'root'
})
export class OvertredingenService {

  constructor() { }
  overtredinglijst = []

  getAllOvertredingen(){
    return doc;
  }

  getOvertredingenPlaatsEnSnelheid(str, snelheid){
    this.overtredinglijst = []
    let overtredingen = this.getAllOvertredingen()
    for (let overtreding of overtredingen){
      if(overtreding.opnameplaats_straat.toLowerCase() === str.toLowerCase() && overtreding.aantal_overtredingen_snelheid >= snelheid)
      this.overtredinglijst.push(overtreding)
    }
    return this.overtredinglijst
  }
   
}
