import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setUTCSeconds } from "../src/setUTCSeconds";

const date = createDate("1989-10-13T10:15:31.123Z");
const setUTCSeconds13 = setUTCSeconds(13);

export default suite([
	{
		given: "a date and new seconds value",
		must: "return date with new seconds value",
		received: setUTCSeconds13(date),
		wanted: createDate("1989-10-13T10:15:13.123Z")
	}
]);
