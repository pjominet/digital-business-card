import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Profile} from '../models/Profile';
import * as data from '../assets/data/profile.json';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

    public profile: Profile;
    public qrUrl: string;
    public showShare: boolean;

    constructor(private modal: NgbModal) {
        this.profile = (data as any).default;
        this.showShare = false;
    }

    public getAge(dateOfBirth: string): number {
        return Math.abs(new Date(Date.now() - new Date(Date.parse(dateOfBirth)).getTime()).getUTCFullYear() - 1970);
    }

    ngOnInit(): void {
        this.qrUrl = window.location.href;
    }

    public openModal(modalContent) {
        this.modal.open(modalContent, {size: 'sm', centered: true});
    }
}
