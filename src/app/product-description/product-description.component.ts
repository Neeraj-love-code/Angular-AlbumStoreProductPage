import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album;
  id: number;

  constructor(private _productService : ProductService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this._productService.getAlbum(Number.parseInt(this.activeRoute.snapshot.paramMap.get('id')))
      .subscribe(response => this.albumInfo = response);

  }

}
