import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
interface pricing_v{
  Tier : string,
  price : number,
  not_muted : string[],
  muted : string[]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_assn_day2';
  versions : Array<pricing_v> = [{
    'Tier' :  "free",
    'price' :  0,
    
    'not_muted' : ["Single User",
    "5GB Storage",
    "Unlimited Public Projects",
    "Community Access"],

    'muted' :  ["Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports"]
  },
  {
    'Tier' : "pro",
    'price' : 20,
    'not_muted' : ["5 Users",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain"],
    'muted' : ["Monthly Status Reports"]

  },
  {
    'Tier' : "plus",
    'price' : 49,
    'not_muted' : ["Unlimited Users",
    "150GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Unlimited Free Subdomains",
    "Monthly Status Reports"],
    'muted' : []

  }
]
 
}

