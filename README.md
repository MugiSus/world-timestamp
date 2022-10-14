# world-timestamp
Provides UTC (or any timezone) time in microseconds and milliseconds from https://worldtimeapi.org.

- Totally independent of the local system clock.
- Capable of next.js, nuxt.js or any react projects.
- Supports various timezones. (See [worldtimeapi/timezones](https://worldtimeapi.org/timezones))

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
    console.log(timestamp.response.datetime); // Ex. 2022-10-01T18:00:00.123456+09:00

    console.log(timestamp.milliseconds); // 1664614800123.456
    console.log(timestamp.utcMilliseconds); // 1664647200123.456

    console.log(timestamp.microseconds); // 1664614800123456
    console.log(timestamp.utcMicroseconds); // 1664647200123456
};
```

# References

### worldTimestamp(timezone?: string): Promise\<WorldTimestamp\>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `timezone` | `string` | Timezone. Default: `"Etc/UTC"` |

You can find all available timezones here: https://worldtimeapi.org/timezones

### WorldTimestamp

| Property | Type | Description |
| :--- | :--- | :--- |
| `response` | `WorldTimeApiResponse` | Worldtimeapi.org response |
| `milliseconds` | `number` | Timestamp in milliseconds |
| `utcMilliseconds` | `number` | Timestamp in milliseconds in UTC |
| `microseconds` | `number`(intager) | Timestamp in microseconds |
| `utcMicroseconds` | `number`(intager) | Timestamp in microseconds in UTC |

### WorldTimeApiResponse

| Property | Type | Description |
| :--- | :--- | :--- |
| `abbreviation` | `string` | Abbreviation of the timezone |
| `client_ip` | `string` | Client IP address |
| `datetime` | `string` | Timestamp in ISO 8601 format |
| `day_of_week` | `number` | Day of the week |
| `day_of_year` | `number` | Day of the year |
| `dst` | `boolean` | Is daylight saving time in effect? |
| `dst_from` | `string` | Date daylight saving time starts |
| `dst_offset` | `number` | Daylight saving time offset |
| `dst_until` | `string` | Date daylight saving time ends |
| `raw_offset` | `number` | Timezone offset from UTC including daylight saving time |
| `timezone` | `string` | Timezone |
| `unixtime` | `number` | Timestamp in seconds |
| `utc_datetime` | `string` | Timestamp in ISO 8601 format in UTC |
| `utc_offset` | `string` | Timezone offset from UTC |
| `week_number` | `number` | Week number |

see more in https://worldtimeapi.org/pages/schema

# License
MIT License © 2022 [MugiSus](https://github.com/MugiSus)

Feel free to contact me if you have any questions or suggestions.
