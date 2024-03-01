import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class mainPageComponent {
  constructor( private dbzService: dbzService){
  }
  get characteres(): Character[]{
    return [...this.dbzService.characteres];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacter(id);
  }
  onNewcharacter(characte: Character):void{
    this.dbzService.addCharacter(characte);
  }
}
