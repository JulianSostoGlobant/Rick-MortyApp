import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';
type RequestInfo= {
  next: string;
}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
// se crea el valor characters de la interface Character vacia
  characters: Character [] = [];
  info RequestInfo= {
    next: null,
  }
  private pageNum=1;
  private query:string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  constructor(characterSvc: CharacterService) { }

  ngOnInit(): void {}



private getDataFromService ():void {
  this.characterSvc.searchCharacters(this.query, this.pageNum)
  .pipe(
    take(1)
  ).subscribe((res:any)=> {
    const{info, results} = res;
    this.characters=[... this.characters, ...results]
  })
}
}
    