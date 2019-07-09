import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-time-graph',
  templateUrl: './time-graph.component.html',
  styleUrls: ['./time-graph.component.css'],
  providers: [StatsService]
})
export class TimeGraphComponent implements OnInit {
  meals = [];

  constructor(private api: StatsService) { 
      var timeFrame = {startDate: new Date(2019, 1, 1), endDate: new Date(2019, 12, 31)};
      this.api.getMealsByTimeFrame(timeFrame).subscribe(
        data => {
          console.log(data);
          this.meals = data.meals;
          console.log(this.meals);
        },
        error => {
          alert(JSON.stringify(error.error));
        }
      )
  }

  ngOnInit() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: "Meals Organized by Time Frame"
      },
      axisY:{
        includeZero: false
      },
      data: [{        
        type: "line",       
        dataPoints: [
          { y: 450 },
          { y: 414},
          { y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          { y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }]
    });
    chart.render();
    }

    getMealsByTimeFrame = (startDate, endDate) => {
      var timeFrame = {startDate, endDate};
      console.log(timeFrame.startDate)
      console.log(timeFrame.startDate.getDate())
      this.api.getMealsByTimeFrame(timeFrame).subscribe(
        data => {
          console.log(data);
          this.meals = data.meals;
        },
        error => {
          alert(JSON.stringify(error.error));
        }
      )
    }

}
