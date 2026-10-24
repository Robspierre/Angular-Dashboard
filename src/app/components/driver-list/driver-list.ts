import {
  Component,
  computed,
  inject,
  signal,
  OnInit
} from '@angular/core';

import { Driver } from '../../Models/driver';
import { DriverService } from '../../services/driver';

@Component({
  selector: 'app-driver-list',
  standalone: true,
  templateUrl: './driver-list.html',
  styleUrl: './driver-list.css'
})
export class DriverList implements OnInit {
  private driverService = inject(DriverService);

  drivers = signal<Driver[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  searchTerm = signal('');

  filteredDrivers = computed(() => {
    const search = this.searchTerm().toLowerCase();

    return this.drivers().filter(driver =>
      driver.name.toLowerCase().includes(search) ||
      driver.team.toLowerCase().includes(search)
    );
  });

  ngOnInit(): void {
    void this.loadDrivers();
  }

  async loadDrivers(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);

    try {
      const drivers = await this.driverService.getDrivers();
      this.drivers.set(drivers);
    } catch {
      this.error.set('Unable to load drivers.');
    } finally {
      this.loading.set(false);
    }
  }

  updateSearch(value: string): void {
    this.searchTerm.set(value);
  }

  selectedDrivers = signal<Driver[]>([]);

budget = signal(100);

totalCost = computed(() =>
  this.selectedDrivers().reduce(
    (total, driver) => total + driver.price,
    0
  )
);

remainingBudget = computed(() =>
  this.budget() - this.totalCost()
);

selectDriver(driver: Driver): void {
  const alreadySelected = this.selectedDrivers()
    .some(d => d.id === driver.id);

  if (alreadySelected) {
    return;
  }

  if (driver.price > this.remainingBudget()) {
    return;
  }

  this.selectedDrivers.update(drivers => [
    ...drivers,
    driver
  ]);
}

removeDriver(driverId: number): void {
  this.selectedDrivers.update(drivers =>
    drivers.filter(d => d.id !== driverId)
  );
}
}