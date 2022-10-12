import { Component } from '@angular/core';

import { products } from '../products';
import { MyhttpcallerService, MyResult } from '../myhttpcaller.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  beResults: MyResult[] = [];

  constructor(private callerService: MyhttpcallerService) {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  myHttpCall() {
    this.callerService.doGet().subscribe((res) => {
        res.forEach(element => {
           console.log(element.id+" - "+element.name);
        });
        this.beResults = res;
        //window.alert('sciaccato ' + JSON.stringify(res));
    });
  }
}
