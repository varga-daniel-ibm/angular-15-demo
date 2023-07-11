import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-playground',
  templateUrl: './data-binding-playground.component.html',
  styleUrls: ['./data-binding-playground.component.scss']
})
export class DataBindingPlaygroundComponent {
  favoriteFood: string = 'Sushi';
  favoriteCity: string = 'Barcelona';

  changeFavoriteFood(): void {
    this.favoriteFood = this.favoriteFood === 'Sushi' ? 'Pizza' : 'Sushi';
  }

  onFavoriteFoodInputChange(event: Event): void {
    this.favoriteFood = (event.target as HTMLInputElement).value;
  }

  onChangeFavoriteCountry(favoriteCountry: string): void {
    console.log("Favorite Country:", favoriteCountry)
  }
}
