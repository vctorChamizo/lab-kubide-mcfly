import { Controller, Post, Body, HttpStatus, Res, Get } from '@nestjs/common';

import { CreateNoteDto } from './dto/note.dto';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get(':id')
  async getNote(@Param('id') id: String, @Res() res) {
    const note = await this.noteService.getNote(id);
    return res.status(HttpStatus.OK).json(note);
  }

  @Get()
  async getNotes(@Res() res) {
    const notes = await this.noteService.getNotes();
    return res.status(HttpStatus.OK).json(notes);
  }

  @Post()
  async createNote(@Body() note: CreateNoteDto, @Res() res) {
    const newNote = await this.noteService.createNote(note);
    return res.status(HttpStatus.CREATED).json(newNote);
  }
}
