import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  // Inject it to the component
  // Create and intialize the router
  // router =  Router()
  
  id:string = ""
  
  constructor(private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  buyNow(){
    // Call APi or something

    // Redirect to cart page
    // We will router.navigate coming from @angular/router
    this.router.navigate(['/cart']);

  }
}
