import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

interface MenuItem {
  title: string;
  path: string;
  fontIcon: string;
}

interface Tags {
  path: string;
  title: string;
}

@Component({
  selector: 'sidebar',
  imports: [MatIconModule],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  isCollapsed = false;

  menuItems: MenuItem[] = [
    {
      title: 'All notes',
      path: '/',
      fontIcon: 'home',
    },
    {
      title: 'Archived Notes',
      path: '/',
      fontIcon: 'archive',
    },
  ];

  tags: Tags[] = [
    {
      title: 'Cooking',
      path: '',
    },
    {
      title: 'Dev',
      path: '',
    }
  ];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
