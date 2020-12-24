import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getUTCDay } from "../src/getUTCDay";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return day of the week UTC value",
		received: getUTCDay(date),
		wanted: 5
	}
]);
