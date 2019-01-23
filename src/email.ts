import { Injectable } from '@angular/core';

export class InboxEmailMessage {
    // title: string;
    // content: string;

    // constructor( title: string, content: string) {
    //     this.title = title;
    //     this.title = content;
    // }

    // to samo
    constructor( 
        public title: string, 
        public content: string
    ) {    }
}

 @Injectable()
    export class EmailService {
        
    }