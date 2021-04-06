import { Component, OnInit } from '@angular/core';
import{Input, ChangeDetectorRef }  from  '@angular/core';
// import { IImage } from 'src/app/models/IImage';


@Component({
  selector: 'app-events-activities',
  templateUrl: './events-activities.component.html',
  styleUrls: ['./events-activities.component.scss']
})
export class EventsActivitiesComponent implements OnInit {

  items: Array<any> = []
  
  
  constructor(private cd: ChangeDetectorRef) {
   

  }
  ngAfterViewChecked() {

    this.cd.detectChanges();

}
  ngOnInit() {
    this.items = [
      { name: '../assets/image/news1.png', source:'https://research.northeastern.edu/autonomous-weapons-systems-the-utilize-artificial-intelligence-are-changing-the-nature-of-warfare-but-theres-a-problem-2/'},
      { name: '../assets/image/news2.png', source:'https://research.northeastern.edu/bioengineering-researcher-awarded-holman-prize-for-blind-ambition-takes-on-how-vaping-affects-lung-function-2/'},
      { name: '../assets/image/news3.png', source:'https://research.northeastern.edu/heres-what-cognitive-neuroscientists-can-learn-from-fear-this-halloween/'}, 
      { name: '../assets/image/news1.png', source:'https://research.northeastern.edu/autonomous-weapons-systems-the-utilize-artificial-intelligence-are-changing-the-nature-of-warfare-but-theres-a-problem-2/'},
      { name: '../assets/image/news2.png', source:'https://research.northeastern.edu/bioengineering-researcher-awarded-holman-prize-for-blind-ambition-takes-on-how-vaping-affects-lung-function-2/'},
      { name: '../assets/image/news3.png', source:'https://research.northeastern.edu/heres-what-cognitive-neuroscientists-can-learn-from-fear-this-halloween/'},
      { name: '../assets/image/news1.png', source:'https://research.northeastern.edu/autonomous-weapons-systems-the-utilize-artificial-intelligence-are-changing-the-nature-of-warfare-but-theres-a-problem-2/'},
      { name: '../assets/image/news2.png', source:'https://research.northeastern.edu/bioengineering-researcher-awarded-holman-prize-for-blind-ambition-takes-on-how-vaping-affects-lung-function-2/'},
      { name: '../assets/image/news3.png', source:'https://research.northeastern.edu/heres-what-cognitive-neuroscientists-can-learn-from-fear-this-halloween/'},
      { name: '../assets/image/news1.png', source:'https://research.northeastern.edu/autonomous-weapons-systems-the-utilize-artificial-intelligence-are-changing-the-nature-of-warfare-but-theres-a-problem-2/'},
      { name: '../assets/image/news2.png', source:'https://research.northeastern.edu/bioengineering-researcher-awarded-holman-prize-for-blind-ambition-takes-on-how-vaping-affects-lung-function-2/'},
      { name: '../assets/image/news3.png', source:'https://research.northeastern.edu/heres-what-cognitive-neuroscientists-can-learn-from-fear-this-halloween/'},    
    ]
  }

}
