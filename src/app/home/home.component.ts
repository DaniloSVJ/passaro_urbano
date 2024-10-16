import { Component } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offers } from '../shared/offers.module';
import { CommonModule } from '@angular/common'; // Importar o CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [OffersService],
})
export class HomeComponent {
  public offers!: Offers[];

  constructor(private offersServices: OffersService) {}

  ngOnInit() {
    this.offers = this.offersServices.getOffers();
  }
}
