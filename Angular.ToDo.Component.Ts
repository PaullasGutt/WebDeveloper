//*Angular - TODO Component TS*//

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {



  constructor() { }

  listeTache = [];
  listeCategorie = ['PHP', 'CSS', 'HTML', 'JS', 'Divers'];

  ngOnInit() {
  }

  ajouterTache(tacheForm: NgForm){
    console.log(tacheForm.form.value.titre);

    //Construction d'un objet temporaire
    const monObjTemp = { titre: '', date: null, check: false, categorie: null };

    //Remplissage de mon objet temporaire avec les valeurs du formulaire
    monObjTemp.titre = tacheForm.form.value.titre;
    monObjTemp.date = new Date();
    monObjTemp.categorie = tacheForm.form.value.categorie;

    //On Pousse la variable de type objet 'monObjTemp' dans le tableau d'objet listeTache
    this.listeTache.push(monObjTemp);

    //Intialisation du formualire
    tacheForm.resetForm();

  }
     supprimerTache(index){
     this.listeTache.splice(index, 1);



    }
    validTache(index){
      this.listeTache[index].check = true;
     }
testEmpty(liste) {
  let nbFalse = 0;
  let nonVide = false;
  let valeurAtester = true;
  if(liste ==='listeA'){
    valeurAtester = false;

  }
  if (this.listeTache.length !== 0) {
    //tslinte:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listeTache.length; i++){

      let ligneAtester: any = {};
      ligneAtester = this.listeTache[i];
      console.log(ligneAtester);
      if(ligneAtester.check === valeurAtester) {
        nbFalse++;
      }
    }
    if(nbFalse !== 0) {
      nonVide = true;
    }
  }
  return nonVide;
 }
}
