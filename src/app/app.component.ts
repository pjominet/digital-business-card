import {Component} from '@angular/core';
import {Profile} from '../models/Profile';
import * as data from '../assets/data/profile.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public profile: Profile;

    constructor() {
        this.profile = (data as any).default;
    }

    public getAge(dateOfBirth: string): number {
        return Math.abs(new Date(Date.now() - new Date(Date.parse(dateOfBirth)).getTime()).getUTCFullYear() - 1970);
    }
}
