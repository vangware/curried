import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setMonth } from "../src/setMonth";

const date = createDate("1989-10-13 10:15:31.123");
const setMonth5 = setMonth(5);

export default suite([
	{
		given: "a date and new month value",
		must: "return date with new month value",
		received: setMonth5(date),
		wanted: createDate("1989-06-13 10:15:31.123")
	}
]);
