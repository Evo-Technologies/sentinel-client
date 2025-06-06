import { SentinelProject } from "./project";

export class SentinelClient {
    apiKey: string;
    endpoint: string;
    constructor(apiKey:string, endpoint?:string) {
        this.apiKey = apiKey;
        this.endpoint = endpoint || "https://sentinelapi.evo.tech";
        console.log("sentinel client initialized", this.apiKey, this.endpoint);
    }

    getProject(projectId:string) {
        return new SentinelProject(this, projectId);
    }

    async sendRequest(projectId:string, integrationNameOrId:string, requestName: string, request: any) : Promise<any> {
        const uri = `${this.endpoint}/projects/${projectId}/integrations/${integrationNameOrId}/requests/${requestName}`;
        console.log("fetching", uri);
        const r = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json",
                "Sentinel-Api-Key": this.apiKey
            },
            body: JSON.stringify(request)
        });

        if (r.ok) {
            return await r.json();
        } else {
            const errorText = await r.text();
            throw new Error(`${r.status} [${r.statusText}]: ${errorText}`);
        }
    }
}