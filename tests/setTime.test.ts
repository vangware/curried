import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setTime } from "../src/setTime";

const date = createDate("1989-10-13 10:15:31.123");
const setTime0 = setTime(0);

export default suite([
	{
		given: "a date and new time value",
		must: "return date with new time value",
		received: setTime0(date),
		wanted: createDate("1970-01-01T00:00:00.000Z")
	}
]);
