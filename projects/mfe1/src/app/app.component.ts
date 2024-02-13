import {Component, OnInit} from '@angular/core';
import {Chart, ChartModule} from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import HC_gantt from 'highcharts/modules/gantt';
HC_gantt(Highcharts)

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ChartModule],
})
export class AppComponent implements OnInit {
  protected chart: Chart;

  private chartOptions: Highcharts.Options = {
    boost: {
      enabled: false,
    },
    chart: {
      backgroundColor: '#fff',
      plotBorderColor: 'red',
      reflow: false, // disable default reflow on resize
      spacingLeft: 30,
      spacingRight: 30,
      spacingTop: 30,
    },
    title: {
      text: null,
    },
    legend: {
      align: 'center',
      verticalAlign: 'top',
      margin: 25,
      itemStyle: {
        // color: '#fff',
        fontWeight: 'normal',
        opacity: 1,
        fontSize: '0.875rem',
        textOverflow: 'ellipsis',
      },
      itemHoverStyle: {
        color: 'red',
        opacity: 1,
      },
      itemHiddenStyle: {
        // color: '#ccc',
        opacity: 0.35,
        textDecoration: 'none',
      },
    },
    credits: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: '0.875rem',
      },
    },
    series: [{
      type: 'gantt',
      name: 'Project 1',
      data: [{
        name: 'Start prototype',
        start: Date.UTC(2014, 10, 18),
        end: Date.UTC(2014, 10, 25)
      }, {
        name: 'Develop',
        start: Date.UTC(2014, 10, 20),
        end: Date.UTC(2014, 10, 25)
      }, {
        name: 'Run acceptance tests',
        start: Date.UTC(2014, 10, 23),
        end: Date.UTC(2014, 10, 26)
      }, {
        name: 'Test prototype',
        start: Date.UTC(2014, 10, 27),
        end: Date.UTC(2014, 10, 29)
      }]
    }]
  };

  ngOnInit(): void {
    this.chart = new Chart(this.chartOptions);
  }
}
