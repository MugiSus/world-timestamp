# world-timestamp
This API provides UTC (or any timezone) time in microseconds and milliseconds from https://worldtimeapi.org/. \
Independent of the system clock.

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

