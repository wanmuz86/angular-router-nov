import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  // Get the reference of the router (to navigate user)
  const router = inject(Router);
  
  // If user has a token
  // TODO - Verify the token first
  // Then I will allow user to access the page (return true)
  if (localStorage.getItem("token") != null){
    return true;
  }
  // If user is not logged in, then redirect to '/' /home
  return router.parseUrl('/');
  
};
