import { Component, OnInit } from "@angular/core";
import { ListPicker } from "ui/list-picker";
import { ActivatedRoute } from "@angular/router";
import { SetupItemViewArgs } from "nativescript-angular";

import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: "OneApprove-product",
    moduleId: module.id,
    templateUrl: "./product.component.html",
    styleUrls: ["./auth.component.css"]
})
export class ProductsComponent implements OnInit {
    id = 0;
    products: Product[];
    constructor(private itemProduct: ProductService, private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.products = this.itemProduct.getProducts();
        this.id = this.route.snapshot.params["id"];
    }

    onSetupItemView(args: SetupItemViewArgs) {
        console.log(args.index);
        console.log("id = " + this.id);
        args.view.context.select = (args.index + 1 == this.id);
    }
}