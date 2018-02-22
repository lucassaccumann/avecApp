import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id_foto = "vip-20171220163516.jpg";

  constructor(public navCtrl: NavController) {

  }

  public funcaozinha(num1:number): void{
    alert("Funcionaaa" + num1);
  }

  ionViewDidLoad() {
    this.funcaozinha(10);
  }

}
