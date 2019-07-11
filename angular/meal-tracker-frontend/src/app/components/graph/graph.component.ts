import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  providers: [StatsService]
})
export class GraphComponent implements OnInit {
  @Input("data") dataPoints: Array<Object>;
  @Input() title: String;
  @Input() type: String;

  // dataTemp = [{"y":14.25,"label":"Breakfast"},{"y":1.9975,"label":"Lunch"},{"y":0,"label":"Dinner"},{"y":0,"label":"Snack"}]

  ngOnInit() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: this.title
      },
      axisY:{
        includeZero: false,
        title: "Price (USD)"
      },
      data: [{        
        type: this.type,       
        dataPoints: this.dataPoints
      }]
    });
    chart.render();
    }
}
