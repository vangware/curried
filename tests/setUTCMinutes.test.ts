import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setUTCMinutes } from "../src/setUTCMinutes";

const date = createDate("1989-10-13T10:15:31.123Z");
const setUTCMinutes13 = setUTCMinutes(13);

export default suite([
	{
		given: "a date and new minutes value",
		must: "return date with new minutes value",
		received: setUTCMinutes13(date),
		wanted: createDate("1989-10-13T10:13:31.123Z")
	}
]);
