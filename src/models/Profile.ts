import {Link} from './Link';

export interface Profile {
    dateOfBirth: string;
    name: string;
    title: string;
    description: string;
    links: Link[];
}
