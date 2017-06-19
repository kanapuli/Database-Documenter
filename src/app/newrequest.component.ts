import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewRequestService, NewRequestDetails } from './newrequest.service';
@Component({
    selector: 'app-newrequest',
    templateUrl: './newrequest.component.html',
    styleUrls: ['./newrequest.component.css'],
    providers: [NewRequestService]

})
//https://devcenter.heroku.com/articles/mean-apps-restful-api
export class NewRequestComponent {
    serverresponse: any;
    @Input() spname;
    @Input() spdependencies;
    @Input() apimethod;
    @Input() spdocument;
    @Input() sptodo;
    data = new NewRequestDetails();
    constructor(private newRequestService: NewRequestService) {

    }

    onNewRequestSubmit(f: NgForm) {
        this.data.SpName = this.spname;
        this.data.SpDependencies = this.spdependencies;
        this.data.ApiMethod = this.apimethod;
        this.data.SpDocument = this.spdocument;
        this.data.SpToDo = this.sptodo;
        console.log(this.data);
        
        this.serverresponse = this.newRequestService.postNewRequest(this.data);
        console.log(this.serverresponse);

    }
}
