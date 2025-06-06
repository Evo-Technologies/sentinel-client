import { SentinelProject } from "./project";

export class SentinelIntegration {
    idOrName: string;
    project: SentinelProject;

    constructor(project: SentinelProject, idOrName: string) {
        this.project = project;
        this.idOrName = idOrName;
    }

    async sendRequest(name:string, request: any) {
        return await this.project.client.sendRequest(this.project.id, this.idOrName, name, request);
    }
}