import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getMilliseconds } from "../src/getMilliseconds";

const date = createDate("1989-10-13 10:15:31.123");

export default suite([
	{
		given: "a date",
		must: "return milliseconds value",
		received: getMilliseconds(date),
		wanted: 123
	}
]);
