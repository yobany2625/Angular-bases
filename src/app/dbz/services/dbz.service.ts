import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class dbzService {
  public characteres: Character[] = [
    { id:uuid(), name: 'krillin', power: 500},
    { id:uuid(), name: 'Goku', power: 10000},
    { id:uuid(), name: 'vegeta', power:8000}
  ];
  addCharacter(Character: Character): void {
    Character.id = uuid();
    this.characteres.push(Character);
  }

  onDeleteCharacter(index:string): void {
    this.characteres = this.characteres.filter(Character => Character.id !== index)
  }
}
