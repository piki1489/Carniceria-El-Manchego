import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  products: any[] = [];
  responsiveOptions: any[] = [];

  getSeverity(status: string): string {
    // Implementa la lógica para determinar la severidad según el estado (status)
    return 'alguna_severidad';
  }

  ngOnInit(): void {
    for (let i = 1; i <= 11; i++) {
      this.products.push({
        image: `./assets/images/${i}.jpg`,
        // Otros datos para cada imagen si los tienes
        name: `Producto ${i}`,
        price: 10 * i,
        inventoryStatus: 'En stock',
      });
    }
  }
}
