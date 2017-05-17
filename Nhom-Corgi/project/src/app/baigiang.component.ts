import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaigiangService } from "./services/baigiang.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) { }
	transform(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
@Component({
	selector: 'video-app',
	templateUrl: './baigiang.component.html',
	providers: [BaigiangService]
})

export class BaigiangComponent implements OnInit, OnDestroy {
	public _id: number;
	public subscription: Subscription;
	public bg: any;
	
	constructor(private router: Router, private activatedRoute: ActivatedRoute, public baigiangService: BaigiangService) {

	}
	ngOnInit() {
		this.subscription = this.activatedRoute.params.subscribe(params => {
			this._id = params['id'];
		});
		this.baigiangService.GetSingle(this._id).subscribe((data) => {
			this.bg = data;
		});
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}


}