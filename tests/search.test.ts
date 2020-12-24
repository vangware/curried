import { suite } from "@vangware/test";
import { createRegExp } from "../src/createRegExp";
import { search } from "../src/search";

const searchBar = search("bar");
const searchBarRegExp = search(createRegExp("gu")("bar"));

export default suite([
	{
		given: "two strings",
		must: "return the position of the first in the second",
		received: searchBar("foobar"),
		wanted: 3
	},
	{
		given: "two strings",
		must: "return -1 when no match is found",
		received: searchBar("foo"),
		wanted: -1
	},
	{
		given: "a string and a regular expression",
		must:
			"return the position of first match of given expression in string",
		received: searchBarRegExp("foobar"),
		wanted: 3
	}
]);
