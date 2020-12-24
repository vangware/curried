import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { setFullYear } from "../src/setFullYear";

const date = createDate("1989-10-13 10:15:31.123");
const setFullYear2021 = setFullYear(2021);

export default suite([
	{
		given: "a date and new full year value",
		must: "return date with new full year value",
		received: setFullYear2021(date),
		wanted: createDate("2021-10-13 10:15:31.123")
	}
]);
