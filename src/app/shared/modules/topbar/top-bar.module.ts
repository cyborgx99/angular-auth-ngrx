import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
