import {Component, HostBinding} from '@angular/core';
import {NavItem} from './models/NavItem';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @HostBinding('class') componentCssClass;
    public navItems: NavItem[];

    constructor() {
        this.navItems = [
            new NavItem('Link 1', '/'),
            new NavItem('Link 2', '/'),
            new NavItem('Link 3', '/')
        ];
    }
}
