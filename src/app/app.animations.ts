import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

export const popup = trigger('popupAnimation', [
    // Transition from any state to any state
    transition('* => *', [
        // Initially all items are not visible
        query(':enter', style({opacity: 0}), {optional: true}),

        // Each item will appear sequentially
        query(':enter', stagger('250ms', [
            animate('.5s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-50%)', offset: 0}),
                style({opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
        ]), {optional: true})
    ])
]);

export const singlePopup = trigger('singlePopupAnimation', [
    // Transition from any state to any state
    transition('* => *', [
        query('.single-popup', style({opacity: 0, transform: 'translateY(-40px)'})),
        query('.single-popup', stagger('250ms', [
            animate('350ms 1.4s ease-out', keyframes([
                style({opacity: 0, transform: 'translateY(-50%)', offset: 0}),
                style({opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ])),
        ])),
    ])
]);
