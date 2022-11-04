import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
})
export class CafeListComponent implements OnInit {
  cafes: Cafe[] = [];
  totalCafesOrigen: number = 0;
  totalCafesBlend: number = 0;

  constructor(private cafeService: CafeService) {}

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => (this.cafes = cafes));
  }

  getTotalCafesOrigen() {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.totalCafesOrigen = cafes.filter(
        (cafe) => cafe.tipo === 'Café de Origen'
      ).length;
    });
  }

  getTotalCafesBlend() {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.totalCafesBlend = cafes.filter(
        (cafe) => cafe.tipo === 'Blend'
      ).length;
    });
  }

  ngOnInit(): void {
    this.getCafes();
    this.getTotalCafesOrigen();
    this.getTotalCafesBlend();
  }
}
