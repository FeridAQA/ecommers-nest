import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";


@Controller()
export class AppController {

  constructor(private appService:AppService){

  }

  @Get('/')
  mainPage(){
    return "main page an ecummers"
  }

  @Get('/v2')
  mainV2(){
    return {
      message: "main page v2 an ecummers"
    }
  }
  
  @Get('/hello')
  sayHallo(){
    return this.appService.sayHallo()
  }
  @Get('/hello/:name')
  sayHalloToName(@Param('name') name:string){
    return {
      message: `hello ${name} world`
    }
  }

}