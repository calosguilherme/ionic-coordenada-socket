import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    private geolocation: Geolocation,
    private socket: Socket
  ) {}


  getCoordenada(){
  this.geolocation.getCurrentPosition().then((resp) => {
    this.socket.connect()
    console.log("Socket aberto");
    this.socket.emit('Coordenada', { latitude: resp.coords.latitude, longitude: resp.coords.longitude});
    this.socket.disconnect();
   }).catch((error) => {
     console.log('Erro ao tentar capturar localização:', error);
   });
  }
}
