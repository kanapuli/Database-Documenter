import { Component } from '@angular/core';

@Component({
    selector: 'app-dbgrid',
    templateUrl: './dbgrid.component.html',
    styleUrls: ['./dbgrid.component.css']
})


export class DbGridComponent {
    settings = {
        actions: {
            add: false,
            delete: false
        },
        columns: {
            id: {
                title: 'ID'
            },
            spname: {
                title: 'Full Name'
            },
            username: {
                title: 'Requested User'
            },
            date: {
                title: 'Modified On'
            }
        }
    }
    data = [
        {
            id: 1,
            spname: 'usp_Req_Save',
            username: 'Anurag Mahajan',
            date: new Date().toDateString()
        },
        {
            id: 2,
            spname: 'usp_Resume_Save',
            username: 'Debasmita',
            date: new Date().toDateString()
        },
        {
            id: 3,
            spname: 'sp_GetGridLayout',
            username: 'Mohan',
            date: new Date().toDateString()
        },
        {
            id: 4,
            spname: 'ufn_AccessReqIDs',
            username: 'Pavan',
            date: new Date().toDateString()
        },
        {
            id: 5,
            spname: 'dbo.HC_Requisitions_Columns',
            username: 'Saraswati',
            date: new Date().toDateString()
        },
        {
            id: 6,
            spname: 'dbo.HC_Requisitions.Table',
            username: 'Anurag Mahajan',
            date: new Date().toDateString()
        },
        {
            id: 7,
            spname: 'Cell Template Addition in Req Grid',
            username: 'Bhosle',
            date: new Date().toDateString()
        },
        {
            id: 8,
            spname: 'Drop Table Resume Bank',
            username: 'Mohan',
            date: new Date().toDateString()
        },
        {
            id: 9,
            spname: 'HGS Customer Db changes',
            username: 'Pavan',
            date: new Date().toDateString()
        },
        {
            id: 10,
            spname: 'dbo.HC_REQ_RESUME new Column',
            username: 'Pritesh',
            date: new Date().toDateString()
        },
        {
            id: 11,
            spname: 'usp_Offer_Update',
            username: 'Bhosle',
            date: new Date().toDateString()
        },
        {
            id: 12,
            spname: 'usp_GetOfferConfiguration',
            username: 'Debasmita',
            date: new Date().toDateString()
        },
        {
            id: 13,
            spname: 'usp_mstr_getCTCTemplate',
            username: 'Sameer',
            date: new Date().toDateString()
        },
        {
            id: 14,
            spname: 'udt_ReqTable',
            username: 'Ganesh',
            date: new Date().toDateString()
        },
        {
            id: 15,
            spname: 'dbo.utr_Resume_Trigger',
            username: 'Athavan',
            date: new Date().toDateString()
        }
    ]
}