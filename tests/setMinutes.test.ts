import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setMinutes } from "../src/setMinutes";

const date = createDate("1989-10-13 10:15:31.123");
const setMinutes13 = setMinutes(13);

export default suite([
	{
		given: "a date and new minutes value",
		must: "return date with new minutes value",
		received: setMinutes13(date),
		wanted: createDate("1989-10-13 10:13:31.123")
	}
]);
