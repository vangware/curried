import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { toLocaleTimeString } from "../src/toLocaleTimeString";

const date = createDate("1989-10-13T10:15:31.123Z");
const toLocaleTimeStringGMT = toLocaleTimeString({ timeZone: "GMT" });
const toLocaleTimeStringEnUS = toLocaleTimeStringGMT("en-US");
const toLocaleTimeStringAROrUS = toLocaleTimeStringGMT(["es-AR", "en-US"]);

export default suite([
	{
		given: "a date and en-US configurations",
		must: "return string representing the time of that date in that format",
		received: toLocaleTimeStringEnUS(date),
		wanted: "10:15:31 AM"
	},
	{
		given: "a date and es-AR or en-US configurations",
		must: "return string representing the time of that date in that format",
		received: toLocaleTimeStringAROrUS(date),
		wanted: "10:15:31"
	}
]);
