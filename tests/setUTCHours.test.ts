import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setUTCHours } from "../src/setUTCHours";

const date = createDate("1989-10-13T10:15:31.123Z");
const setUTCHours13 = setUTCHours(13);

export default suite([
	{
		given: "a date and new hours value",
		must: "return date with new hours value",
		received: setUTCHours13(date),
		wanted: createDate("1989-10-13T13:15:31.123Z")
	}
]);
