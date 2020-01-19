import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Profile} from '../models/Profile';
import * as data from '../assets/data/profile.json';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {popup, singlePopup} from './app.animations';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [popup, singlePopup]
})
export class AppComponent implements OnInit {

    public profile: Profile;
    public shareUrl: string;
    public showShare: boolean;
    public showToast: boolean = false;

    public get isDesktop() {
        return this.deviceService.isDesktop();
    }

    constructor(private modal: NgbModal,
                private deviceService: DeviceDetectorService,
                private titleService: Title) {
        this.profile = (data as any).default;
        this.showShare = false;
    }

    public getFullName(): string {
        return this.profile.name + ', ' + Math.abs(new Date(Date.now() - new Date(Date.parse(this.profile.dateOfBirth)).getTime()).getUTCFullYear() - 1970);
    }

    ngOnInit(): void {
        this.titleService.setTitle(this.getFullName());
        this.shareUrl = window.location.href;
    }

    public showQRCode(modalContent) {
        this.modal.open(modalContent, {size: 'sm', centered: true});
    }
}
