import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNoteDto } from './dto/note.dto';
import { Note } from './interface/note.interface';

@Injectable()
export class NoteService {
  constructor(@InjectModel('Note') private noteModel: Model<Note>) {}

  async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = new this.noteModel(createNoteDto);
    return await note.save();
  }
}
