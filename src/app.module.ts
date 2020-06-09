import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note/note.module';

@Module({
  imports: [NoteModule, MongooseModule.forRoot('mongodb://localhost/macfly')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
