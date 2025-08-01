import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { WxDataService } from './app/wx-data/wx-data.service';
import { inject } from '@angular/core';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

const weatherService = inject(WxDataService);



