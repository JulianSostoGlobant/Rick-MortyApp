import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from "@angular/router";
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterListComponent } from '@characters/character-list/character-list.component';

const myCoponents= [CharacterDetailsComponent, CharacterListComponent];

@NgModule({
  declarations: [
    ...myCoponents
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [...myCoponents]

 
})
export class CharactersModule { }
