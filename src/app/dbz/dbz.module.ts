import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    mainPageComponent,
    ListComponent,
    CharacterComponent
  ],
  exports:[
    mainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
