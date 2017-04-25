import { Component } from '@angular/core';
import { OnlineTestService} from './services/onlinetest.service';
@Component({
    selector:'my-exam',
    templateUrl:'onlinetest.component.html',
    providers: [OnlineTestService]
})
export class OnlineTestComponent{
    public questions: Object[];
    constructor(private onlinetestService: OnlineTestService){

    }
    ngOnInit(){
        this.onlinetestService.GetList().subscribe((response:any)=>{
            this.questions=response;
        });
    }
    countCorrectAnswer: number;
    saveStatus(question: Object, value:String) {
      question['option'] = value;
    }
    saveValue(question: Object, value: String){
      question['option'] = value;
    }
    check() {
      this.countCorrectAnswer = 0;

      for (let i = 1; i < 51; i ++){
        if(this.questions[i]['option'] == this.questions[i]['correct_answer']){
          this.countCorrectAnswer++;
          this.questions[i]['status'] = "Right";
        }else{
          this.questions[i]['status'] = "Wrong! The correct answer is " + this.questions[i]['correct_answer'];
        }
      }
      console.log('dmmay');
    }
}  