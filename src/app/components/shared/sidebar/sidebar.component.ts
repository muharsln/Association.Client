import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarOpen: boolean = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  isSubmenuOpen: string | null = null;

  toggleSubmenu(menu: string): void {
    this.isSubmenuOpen = this.isSubmenuOpen === menu ? null : menu;
  }

  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }
}
