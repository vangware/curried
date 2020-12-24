import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { toUTCString } from "../src/toUTCString";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return UTC readable string",
		received: toUTCString(date),
		wanted: "Fri, 13 Oct 1989 10:15:31 GMT"
	}
]);
