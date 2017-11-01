import "angular";
import "angular-sanitize";
import "angular-ui-router";
import "material-design-lite";
import "./style.css";
import { platformBrowserDynamic } from 'angular-ts-decorators';
import { AppModule } from './main';

platformBrowserDynamic().bootstrapModule(AppModule);