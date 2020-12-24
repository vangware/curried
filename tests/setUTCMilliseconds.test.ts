import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setUTCMilliseconds } from "../src/setUTCMilliseconds";

const date = createDate("1989-10-13T10:15:31.123Z");
const setUTCMilliseconds420 = setUTCMilliseconds(420);

export default suite([
	{
		given: "a date and new milliseconds value",
		must: "return date with new milliseconds value",
		received: setUTCMilliseconds420(date),
		wanted: createDate("1989-10-13T10:15:31.420Z")
	}
]);
