import {Component} from '@angular/core';
import {Link} from '../models/Link';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private myBirthDay: Date;
    public myAge: number;
    public myName: string;
    public myTitle: string;
    public myDescription: string;
    public myLinks: Link[];

    constructor() {
        this.myBirthDay = new Date(1990, 12, 14);
        this.myAge = this.calculateAge();
        this.myName = 'Patrick Jominet';
        this.myTitle = 'Software Engineer';
        this.myDescription = 'Full stack developer at Technology Partner, studied at University of Cologne, passionate Gamer and expert in many things';
        this.myLinks = [
            new Link('Stack Overflow', 'https://stackoverflow.com/story/pjominet', 'fab fa-stack-overflow'),
            new Link('Bitbucket', 'https://bitbucket.org/pjominet', 'fab fa-bitbucket'),
            new Link('GitHub', 'https://github.com/pjominet', 'fab fa-github'),
            new Link('Twitter', 'https://twitter.com/pjominet', 'fab fa-twitter'),
            new Link('Mail', 'mailto:jompa010@gmail.com', 'fa fa-envelope')
        ];
    }

    private calculateAge(): number {
        return Math.abs(new Date(Date.now() - this.myBirthDay.getTime()).getUTCFullYear() - 1970);
    }
}
