import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getUTCMinutes } from "../src/getUTCMinutes";

const date = createDate("1989-10-13T10:15:31.123Z");

export default suite([
	{
		given: "a date",
		must: "return minutes UTC value",
		received: getUTCMinutes(date),
		wanted: 15
	}
]);
