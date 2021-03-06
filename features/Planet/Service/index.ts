import { Planet } from 'Planet';

export interface PlanetService {
  browse(): Promise<Planet>;
}

export default class implements PlanetService {
  async browse(): Promise<Planet> {
    return { id: 11, name: '22', createdAt: 'asdfs'} as Planet;
  }
}
