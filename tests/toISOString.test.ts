import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { toISOString } from "../src/toISOString";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return string with the ISO format",
		received: toISOString(date),
		wanted: "1989-10-13T10:15:31.123Z"
	}
]);
