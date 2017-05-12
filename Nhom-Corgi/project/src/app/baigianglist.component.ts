import { Component, OnInit } from '@angular/core';
import { BaigiangService } from './services/baigiang.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'list-video-app',
    templateUrl: './baigianglist.component.html',
    providers: [BaigiangService]

})

export class BaigiangListComponent implements OnInit {
    public baigiang: any[];
    constructor(private baigiangService: BaigiangService) {

    }
    ngOnInit() {
        this.baigiangService.GetList().subscribe((response: any) => {
            this.baigiang = response;
            console.log(response);
        });
    }
}





