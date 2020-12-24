import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getSeconds } from "../src/getSeconds";

const date = createDate("1989-10-13 10:15:31.123");

export default suite([
	{
		given: "a date",
		must: "return seconds value",
		received: getSeconds(date),
		wanted: 31
	}
]);
