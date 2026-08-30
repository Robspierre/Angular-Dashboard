import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {

  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  closeSidebar(): void {
    this.close.emit();
  }
}