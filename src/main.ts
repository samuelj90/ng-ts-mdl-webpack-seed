import { NgModule } from 'angular-ts-decorators';
import { AppComponent } from './components/app/app.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  id: 'AppModule',
  imports: [
    'ui.router',
    'ngSanitize',
  ],
  declarations: [
    AppComponent,
    ChartComponent
  ]
})
export class AppModule {
  static config($stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: angular.ILocationProvider) {
    'ngInject';
    $stateProvider.state('index', {
      url: '',
      component: 'app'
    }).state('index.app', {
      url: '/hello',
      component: 'chart'
    });
    $urlRouterProvider.otherwise(function () { return { state: 'index.app' } });
    $locationProvider.html5Mode(true);
  }
  static run($window: ng.IWindowService, $q: ng.IQService) {
    'ngInject';
    $window.Promise = $q;
  }
}
