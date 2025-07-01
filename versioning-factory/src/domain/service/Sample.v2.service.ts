import { Injectable } from '@nestjs/common';
import { ISampleService } from './ISample.service';

@Injectable()
export class SampleV2Service implements ISampleService {
  constructor() {}

  async insert() {
    return 'Insert V2';
  }

  async select() {
    return 'Select V2';
  }

  async selectAll() {
    return 'Select All V2';
  }
}
