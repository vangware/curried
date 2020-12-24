import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setUTCFullYear } from "../src/setUTCFullYear";

const date = createDate("1989-10-13T10:15:31.123Z");
const setUTCFullYear2021 = setUTCFullYear(2021);

export default suite([
	{
		given: "a date and new year UTC value",
		must: "return date with new year UTC value",
		received: setUTCFullYear2021(date),
		wanted: createDate("2021-10-13T10:15:31.123Z")
	}
]);
