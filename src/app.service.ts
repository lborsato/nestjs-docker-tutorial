import { Injectable } from '@nestjs/common';

const IDENTITY = 'Fortis';
const ICON = 'Fortis';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

export interface Identity {
  name: string;
  icon: string;
  hasConfig: boolean;
  hasInfo: boolean;
}

@Injectable()
export class AppService {
  private movies: Movie[] = [
    { id: 1, name: 'Star Wars: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2019 },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getIdentity(): Identity {
    return {
      name: IDENTITY,
      icon: ICON,
      hasConfig: true,
      hasInfo: true,
    };
  }
}
