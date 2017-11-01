import { Component } from 'angular-ts-decorators';
const template = require('./chart.component.html');
@Component({
    selector: 'chart',
    template,
})
export class ChartComponent {
    private title: string = 'Hello Webpack'
}
