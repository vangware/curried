import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getUTCSeconds } from "../src/getUTCSeconds";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return seconds UTC value",
		received: getUTCSeconds(date),
		wanted: 31
	}
]);
