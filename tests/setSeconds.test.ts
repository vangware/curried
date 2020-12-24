import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setSeconds } from "../src/setSeconds";

const date = createDate("1989-10-13 10:15:31.123");
const setSeconds13 = setSeconds(13);

export default suite([
	{
		given: "a date and new seconds value",
		must: "return date with new seconds value",
		received: setSeconds13(date),
		wanted: createDate("1989-10-13 10:15:13.123")
	}
]);
