interface DateTimeJsonResponse {
    abbreviation: string;
    client_ip: string;
    datetime: string;
    day_of_week: number;
    day_of_year: number;
    dst: boolean;
    dst_from: string;
    dst_offset: number;
    dst_until: string;
    raw_offset: number;
    timezone: string;
    unixtime: number;
    utc_datetime: string;
    utc_offset: string;
    week_number: number;
}
interface WorldTimestamp {
    response: DateTimeJsonResponse;
    milliseconds: number;
    utcMilliseconds: number;
    microseconds: number;
    utcMicroseconds: number;
}
declare const worldTimestamp: (timezone?: string) => Promise<WorldTimestamp>;
export default worldTimestamp;
