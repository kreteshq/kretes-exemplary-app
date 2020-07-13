import { Planet } from 'Planet';

export interface PlanetServiceInterface {
  browse(): Promise<Planet>;
}

export class PlanetService implements PlanetServiceInterface {
  browse(): Promise<Planet> {
    throw new Error("Method not implemented.");
  }
}
