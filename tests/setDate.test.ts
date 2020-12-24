import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setDate } from "../src/setDate";

const date = createDate("1989-10-13 10:15:31.123");
const setDate31 = setDate(31);

export default suite([
	{
		given: "a date and new day of the month value",
		must: "return date with new day of the month value",
		received: setDate31(date),
		wanted: createDate("1989-10-31 10:15:31.123")
	}
]);
