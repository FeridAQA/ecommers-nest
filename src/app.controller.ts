import { All, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";


@Controller()
@ApiTags('apps')
@ApiBearerAuth()
export class AppController {

  constructor(private appService:AppService){

  }

  @Get('/')
  mainPage(){
    return {mes:"main page an ecummers"}
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

  @Delete(':userID')
  DeleteId(@Param('userID')id:number){
    return{
      status:true,
      message: ` delete ${id}`
    }
  }

}