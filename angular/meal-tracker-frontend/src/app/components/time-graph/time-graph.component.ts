import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-time-graph',
  templateUrl: './time-graph.component.html',
  styleUrls: ['./time-graph.component.css'],
  providers: [StatsService]
})
export class TimeGraphComponent {
  meals = [];
  months = {};
  dataPoints = [];

  constructor(private api: StatsService) {
    var jun = { startDate: new Date(2019, 6, 1), endDate: new Date(2019, 7, 1) };
    let month1 = new Promise((resolve, reject) => {
      this.api.getMealsByTimeFrame(jun).subscribe(
        data => {
          console.log(data);
          this.months['jun'] = data.stats;
          resolve();
        },
        error => {
          alert(JSON.stringify(error.error));
        }
      )
    })
    let month2 = new Promise((resolve, reject) => {
      var july = { startDate: new Date(2019, 7, 1), endDate: new Date(2019, 8, 1) };
      this.api.getMealsByTimeFrame(july).subscribe(
        data => {
          this.months['july'] = data.stats;
          console.log(this.months);
          console.log(this.months['jun']);
          resolve();
        },
        error => {
          alert(JSON.stringify(error.error));
        }
      )
    });

    let promises = [month1, month2]

    Promise.all(promises).then((result) => {
      this.dataPoints.push({ "y": parseInt(this.months['jun'].avgPrice), "label": "June" }, { "y": parseInt(this.months['july'].avgPrice), "label": "July" });
      console.log(this.dataPoints);
    })
    .then(() => {
      var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2",
        title: {
          text: "Meals Organized by Time Frame"
        },
        axisY: {
          includeZero: false
        },
        data: [{
          type: "line",
          dataPoints: this.dataPoints
        }]
      });
      chart.render();
    })
  }

  getMealsByTimeFrame = (startDate, endDate) => {
    var timeFrame = { startDate, endDate };
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
