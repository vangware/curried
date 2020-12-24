import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getUTCMilliseconds } from "../src/getUTCMilliseconds";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return milliseconds UTC value",
		received: getUTCMilliseconds(date),
		wanted: 123
	}
]);
