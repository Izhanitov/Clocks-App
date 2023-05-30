import { TimezoneResponceDto, TimezoneDto } from "../models/timezone-models";


export const timeZoneMapper = (responceData: TimezoneResponceDto[]): TimezoneDto[] => {
    const mappedData: TimezoneDto[] = [];

    responceData.map(elem => 
        mappedData.push(
            {
                name: elem.name ?? elem.name,
                timezone: elem.timezone ? parseInt(elem.timezone) : 0
            } 
        )
    )

    return mappedData;
};
