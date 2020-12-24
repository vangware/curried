import { suite } from "@vangware/test";
import { includes } from "../src/includes";

const includesFoo = includes("foo");

export default suite([
	{
		given: "a string and an array of strings containing that string",
		must: "return true",
		received: includesFoo(["foo", "bar"]),
		wanted: true
	},
	{
		given: "a string and an array not containing that string",
		must: "return false",
		received: includesFoo(["baz", "bar"]),
		wanted: false
	},
	{
		given: "two strings, one containing the other",
		must: "return true",
		received: includesFoo("foobar"),
		wanted: true
	},
	{
		given: "two different strings, not containing each other",
		must: "return false",
		received: includesFoo("bar"),
		wanted: false
	}
]);
