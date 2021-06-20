import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openProject';
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  cards:any[];
  defaultElevation = 2;
  raisedElevation = 8;
  selected = 'option2';
  checked:boolean=true;
  enable:boolean=true;

  constructor() {
    this.cards = [
      {title:'Quick cash disbursement',
      subtitle:'Get terms loans that your business needs within 72 hrs',
      imageUrl:'/assets/icons/Get_Paid_Instantly.png'
    },
    {title:'Low-interest rate',
    subtitle:'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
    imageUrl:'/assets/icons/Low_interest_rate.png'
  },
  {title:'Zero Paperwork',
  subtitle:'Get started instantly by submitting only your basic details & bank statements',
  imageUrl:'/assets/icons/Secure_Payments.png'
},
{title:'Ace your business finances',
subtitle:'Manage banking, accounting & everything in between, on one platform',
imageUrl:'/assets/icons/freelancer_feature_icon_6@1.5x.png'
},
{title:'Loans to fight COVID-19',
subtitle:'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
imageUrl:'/assets/icons/Covid.png'
},]
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  toggle(evt:any){
    // console.log(evt)
    this.enable = !this.enable

  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}
