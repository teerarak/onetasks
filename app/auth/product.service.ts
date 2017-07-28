import { Injectable } from "@angular/core";

import { Product } from "./product";

@Injectable()
export class ProductService {
    private products = new Array<Product>(
        { id: 1, name: "on.lk" },
        { id: 2, name: "ploy.plus" },
        { id: 3, name: "builk" },
        { id: 4, name: "jublili" },
        //{ id: 5, name: "on.lk" },
        //{ id: 6, name: "ploy.plus" },
        //{ id: 7, name: "builk" },
        //{ id: 8, name: "jublili" },
        //{ id: 9, name: "on.lk" },
        //{ id: 10, name: "ploy.plus" },
        //{ id: 11, name: "builk" },
        //{ id: 12, name: "jublili" },
        //{ id: 13, name: "on.lk" },
        //{ id: 14, name: "ploy.plus" },
        //{ id: 15, name: "builk" },
        //{ id: 16, name: "jublili" },
      );

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.filter(product => product.id === id)[0];
    }
}
