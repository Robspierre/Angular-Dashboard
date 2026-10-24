import { Component } from '@angular/core';
import { DriverList } from '../components/driver-list/driver-list';

@Component({
  selector: 'app-standings',
  imports: [DriverList],
  templateUrl: './standings.html',
  styleUrl: './standings.css',
})
export class Standings {}
