import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setUTCDate } from "../src/setUTCDate";

const date = createDate("1989-10-13T10:15:31.123Z");
const setUTCDate31 = setUTCDate(31);

export default suite([
	{
		given: "a date and new day of the month UTC value",
		must: "return date with new day of the month UTC value",
		received: setUTCDate31(date),
		wanted: createDate("1989-10-31T10:15:31.123Z")
	}
]);
