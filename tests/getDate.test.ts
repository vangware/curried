import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getDate } from "../src/getDate";

const date = createDate("1989-10-13 10:15:31.123");

export default suite([
	{
		given: "a date",
		must: "return day of the month value",
		received: getDate(date),
		wanted: 13
	}
]);
