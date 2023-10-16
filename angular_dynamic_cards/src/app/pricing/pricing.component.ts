import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  @Input() Tier : string= "";
  @Input() price : number = 0;
  @Input() not_muted_list : string[]= [];
  @Input() muted_list : string[] = [];
}
