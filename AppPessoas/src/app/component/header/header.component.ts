import { Component } from '@angular/core';
import { ThemeService } from 'src/app/service/button-theme/button-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}
  themeLabel: string = 'Light Mode';
  changeTheme(theme: string) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode'); // Adiciona classe no body
      document.body.classList.remove('light-mode');
      this.themeLabel = 'Dark Mode'; // Altera o nome do botão
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      this.themeLabel = 'Light Mode';
    }
    this.themeService.toggleTheme(); // Chama o método do serviço para alternar o tema}
}
}
