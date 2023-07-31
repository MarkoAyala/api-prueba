import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://marko-prueba:apiPrueba@api-prueba.7r6vct2.mongodb.net/prueba?retryWrites=true&w=majority'),
    CatsModule,
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}