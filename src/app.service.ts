import { Injectable } from '@nestjs/common';
import { Constants } from './utils/Constants';

@Injectable()
export class AppService {
  getHello(): string {
    return `Welcome ${Constants.APP_NAME}`;
  }
}
