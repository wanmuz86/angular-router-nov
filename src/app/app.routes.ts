import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    
    {
        path:'products/:id',
        component:ProductComponent,
    },
    {
        path:'cart',
        component:CartComponent
    },
    {
        path:'', 
        component:ProductListComponent,

    },
    {
        path:'**',
        component:PageNotFoundComponent
    }

];
