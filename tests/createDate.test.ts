import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";

export default suite([
	{
		given: "a create date",
		must: "return same date",
		received: createDate("1989-10-13T10:15:31.123Z"),
		wanted: new Date("1989-10-13T10:15:31.123Z")
	}
]);
