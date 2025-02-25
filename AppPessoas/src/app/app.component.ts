import { AppServiceService } from 'src/app/service/app-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppPessoas';


  constructor(private appServiceService: AppServiceService) {}
}
