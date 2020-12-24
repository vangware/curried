import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getUTCDate } from "../src/getUTCDate";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return day of the month UTC value",
		received: getUTCDate(date),
		wanted: 13
	}
]);
