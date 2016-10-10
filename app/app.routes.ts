// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { orderRoutes }    from './order/order.routes';
import { deliveryRoutes }    from './deliverylist/delivery-list.routes';
import { contactsRoutes }    from './contacts/contacts.routes';
import { orderListRoutes } from './orderlist/order-list.routes';
// import { filtersRoutes }    from './filters/filters.routes';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/order',
    pathMatch: 'full'
  },
  ...orderRoutes,
  ...deliveryRoutes,
  ...contactsRoutes,
  ...orderListRoutes
  // ...filtersRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
