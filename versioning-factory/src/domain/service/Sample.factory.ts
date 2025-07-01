import { Injectable } from '@nestjs/common';
import { SampleV1Service } from './Sample.v1.service';
import { SampleV2Service } from './Sample.v2.service';
import { ISampleService } from './ISample.service';

@Injectable()
export class SampleFactory {
  constructor(
    private readonly _serviceV1: SampleV1Service,
    private readonly _serviceV2: SampleV2Service,
  ) {}

  async create(v: string): Promise<ISampleService> {
    switch (v) {
      case 'v1':
        return this._serviceV1;
      case 'v2':
        return this._serviceV2;
      default:
        throw new Error(`Version ${v} not supported`);
    }
  }
}
