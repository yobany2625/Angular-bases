import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public deleteHero?: string;
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk','she Hulk','Thor'];

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
