import { suite } from "@vangware/test";
import { concat } from "../src/concat";

const concatNumbers = concat([0, 1, 2, 3, 4]);
const concatBar = concat("bar");

export default suite<readonly (string | number)[] | string>([
	{
		given: "an array of numbers an an array of strings",
		must: "return array of numbers concatenated into the array of strings",
		received: concatNumbers(["foo", "bar"]),
		wanted: ["foo", "bar", 0, 1, 2, 3, 4]
	},
	{
		given: "two strings",
		must: "return both strings concatenated",
		received: concatBar("foo"),
		wanted: "foobar"
	}
]);
