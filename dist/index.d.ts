declare class SentinelIntegration {
    idOrName: string;
    project: SentinelProject;
    constructor(project: SentinelProject, idOrName: string);
    sendMessage(name: string, message: any): Promise<any>;
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
    sendMessage(projectId: string, integrationNameOrId: string, messageName: string, message: any): Promise<any>;
}

declare namespace EvoVoiceIntegration {
    class Integration extends SentinelIntegration {
        constructor(project: SentinelProject, idOrName: string);
        listCustomers(request: ListCustomersRequest): Promise<ListCustomersResponse>;
        getCustomer(request: GetCustomerRequest): Promise<GetCustomerResponse>;
    }
    interface ListCustomersRequest {
        AccountIds?: string[];
        NameFilter?: string;
        ParentCustomerIds?: string[];
        ShallowParent?: boolean;
        TagIds?: string[];
        Page?: number;
        All?: boolean;
        CountPerPage?: number;
        SpecificIds?: string[];
        SortField?: string;
        SortOrder?: number;
        SimplifiedPaging?: boolean;
    }
    interface ListCustomersResponse {
        Items?: {
            Name?: string;
            ParentAccountId?: string;
            TwilioAccountSid?: string;
            AncestorIds?: string[];
            MaxPhoneNumbers?: number;
            IsBYOA?: boolean;
            TrustHubProfileSid?: string;
            LogoId?: string;
            LogoUri?: string;
            BillingSettings?: {
                Base?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                LocalNumbers?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                TollFreeNumbers?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                InboundVoiceCalls?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                OutboundVoiceCalls?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                InboundFaxes?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                OutboundFaxes?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                InboundSmsMessages?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                OutboundSmsMessages?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                AIInsights?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                AILiveMinutes?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
                AIMessages?: {
                    BaseCost?: number;
                    RawUnitMultiplier?: number;
                    UnitCost?: number;
                    Allowance?: number;
                };
            };
            Id?: string;
            DateCreated?: string;
            DateLastModified?: string;
            CreatedBy?: string;
            LastModifiedBy?: string;
        }[];
        TotalCount?: number;
        TotalPages?: number;
        HasMorePages?: boolean;
    }
    interface GetCustomerRequest {
        CustomerId?: string;
    }
    interface GetCustomerResponse {
        AccountId?: string;
        ParentCustomerId?: string;
        Breadcrumb?: {
            Id?: string;
            Name?: string;
        }[];
        AccountName?: string;
        IsStaging?: boolean;
        Name?: string;
        ReferenceId?: string;
        Data?: {};
        Tags?: {
            Id?: string;
            Name?: string;
            Color?: number;
        }[];
        Schedule?: {
            TimeZoneId?: string;
            Inherit?: boolean;
            ForceClosed?: boolean;
            Rules?: {
                Id?: string;
                Name?: string;
                Priority?: number;
                State?: string;
                Source?: string;
                Condition?: string;
                SimpleRuleType?: number;
                CustomerState?: string;
                FlowId?: string;
                FlowParams?: {};
                IsAllDay?: boolean;
                StartDate?: string;
                StartTime?: string;
                EndTime?: string;
                BySetPosition?: number[];
                ByMonth?: number[];
                ByWeekNo?: number[];
                ByYearDay?: number[];
                ByMonthDay?: number[];
                ByDay?: {
                    Offset?: number;
                    DayOfWeek?: number;
                }[];
                ByHour?: number[];
                ByMinute?: number[];
                Interval?: number;
                Count?: number;
                UntilDate?: string;
                Frequency?: number;
            }[];
            DefaultState?: string;
        };
        IntegrationData?: {};
        OverrideBillingSettings?: boolean;
        BillingSettings?: {
            Base?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            LocalNumbers?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            TollFreeNumbers?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            InboundVoiceCalls?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            OutboundVoiceCalls?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            InboundFaxes?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            OutboundFaxes?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            InboundSmsMessages?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            OutboundSmsMessages?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            AIInsights?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            AILiveMinutes?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
            AIMessages?: {
                BaseCost?: number;
                RawUnitMultiplier?: number;
                UnitCost?: number;
                Allowance?: number;
            };
        };
        OverrideAppSettings?: boolean;
        AppSettings?: {
            EnablePhoneNumberManagement?: boolean;
            EnableDeviceManagement?: boolean;
            EnableDialer?: boolean;
            EnableCallHistory?: boolean;
            EnableAssistants?: boolean;
            ShowFileNameInMessageCenter?: boolean;
            ChakraTheme?: string;
            CustomCss?: string;
            PageTitle?: string;
            StringMappings?: string;
            LogoutUrl?: string;
            PortMyNumberUrl?: string;
        };
        Id?: string;
        DateCreated?: string;
        DateLastModified?: string;
        CreatedBy?: string;
        LastModifiedBy?: string;
    }
}

export { EvoVoiceIntegration, SentinelClient, SentinelIntegration, SentinelProject };
