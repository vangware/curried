import { suite } from "@vangware/test";
import { toLocaleLowerCase } from "../src/toLocaleLowerCase";

const toLocaleLowerCaseEnUS = toLocaleLowerCase("en-US");
const toLocaleLowerCaseARorUS = toLocaleLowerCase(["es-AR", "en-US"]);

export default suite([
	{
		given: "an uppercase string",
		must: "return a lowercase string",
		received: toLocaleLowerCaseEnUS("FOO"),
		wanted: "foo"
	},
	{
		given: "an uppercase string",
		must: "return a lowercase string",
		received: toLocaleLowerCaseARorUS("FOO"),
		wanted: "foo"
	}
]);
