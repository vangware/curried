import { suite } from "@vangware/test";
import { createDate } from "../src/createDate";
import { toLocaleDateString } from "../src/toLocaleDateString";

const date = createDate("1989-10-13T10:15:31.123Z");
const toLocaleDateStringDefault = toLocaleDateString({});
const toLocaleDateStringEnUS = toLocaleDateStringDefault("en-US");
const toLocaleDateStringAROrUS = toLocaleDateStringDefault(["es-AR", "en-US"]);

export default suite([
	{
		given: "a date and en-US configurations",
		must: "return string representing that date with that format",
		received: toLocaleDateStringEnUS(date),
		wanted: "10/13/1989"
	},
	{
		given: "a date and es-AR or en-US configurations",
		must: "return string representing that date with that format",
		received: toLocaleDateStringAROrUS(date),
		wanted: "13/10/1989"
	}
]);
