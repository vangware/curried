import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { getMinutes } from "../src/getMinutes";

const date = createDate("1989-10-13 10:15:31.123");

export default suite([
	{
		given: "a date",
		must: "return minutes value",
		received: getMinutes(date),
		wanted: 15
	}
]);
