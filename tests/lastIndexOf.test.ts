import { suite } from "@vangware/test";
import { lastIndexOf } from "../src/lastIndexOf";

const lastIndexOfFoo = lastIndexOf("foo");

export default suite([
	{
		given: "a string and an array of strings containing that string",
		must: "return last index of the string",
		received: lastIndexOfFoo(["foo", "bar", "foo"]),
		wanted: 2
	},
	{
		given: "a string and an array of strings not containing that string",
		must: "return -1",
		received: lastIndexOfFoo(["baz", "bar"]),
		wanted: -1
	},
	{
		given: "two strings, one containing the other",
		must: "return last index of the string",
		received: lastIndexOfFoo("foobar foobar"),
		wanted: 7
	},
	{
		given: "two different strings, not containing each other",
		must: "return -1",
		received: lastIndexOfFoo("bar"),
		wanted: -1
	}
]);
