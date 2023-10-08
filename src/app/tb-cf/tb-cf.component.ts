import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tb-cf',
  templateUrl: './tb-cf.component.html',
  styleUrls: ['./tb-cf.component.scss']
})
export class TbCfComponent {

  constructor() {
    
  }
  
  ngOnInit(){
  
    new Chart("mychart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    new Chart("chart2", {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'green'],
        datasets: [{
          label: 'Certificats',
          data: [25, 19, 22, 8, 4,10],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  }
}
