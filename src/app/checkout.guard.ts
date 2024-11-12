import { CanDeactivateFn } from '@angular/router';
import { CartComponent } from './cart/cart.component';

// I have a CanDeactivateGuard
// I need to specfiy where it will be called <>
// <CartComponent>
export const checkoutGuard: CanDeactivateFn<CartComponent> = (component, currentRoute, currentState, nextState) => {
  const confirm = window.confirm("You still have item in Cart, confirm to leave?")
  // true or false
  // true - user will leave
  // false - user will stay
  return confirm;
};
