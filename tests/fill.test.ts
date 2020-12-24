import { suite } from "@vangware/test";
import { fill } from "../src/fill";

const fooFill = fill("foo");

export default suite([
	{
		given: "a string and an array",
		must: "return an array of the same length filled with string",
		received: fooFill([0, 1, 2]),
		wanted: ["foo", "foo", "foo"]
	},
	{
		given: "a string and an empty array",
		must: "return an empty array",
		received: fooFill([]),
		wanted: []
	}
]);
