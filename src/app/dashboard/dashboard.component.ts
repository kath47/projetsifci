import { Component, ViewChild } from "@angular/core";
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor() {
    
}

ngOnInit(){

  new Chart("mychart", {
    type: 'bar',
    data: {
      labels: ['Historique', 'PV Constat', 'Ouv. Pub', 'Clôture Pub', 'approuvés', 'Validés', 'Arrêtés'],
      datasets: [{
        label: 'Nombre',
        data: [3255, 1850, 826,703, 730, 1663, 2293],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(0, 0, 255, 1)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(128, 168, 27)'
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
      labels: ['Total CF', 'CF validé', 'CF approuvé', 'Green', 'Purple', 'demande'],
      datasets: [{
        label: 'Certificats',
        data: [11589, 5600, 2960, 2100, 1620,12886],
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


