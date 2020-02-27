import { eurgency } from './eurgency';

export class Task {
    description: string
    urgency:eurgency

    constructor(description: string,urgency:eurgency) {
        this.description = description
        this.urgency= urgency
    }

}