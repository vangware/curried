import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getUTCHours } from "../src/getUTCHours";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return hours UTC value",
		received: getUTCHours(date),
		wanted: 10
	}
]);
