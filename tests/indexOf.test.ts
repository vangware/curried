import { suite } from "@vangware/test";
import { indexOf } from "../src/indexOf";

const indexOfFoo = indexOf("foo");

export default suite([
	{
		given: "a string and an array of strings containing that string",
		must: "return index of the string",
		received: indexOfFoo(["foo", "bar", "foo"]),
		wanted: 0
	},
	{
		given: "a string and an array of strings not containing that string",
		must: "return -1",
		received: indexOfFoo(["baz", "bar"]),
		wanted: -1
	},
	{
		given: "two strings, one containing the other",
		must: "return index of the string",
		received: indexOfFoo("foobar foobar"),
		wanted: 0
	},
	{
		given: "two different strings, not containing each other",
		must: "return -1",
		received: indexOfFoo("bar"),
		wanted: -1
	}
]);
