import { Controller, Get, Post, Req, Version } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { SampleFactory } from 'src/domain/service/Sample.factory';

@ApiTags('LogsController')
@Controller('SampleController')
export class SampleController {
  constructor(private readonly sampleFactory: SampleFactory) {}

  @ApiHeader({
    name: 'X-Version',
    description: 'Version APP',
  })
  @Post('insert')
  async insert(@Req() request: Request) {
    const v = request.headers['x-version'] || 'v1';

    const _service = await this.sampleFactory.create(v);

    return _service.insert();
  }

  @ApiHeader({
    name: 'X-Version',
    description: 'Version APP',
  })
  @Get('select')
  async select(@Req() request: Request) {
    const v = request.headers['x-version'] || 'v1';
    const _service = await this.sampleFactory.create(v);

    return _service.select();
  }

  @ApiHeader({
    name: 'X-Version-Cont',
    description: 'Version APP',
  })
  @Version('1')
  @Get('selectAll')
  async selectAllV1() {
    const _service = await this.sampleFactory.create('v1');

    return _service.selectAll();
  }

  @ApiHeader({
    name: 'X-Version-Cont',
    description: 'Version APP',
  })
  @Version('2')
  @Get('selectAll')
  async selectAllV2() {
    const _service = await this.sampleFactory.create('v2');

    return _service.selectAll();
  }
}
