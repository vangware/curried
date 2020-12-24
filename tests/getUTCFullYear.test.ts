import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getUTCFullYear } from "../src/getUTCFullYear";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return full year UTC value",
		received: getUTCFullYear(date),
		wanted: 1989
	}
]);
