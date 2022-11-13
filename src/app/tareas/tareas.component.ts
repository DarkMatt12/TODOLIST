import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  //lista favoritos
  lista0 = [
    {title: "Dar de comer a Nova",
    isDone: false,
    fav: false,
  },
  {title: "Jugar con Nova",
    isDone: false,
    fav: false,
  },
  {title: "Terminar Angular",
    isDone: false,
    fav: false,
  }
  ]

  //lista sin hacer
  lista1 = [
    {
      title: "Comer",
      isDone: false,
      fav: false,
    },
    {
      title: "Cantar",
      isDone: false,
      fav: false,
    },
    {
      title: "Jugar",
      isDone: false,
      fav:false,
    }
  ]

  //lista hechos
  lista2 = [
    {
      title: "PIPI PUPU",
      isDone: true,
      fav:false,
    }
  ]


  name:string = "";

  clickpipipupu(){
    this.lista1.unshift({"title":this.name, isDone: false, fav:false})
  }

  Cambiar0(index:any){
    const pipipupu = this.lista0.splice(index,1);
    console.log(pipipupu)
    this.lista2.push({"title": pipipupu[0].title, isDone: true,fav:false });
    console.log(pipipupu[0].title);
  }
  Cambiar1(index:any){
    const pipipupu = this.lista1.splice(index,1);
    this.lista2.push({"title": pipipupu[0].title, isDone: true,fav:false });
    console.log(pipipupu[0].title);
  }
  Cambiar2(index:any){
    const pipipupu = this.lista2.splice(index,1);
    this.lista1.push({"title": pipipupu[0].title, isDone: false,fav:false });
    console.log(pipipupu[0].title);
  }

  CambiarFav1(index:any){
    const pipipupu = this.lista0.splice(index,1);
    this.lista1.unshift({"title": pipipupu[0].title, isDone: false,fav:false });
    console.log(pipipupu[0].title);
  }
  CambiarFav2(index:any){
    const pipipupu = this.lista1.splice(index,1);
    this.lista0.unshift({"title": pipipupu[0].title, isDone: false,fav:false });
    console.log(pipipupu[0].title);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
