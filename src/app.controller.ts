import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get() 
  getHelloo(){
    return {
      message: 'frase',
      date: new Date().toLocaleDateString()
    };
  }

}
