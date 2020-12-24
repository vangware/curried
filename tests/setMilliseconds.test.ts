import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setMilliseconds } from "../src/setMilliseconds";

const date = createDate("1989-10-13 10:15:31.123");
const setMilliseconds420 = setMilliseconds(420);

export default suite([
	{
		given: "a date and new milliseconds value",
		must: "return date with new milliseconds value",
		received: setMilliseconds420(date),
		wanted: createDate("1989-10-13 10:15:31.420")
	}
]);
