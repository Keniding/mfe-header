import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../shared/interfaces/navigation.interface';
import { AwesomeService } from 'awesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  #sharedService = inject(AwesomeService);
  message = this.#sharedService.sharedMessage;

  navigationItems: NavigationItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/products' },
    { label: 'Servicios', path: '/services' },
    { label: 'Contacto', path: '/contact' }
  ];

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  updateSignalMessage(): void {
    this.#sharedService.sharedMessage.set('¡Mensaje actualizado desde el header!');
  }
}
