import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { FormComponent } from './components/form/form.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { FormComponentModule } from './components/form/form.component-module';
import { FormServiceModule } from './services/form.service-module';
import { ProductComponentModule } from './components/product/product.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list', component: ProductsComponent }, { path: 'form', component: FormComponent }, { path: 'list/:id', component: ProductComponent }]), ProductsComponentModule, ProductsServiceModule, FormComponentModule, FormServiceModule, ProductComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
