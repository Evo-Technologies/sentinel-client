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

    async sendMessage(projectId:string, integrationNameOrId:string, messageName: string, message: any) : Promise<any> {
        const uri = `${this.endpoint}/projects/${projectId}/integrations/${integrationNameOrId}/messages/${messageName}`;
        console.log("fetching", uri);
        const r = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json",
                "Sentinel-Api-Key": this.apiKey
            },
            body: JSON.stringify(message)
        });

        if (r.ok) {
            return await r.json();
        } else {
            const messageText = await r.text();
            throw new Error(`${r.status} [${r.statusText}]: ${messageText}`);
        }
    }
}