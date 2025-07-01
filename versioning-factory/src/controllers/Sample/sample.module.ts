import { Module } from '@nestjs/common';

import { SampleController } from './sample.controller';
import { SampleFactory } from 'src/domain/service/Sample.factory';
import { SampleV1Service } from 'src/domain/service/Sample.v1.service';
import { SampleV2Service } from 'src/domain/service/Sample.v2.service';

@Module({
  controllers: [SampleController],
  providers: [SampleFactory, SampleV1Service, SampleV2Service],
})
export class SampleModule {}
