import { suite } from "@vangware/test";
import { endsWith } from "../src/endsWith";

const endsWithBar = endsWith("bar");

export default suite([
	{
		given: "two strings",
		must: "return true if the second string ends with the first",
		received: endsWithBar("foobar"),
		wanted: true
	},
	{
		given: "two strings",
		must: "return false if the second string doesn't ends with the first",
		received: endsWithBar("barman"),
		wanted: false
	}
]);
