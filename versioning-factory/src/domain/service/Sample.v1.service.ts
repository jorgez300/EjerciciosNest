import { Injectable } from '@nestjs/common';
import { ISampleService } from './ISample.service';

@Injectable()
export class SampleV1Service implements ISampleService {
  constructor() {}

  async insert() {
    return 'Insert V1';
  }

  async select() {
    return 'Select V1';
  }

  async selectAll() {
    return 'Select All V1';
  }
}
