import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    
    {
        path:'products/:id',
        component:ProductComponent,
    },
    {
        path:'cart',
        component:CartComponent,
        canActivate:[authGuard] // Only logged in user (the with token)
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
