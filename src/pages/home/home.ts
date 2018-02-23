import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotosProvider } from '../../providers/fotos/fotos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    FotosProvider
  ]
})
export class HomePage {
  id_foto = "vip-20171220163516.jpg";
  public list_fotos = new Array<string>();
  i = 0;
  constructor(
    public navCtrl: NavController,
    private fotosProvider: FotosProvider
  
  ) {

  }

  public funcaozinha(num1:number): void{
    alert("Funcionaaa" + num1);
  }

  ionViewDidLoad() {
    this.fotosProvider.getIdFotos().subscribe(
      data=>{
        const response = (data as any);
        const objeto = (response.data.gallery);
        // this.list_fotos = objeto.results;
        /* for(let i in objeto){
          this.list_fotos[i] = i;
        }*/ 
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
