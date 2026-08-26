import { 
  Component,
  ElementRef,
  input,
  viewChild,
  afterNextRender,
  effect
 } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class Chart {
  chartEl = viewChild.required<ElementRef<HTMLDivElement>>('chartEl');

  // Accept data as a signal input
  data = input<number[]>([120, 200, 150, 80, 70, 110, 130]);

  private chart?: echarts.ECharts;

  constructor() {
    // Initialize the chart once the view is in the DOM
    afterNextRender(() => {
      this.chart = echarts.init(this.chartEl().nativeElement);
      this.setOption();

      window.addEventListener('resize', () => this.chart?.resize());
    });

    // Re-render whenever the input data signal changes
    effect(() => {
      this.data(); // register dependency
      this.chart?.setOption(this.buildOption());
    });
  }

  private setOption() {
    this.chart?.setOption(this.buildOption());
  }

  private buildOption(): echarts.EChartsOption {
    return {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: { type: 'value' },
      series: [
        {
          data: this.data(),
          type: 'bar',
        },
      ],
    };
  }
}
