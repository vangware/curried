import { suite } from "@vangware/test";
import { toLocaleUpperCase } from "../src/toLocaleUpperCase";

const toLocaleUpperCaseEnUS = toLocaleUpperCase("en-US");
const toLocaleUpperCaseARorUS = toLocaleUpperCase(["es-AR", "en-US"]);

export default suite([
	{
		given: "an lowercase string",
		must: "return a uppercase string",
		received: toLocaleUpperCaseEnUS("foo"),
		wanted: "FOO"
	},
	{
		given: "an lowercase string",
		must: "return a uppercase string",
		received: toLocaleUpperCaseARorUS("foo"),
		wanted: "FOO"
	}
]);
