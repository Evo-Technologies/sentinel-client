import { SentinelClient } from "./client";
import { SentinelIntegration } from "./integration";

export class SentinelProject {
    id: string;
    client: SentinelClient;
    constructor(client: SentinelClient, id: string) {
        this.client = client;
        this.id = id;
    }

    getIntegration<T extends SentinelIntegration>(type: { new(project:SentinelProject, idOrName:string): T }, idOrName: string ): T {
        return new type(this, idOrName);
    }
}