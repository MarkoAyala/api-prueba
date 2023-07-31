import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatDto } from './dtos/cats.dtos';
import { Cats } from './entities/cats.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
    constructor(
        @InjectModel(Cats.name) private catsModel : Model<Cats>
    ){}

    async findOne(id:string){
        return this.catsModel.findById(id);
    }

    async findAll(){
        return this.catsModel.find();
    }

    async create(newCat: CatDto){
        const cat = new this.catsModel(newCat);
        return cat.save();
    }

    async updateOne(id:string , cat:CatDto){
        return this.catsModel.findByIdAndUpdate(id , cat , {new:true});
    }

    async deleteOne(id:string){
        return this.catsModel.findByIdAndDelete(id);
    }
}
