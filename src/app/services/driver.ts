import { Injectable } from '@angular/core';
import { Driver } from '../Models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private apiUrl = '/api/drivers';

  async getDrivers(signal?: AbortSignal): Promise<Driver[]> {
    const response = await fetch(this.apiUrl, { signal });
    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`Failed to load drivers: ${response.status}`);
    }

    return response.json() as Promise<Driver[]>;
  }
}