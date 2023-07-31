import { Controller, Post, Body, Get, Param, Put , Delete , HttpStatus, HttpCode} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './dtos/cats.dtos';
@Controller('/cats')
export class CatsController {
    constructor(private catsService: CatsService){}
    
    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    async getCats(){
        return this.catsService.findAll();
    }
    
    @Get('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    async getOne(@Param('id') id:string){
        return this.catsService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() newCat: CatDto){
        return this.catsService.create(newCat);
    }

    @Put('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param('id') id: string , @Body() payload:CatDto){
        return this.catsService.updateOne(id , payload);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    delete(@Param('id') id : string){
        return this.catsService.deleteOne(id);
    }
}
