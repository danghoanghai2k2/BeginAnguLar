import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ChildComponent } from './app/child/child.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
