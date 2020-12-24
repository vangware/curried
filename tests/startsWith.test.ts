import { suite } from "@vangware/test";
import { startsWith } from "../src/startsWith";

const startsWithBar = startsWith("bar");

export default suite([
	{
		given: "two strings",
		must: "return true if the second string starts with the first",
		received: startsWithBar("barman"),
		wanted: true
	},
	{
		given: "two strings",
		must: "return false if the second string doesn't starts with the first",
		received: startsWithBar("foobar"),
		wanted: false
	}
]);
