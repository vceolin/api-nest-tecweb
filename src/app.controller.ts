import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('/v1/imagens')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':alimento')
  @ApiResponse({ status: 200, description: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Bananas_%28Alabama_Extension%29.jpg' })
  @ApiResponse({ status: 404, description: 'Image not found' })
  @ApiOperation({ summary: 'retorna o link de uma imagem solicitada por parâmetro' })
  async getFotoAlimento(@Param('alimento') alimento: string): Promise<string> {
    return await this.appService.getFotoAlimento(alimento);
  }
}
