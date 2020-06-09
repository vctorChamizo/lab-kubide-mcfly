import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';

import { CreateNoteDto } from './dto/note.dto';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  async createNote(@Body() note: CreateNoteDto, @Res() res) {
    const newNote = await this.noteService.createNote(note);
    return res.status(HttpStatus.CREATED).json(newNote);
  }
}
