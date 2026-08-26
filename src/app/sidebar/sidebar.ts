import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
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