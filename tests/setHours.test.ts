import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setHours } from "../src/setHours";

const date = createDate("1989-10-13 10:15:31.123");
const setHours13 = setHours(13);

export default suite([
	{
		given: "a date and new hours value",
		must: "return date with new hours value",
		received: setHours13(date),
		wanted: createDate("1989-10-13 13:15:31.123")
	}
]);
