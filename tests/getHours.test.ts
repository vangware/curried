import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getHours } from "../src/getHours";

const date = createDate("1989-10-13 10:15:31.123");

export default suite([
	{
		given: "a date",
		must: "return hours value",
		received: getHours(date),
		wanted: 10
	}
]);
