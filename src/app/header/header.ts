import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  @Output() menuToggle = new EventEmitter<void>();

  toggleMenu(): void {
    console.log('Menu clicked');
    this.menuToggle.emit();
  }
}