import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { Note } from './interface/note.interface';

describe('NoteController', () => {
  let noteController: NoteController;
  let noteService: NoteService;

  beforeEach(() => {
    noteService = new NoteService(null);
    noteController = new NoteController(noteService);
  });

  describe('createNote', () => {
    it('should return a note', async () => {
      const result = new Promise<Note>(resolve => resolve());

      jest.spyOn(noteService, 'createNote').mockImplementation(() => result);

      expect(await noteController.createNote(null, null)).toBe(result);
    });
  });
});
