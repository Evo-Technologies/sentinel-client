declare class SentinelIntegration {
    idOrName: string;
    project: SentinelProject;
    constructor(project: SentinelProject, idOrName: string);
    sendRequest(name: string, request: any): Promise<any>;
}

declare class SentinelProject {
    id: string;
    client: SentinelClient;
    constructor(client: SentinelClient, id: string);
    getIntegration<T extends SentinelIntegration>(type: {
        new (project: SentinelProject, idOrName: string): T;
    }, idOrName: string): T;
}

declare class SentinelClient {
    apiKey: string;
    endpoint: string;
    constructor(apiKey: string, endpoint?: string);
    getProject(projectId: string): SentinelProject;
    sendRequest(projectId: string, integrationNameOrId: string, requestName: string, request: any): Promise<any>;
}

declare namespace EvoVoiceIntegration {
    class Integration extends SentinelIntegration {
        constructor(project: SentinelProject, idOrName: string);
        listCustomers(request: ListCustomersRequest): Promise<ListCustomersResponse>;
        getCustomer(request: GetCustomerRequest): Promise<GetCustomerResponse>;
    }
    interface ListCustomersRequest {
        accountIds?: string[];
        nameFilter?: string;
        parentCustomerIds?: string[];
        shallowParent?: boolean;
        tagIds?: string[];
        page?: number;
        all?: boolean;
        countPerPage?: number;
        specificIds?: string[];
        sortField?: string;
        sortOrder?: number;
        simplifiedPaging?: boolean;
    }
    interface ListCustomersResponse {
        items?: {
            name?: string;
            parentAccountId?: string;
            twilioAccountSid?: string;
            ancestorIds?: string[];
            maxPhoneNumbers?: number;
            isBYOA?: boolean;
            trustHubProfileSid?: string;
            logoId?: string;
            logoUri?: string;
            billingSettings?: {
                base?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                localNumbers?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                tollFreeNumbers?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                inboundVoiceCalls?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                outboundVoiceCalls?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                inboundFaxes?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                outboundFaxes?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                inboundSmsMessages?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                outboundSmsMessages?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                aIInsights?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                aILiveMinutes?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
                aIMessages?: {
                    baseCost?: number;
                    rawUnitMultiplier?: number;
                    unitCost?: number;
                    allowance?: number;
                };
            };
            id?: string;
            dateCreated?: string;
            dateLastModified?: string;
            createdBy?: string;
            lastModifiedBy?: string;
        }[];
        totalCount?: number;
        totalPages?: number;
        hasMorePages?: boolean;
    }
    interface GetCustomerRequest {
        customerId?: string;
    }
    interface GetCustomerResponse {
        accountId?: string;
        parentCustomerId?: string;
        breadcrumb?: {
            id?: string;
            name?: string;
        }[];
        accountName?: string;
        isStaging?: boolean;
        name?: string;
        referenceId?: string;
        data?: {};
        tags?: {
            id?: string;
            name?: string;
            color?: number;
        }[];
        schedule?: {
            timeZoneId?: string;
            inherit?: boolean;
            forceClosed?: boolean;
            rules?: {
                id?: string;
                name?: string;
                priority?: number;
                state?: string;
                source?: string;
                condition?: string;
                simpleRuleType?: number;
                customerState?: string;
                flowId?: string;
                flowParams?: {};
                isAllDay?: boolean;
                startDate?: string;
                startTime?: string;
                endTime?: string;
                bySetPosition?: number[];
                byMonth?: number[];
                byWeekNo?: number[];
                byYearDay?: number[];
                byMonthDay?: number[];
                byDay?: {
                    offset?: number;
                    dayOfWeek?: number;
                }[];
                byHour?: number[];
                byMinute?: number[];
                interval?: number;
                count?: number;
                untilDate?: string;
                frequency?: number;
            }[];
            defaultState?: string;
        };
        integrationData?: {};
        overrideBillingSettings?: boolean;
        billingSettings?: {
            base?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            localNumbers?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            tollFreeNumbers?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            inboundVoiceCalls?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            outboundVoiceCalls?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            inboundFaxes?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            outboundFaxes?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            inboundSmsMessages?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            outboundSmsMessages?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            aIInsights?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            aILiveMinutes?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
            aIMessages?: {
                baseCost?: number;
                rawUnitMultiplier?: number;
                unitCost?: number;
                allowance?: number;
            };
        };
        overrideAppSettings?: boolean;
        appSettings?: {
            enablePhoneNumberManagement?: boolean;
            enableDeviceManagement?: boolean;
            enableDialer?: boolean;
            enableCallHistory?: boolean;
            enableAssistants?: boolean;
            showFileNameInMessageCenter?: boolean;
            chakraTheme?: string;
            customCss?: string;
            pageTitle?: string;
            stringMappings?: string;
            logoutUrl?: string;
            portMyNumberUrl?: string;
        };
        id?: string;
        dateCreated?: string;
        dateLastModified?: string;
        createdBy?: string;
        lastModifiedBy?: string;
    }
}
declare namespace GptIntegration {
    class Integration extends SentinelIntegration {
        constructor(project: SentinelProject, idOrName: string);
        completeChatAsync(request: CompleteChatAsyncRequest): Promise<CompleteChatAsyncResponse>;
    }
    interface CompleteChatAsyncRequest {
        messages?: {
            role?: string;
            content?: string;
            name?: string;
        }[];
        temperature?: number;
    }
    interface CompleteChatAsyncResponse {
        content?: {
            text?: string;
        }[];
    }
}
declare namespace FreshdeskIntegration {
    class Integration extends SentinelIntegration {
        constructor(project: SentinelProject, idOrName: string);
        listAllTickets(request: ListAllTicketsRequest): Promise<ListAllTicketsResponse>;
    }
    interface ListAllTicketsRequest {
    }
    interface ListAllTicketsResponse {
    }
}

export { EvoVoiceIntegration, FreshdeskIntegration, GptIntegration, SentinelClient, SentinelIntegration, SentinelProject };
