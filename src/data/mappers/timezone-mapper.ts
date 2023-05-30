import { TimezoneResponceDto, TimezoneDto } from "../models/timezone-models";


export const timeZoneMapper = (responceData: TimezoneResponceDto[]): TimezoneDto[] => {
    return responceData.map((elem) => {
        let timeZoneValue = parseInt(elem.timezone);
        
        if(!Number.isInteger(timeZoneValue)) {
            throw new Error('Ошибка');
        }

        return {
                name: elem.name,
                timezone: timeZoneValue
            };
        }
    );
};