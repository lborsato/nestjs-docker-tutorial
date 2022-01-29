import { Injectable } from '@nestjs/common';

const IDENTITY = 'Fortis';
const ICON = 'Fortis';
const DEMO_URL = 'https://fiddle.sencha.com';
const HELLO_URL =
  'http://microservice.local-dev.goboomtown.com:3000/helloworld.html';

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

  getHello(): string {
    return 'Hello World!';
  }
}
