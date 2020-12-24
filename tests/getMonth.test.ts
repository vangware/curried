import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getMonth } from "../src/getMonth";

const date = createDate("1989-10-13 10:15:31.123");

export default suite([
	{
		given: "a date",
		must: "return month value",
		received: getMonth(date),
		wanted: 9
	}
]);
