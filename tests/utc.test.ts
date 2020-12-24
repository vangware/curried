import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getTime } from "../src/getTime";
import { utc } from "../src/utc";

export default suite([
	{
		given: "a utc object",
		must: "return timestamp for that UTC configuration",
		received: utc({
			day: 13,
			hours: 10,
			milliseconds: 123,
			minutes: 15,
			month: 9,
			seconds: 31,
			year: 1989
		}),
		wanted: getTime(createDate("1989-10-13T10:15:31.123Z"))
	}
]);
