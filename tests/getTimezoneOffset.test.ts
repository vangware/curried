import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getTime } from "../src/getTime";
import { getTimezoneOffset } from "../src/getTimezoneOffset";

const date = createDate("1989-10-13 10:15:31.123");
const utcDate = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return timezone offset value",
		received: getTimezoneOffset(date),
		wanted: (getTime(date) - getTime(utcDate)) / 6e4
	}
]);
