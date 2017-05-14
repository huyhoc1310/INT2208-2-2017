import {Component, OnInit} from '@angular/core';
import {ListbaigiangService } from "./services/listbaigiang.service";

@Component({
    selector: 'home',
    templateUrl: 'baigiangtoan.component.html',
    providers: [ListbaigiangService]
})

export class BaigiangtoanComponent implements OnInit{
    public listbaigiang: any[];
    constructor(private listbaigiangService: ListbaigiangService) {

    }
    ngOnInit() {
        this.listbaigiangService.GetList().subscribe((response: any) => {
            this.listbaigiang = response;
            console.log(response);
        });
    }
}
    

