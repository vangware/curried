import { suite } from "@vangware/test";
import { test } from "../src/test";

const onlyHasNumbers = test(/\d/gu);

export default suite([
	{
		given: "a string with numbers and a number validation",
		must: "return true",
		received: onlyHasNumbers("1234"),
		wanted: true
	},
	{
		given: "a string with letters and a number validation",
		must: "return false",
		received: onlyHasNumbers("nope"),
		wanted: false
	}
]);
