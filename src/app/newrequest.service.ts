// tslint:disable-next-line:component-class-suffix
export class NewRequestDetails {
    SpName: string;
    SpDependencies: string;
    ApiMethod: string;
    SpDocument: string;
    SpToDo: string;

}
export class NewRequestService{
    postNewRequest(req: NewRequestDetails){
        return 200;
    }
}