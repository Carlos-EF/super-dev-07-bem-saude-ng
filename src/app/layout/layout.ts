import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Sidebar } from '../core/components/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './layout.html'
})
export class Layout {

}
