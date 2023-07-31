import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsApiController } from './catsApi.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule , HttpService } from '@nestjs/axios';
import { Cats , CatsSchema } from './entities/cats.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
        name:Cats.name,
        schema:CatsSchema,
    },
  ]),
  HttpModule
  ],
  controllers: [CatsController , CatsApiController],
  providers: [CatsService]
})
export class CatsModule {}
