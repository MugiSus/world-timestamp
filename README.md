# world-timestamp
This API provides UTC (or any timezone) time in microseconds and milliseconds from https://worldtimeapi.org/.  \
**Completely independent of the system clock.**

# Installation
```bash
$ npm install world-timestamp
```

# Usage
```js
import worldTimestamp from 'world-timestamp';

const getUTCTimestamp = async () => {
    // const timestamp = await worldTimestamp(); // "Etc/UTC" as default
    const timestamp = await worldTimestamp("Asia/Tokyo");

    console.log(timestamp.response); // returns worldtimeapi.org response
    console.log(timestamp.response.datetime); // 2022-10-01T18:00:00.123456+09:00

    console.log(timestamp.milliseconds); // 1664614800123.456
    console.log(timestamp.utcMilliseconds); // 1664647200123.456

    console.log(timestamp.microseconds); // 1664614800123456
    console.log(timestamp.utcMicroseconds); // 1664647200123456
};
```
You can find all timezones here: https://worldtimeapi.org/timezones

# References

### worldTimestamp(timezone?: string): Promise\<WorldTimestamp\>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `timezone` | `string` | Timezone. Default: `"Etc/UTC"` |

### WorldTimestamp

| Property | Type | Description |
| :--- | :--- | :--- |
| `response` | `WorldTimeApiResponse` | Worldtimeapi.org response |
| `milliseconds` | `number` | Timestamp in milliseconds |
| `utcMilliseconds` | `number` | Timestamp in milliseconds in UTC |
| `microseconds` | `number` | Timestamp in microseconds |
| `utcMicroseconds` | `number` | Timestamp in microseconds in UTC |

### WorldTimeApiResponse

| Property | Type | Description |
| :--- | :--- | :--- |
| `abbreviation` | `string` | Abbreviation of the timezone |
| `client_ip` | `string` | Client IP address |
| `datetime` | `string` | Timestamp in ISO 8601 format |
| `day_of_week` | `number` | Day of the week |
| `day_of_year` | `number` | Day of the year |
| `dst` | `boolean` | Is daylight saving time in effect? |
| `dst_from` | `string` | Daylight saving time start date |
| `dst_offset` | `number` | Daylight saving time offset |
| `dst_until` | `string` | Daylight saving time end date |
| `raw_offset` | `number` | Timezone offset including daylight saving time |
| `timezone` | `string` | Timezone |
| `unixtime` | `number` | Timestamp in seconds |
| `utc_datetime` | `string` | Timestamp in ISO 8601 format in UTC |
| `utc_offset` | `string` | Timezone offset from UTC |
| `week_number` | `number` | Week number |

see more in https://worldtimeapi.org/pages/schema

# License
MIT License © 2022 [MugiSus](https://github.com/MugiSus)