import { SentinelProject } from "./project";

export class SentinelIntegration {
    idOrName: string;
    project: SentinelProject;

    constructor(project: SentinelProject, idOrName: string) {
        this.project = project;
        this.idOrName = idOrName;
    }

    async sendMessage(name:string, message: any) {
        return await this.project.client.sendMessage(this.project.id, this.idOrName, name, message);
    }
}