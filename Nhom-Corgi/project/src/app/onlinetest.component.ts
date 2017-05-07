import { Component } from '@angular/core';
import { OnlineTestService } from './services/onlinetest.service';
@Component({
  selector: 'my-exam',
  templateUrl: 'onlinetest.component.html',
  providers: [OnlineTestService]
})
export class OnlineTestComponent {
  questions: Object[];
  correct: number;

  show = false;
  constructor(private onlinetestService: OnlineTestService) {

  }
  ngOnInit() {
    this.onlinetestService.GetList().subscribe((response: any) => {
      this.questions = response;
    });
  }

  saveStatus(question: Object, choice: String) {
    question['choice'] = choice;
  }

  check() {
    this.correct = 0;
    for (let i = 0; i < this.questions.length; i++) {
       console.log(this.questions[i]['choice']);
      if (this.questions[i]['choice'] == this.questions[i]['correct_answer']) {
       
        this.correct++;
        this.questions[i]['status'] = "correct";
      } else {
        this.questions[i]['status'] = "incorrect";
      }
    }
    this.show = true;
  }
}
