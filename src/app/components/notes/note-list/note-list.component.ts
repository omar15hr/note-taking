import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Note {
  title: string;
  tags: string[];
  date: string;
}

@Component({
  selector: 'note-list',
  imports: [MatIconModule],
  templateUrl: './note-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteListComponent {
  notes: Note[] = [
    {
      title: 'All notes',
      tags: ['Dev', 'React'],
      date: '29 Oct 2024'
    },
    {
      title: 'Japan Travel Planning',
      tags: ['Travel', 'Personal'],
      date: '28 Oct 2024'
    },
    {
      title: 'Favorite Pasta Recipes',
      tags: ['Cooking', 'Recipes'],
      date: '27 Oct 2024'
    },
    {
      title: 'Weekly Workout Plan',
      tags: ['Dev', 'React'],
      date: '25 Oct 2024'
    },
  ];

}
