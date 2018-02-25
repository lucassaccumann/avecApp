import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FotosProvider } from '../../providers/fotos/fotos';
import { AppAvailability } from '@ionic-native/app-availability';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    FotosProvider,
    AppAvailability,
  ]
})
export class HomePage {
  idFb_avec = "376876849028749";
  public list_fotos = new Array<string>();
  fb: string;
  hasFb: boolean;
  
  constructor(
    public navCtrl: NavController,
    private fotosProvider: FotosProvider,
    public appAvailability: AppAvailability,
    public platform: Platform
  
  ){
    if(this.platform.is('ios')){
			this.fb = 'fb://';
		}
		else if(this.platform.is('android')){
			this.fb = 'com.facebook.katana';
		}
		this.appAvailability.check(this.fb).then((isInstalled) => {
			if(isInstalled) this.hasFb = true;
			else this.hasFb = false;
		});

  }

  public openApp(): void{
    if(this.hasFb){
      window.open('fb://page/'+this.idFb_avec, '_system', 'location=no');
    }
    else{
      window.location.replace("http://facebook.com/AvecBrasil");
    }
  }

  ionViewDidLoad() {
    this.fotosProvider.getIdFotos().subscribe(
      data=>{
        const response = (data as any);
        const objeto = (response.data.gallery);
        for(var i = 0;i<objeto.length;i++){
          this.list_fotos[i] = objeto[i];
        }
        console.log(objeto);
      }, 
      error=>{
        console.log(error);
      }
    )
  }
}
