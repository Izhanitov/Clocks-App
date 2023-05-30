import { TimezoneDto } from "../../data/models/timezone-models";
import { timeZoneMapper } from "../../data/mappers/timezone-mapper";


export interface ITimezoneProvider {
    getTimeZone(): Promise<TimezoneDto[]>;
}

export class TimeZoneProvider implements ITimezoneProvider {
    public async getTimeZone(): Promise<TimezoneDto[]> {
        const responce = await fetch(`http://localhost:3000/timezones.json`);

        if (!responce.ok) {
            throw new Error(`Could not fetch timezones`);
        }

        const data = await responce.json();  

        return timeZoneMapper(data);
    }
}
