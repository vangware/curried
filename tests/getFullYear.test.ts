import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getFullYear } from "../src/getFullYear";

const date = createDate("1989-10-13 10:15:31.123");

export default suite([
	{
		given: "a date",
		must: "return full year value",
		received: getFullYear(date),
		wanted: 1989
	}
]);
