import { Injectable } from '@nestjs/common';

const IDENTITY = 'Fortis';
const ICON = 'Fortis';
const DEMO_URL = 'https://fiddle.sencha.com';
const HELLO_URL = 'http://microservice.local-dev.goboomtown.com:3000/hello';

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

export interface Data {
  url: string;
}

export interface Hello {
  msg: string;
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

  getConfig(): Data {
    return {
      url: DEMO_URL,
    };
  }

  getInfo(): Data {
    return {
      url: DEMO_URL,
    };
  }

  getHello(): Hello {
    return {
      msg: 'Hello, World!',
    };
  }
}
