
// https://localhost:7082/ts
import { SentinelProject } from "./project"
import { SentinelIntegration } from "./integration"
export namespace EvoVoiceIntegration {
    export class Integration extends SentinelIntegration {
        constructor(project: SentinelProject, idOrName:string) {
            super(project, idOrName);
        }
    async listCustomers(request:ListCustomersRequest) : Promise<ListCustomersResponse> {
        return await this.sendRequest('ListCustomers', request);
    }
    async getCustomer(request:GetCustomerRequest) : Promise<GetCustomerResponse> {
        return await this.sendRequest('GetCustomer', request);
    }
    }
    export interface ListCustomersRequest {
        accountIds?:string[],
        nameFilter?:string,
        parentCustomerIds?:string[],
        shallowParent?:boolean,
        tagIds?:string[],
        page?:number,
        all?:boolean,
        countPerPage?:number,
        specificIds?:string[],
        sortField?:string,
        sortOrder?:number,
        simplifiedPaging?:boolean,
    }
    export interface ListCustomersResponse {
        items?:{
                name?:string,
                parentAccountId?:string,
                twilioAccountSid?:string,
                ancestorIds?:string[],
                maxPhoneNumbers?:number,
                isBYOA?:boolean,
                trustHubProfileSid?:string,
                logoId?:string,
                logoUri?:string,
                billingSettings?:{
                    base?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    localNumbers?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    tollFreeNumbers?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    inboundVoiceCalls?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    outboundVoiceCalls?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    inboundFaxes?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    outboundFaxes?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    inboundSmsMessages?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    outboundSmsMessages?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    aIInsights?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    aILiveMinutes?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                    aIMessages?:{
                        baseCost?:number,
                        rawUnitMultiplier?:number,
                        unitCost?:number,
                        allowance?:number,
                    },
                },
                id?:string,
                dateCreated?:string,
                dateLastModified?:string,
                createdBy?:string,
                lastModifiedBy?:string,
            }[],
        totalCount?:number,
        totalPages?:number,
        hasMorePages?:boolean,
    }
    export interface GetCustomerRequest {
        customerId?:string,
    }
    export interface GetCustomerResponse {
        accountId?:string,
        parentCustomerId?:string,
        breadcrumb?:{
                id?:string,
                name?:string,
            }[],
        accountName?:string,
        isStaging?:boolean,
        name?:string,
        referenceId?:string,
        data?:{
        },
        tags?:{
                id?:string,
                name?:string,
                color?:number,
            }[],
        schedule?:{
            timeZoneId?:string,
            inherit?:boolean,
            forceClosed?:boolean,
            rules?:{
                    id?:string,
                    name?:string,
                    priority?:number,
                    state?:string,
                    source?:string,
                    condition?:string,
                    simpleRuleType?:number,
                    customerState?:string,
                    flowId?:string,
                    flowParams?:{
                    },
                    isAllDay?:boolean,
                    startDate?:string,
                    startTime?:string,
                    endTime?:string,
                    bySetPosition?:number[],
                    byMonth?:number[],
                    byWeekNo?:number[],
                    byYearDay?:number[],
                    byMonthDay?:number[],
                    byDay?:{
                            offset?:number,
                            dayOfWeek?:number,
                        }[],
                    byHour?:number[],
                    byMinute?:number[],
                    interval?:number,
                    count?:number,
                    untilDate?:string,
                    frequency?:number,
                }[],
            defaultState?:string,
        },
        integrationData?:{
        },
        overrideBillingSettings?:boolean,
        billingSettings?:{
            base?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            localNumbers?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            tollFreeNumbers?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            inboundVoiceCalls?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            outboundVoiceCalls?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            inboundFaxes?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            outboundFaxes?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            inboundSmsMessages?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            outboundSmsMessages?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            aIInsights?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            aILiveMinutes?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
            aIMessages?:{
                baseCost?:number,
                rawUnitMultiplier?:number,
                unitCost?:number,
                allowance?:number,
            },
        },
        overrideAppSettings?:boolean,
        appSettings?:{
            enablePhoneNumberManagement?:boolean,
            enableDeviceManagement?:boolean,
            enableDialer?:boolean,
            enableCallHistory?:boolean,
            enableAssistants?:boolean,
            showFileNameInMessageCenter?:boolean,
            chakraTheme?:string,
            customCss?:string,
            pageTitle?:string,
            stringMappings?:string,
            logoutUrl?:string,
            portMyNumberUrl?:string,
        },
        id?:string,
        dateCreated?:string,
        dateLastModified?:string,
        createdBy?:string,
        lastModifiedBy?:string,
    }
}
export namespace GptIntegration {
    export class Integration extends SentinelIntegration {
        constructor(project: SentinelProject, idOrName:string) {
            super(project, idOrName);
        }
    async completeChatAsync(request:CompleteChatAsyncRequest) : Promise<CompleteChatAsyncResponse> {
        return await this.sendRequest('CompleteChatAsync', request);
    }
    }
    export interface CompleteChatAsyncRequest {
        messages?:{
                role?:string,
                content?:string,
                name?:string,
            }[],
        temperature?:number,
    }
    export interface CompleteChatAsyncResponse {
        content?:{
                text?:string,
            }[],
    }
}
export namespace FreshdeskIntegration {
    export class Integration extends SentinelIntegration {
        constructor(project: SentinelProject, idOrName:string) {
            super(project, idOrName);
        }
    async listAllTickets(request:ListAllTicketsRequest) : Promise<ListAllTicketsResponse> {
        return await this.sendRequest('ListAllTickets', request);
    }
    }
    export interface ListAllTicketsRequest {
    }
    export interface ListAllTicketsResponse {
    }
}

