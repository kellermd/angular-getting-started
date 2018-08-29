import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]}
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }
