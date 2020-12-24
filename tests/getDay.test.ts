import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getDay } from "../src/getDay";

const date = createDate("1989-10-13 10:15:31.123");

export default suite([
	{
		given: "a date",
		must: "return day of the week value",
		received: getDay(date),
		wanted: 5
	}
]);
