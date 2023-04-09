import { Component } from '@angular/core';
import { Product } from '../common/Product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  products: Product[] = [];
  
  searchProductByName(event: Event) {
    event.preventDefault()
    console.log("Hi from search")
  }
}
