import { suite } from "@vangware/test";
import { concat } from "../src/concat";
import { createRegExp } from "../src/createRegExp";
import { replace } from "../src/replace";

const replaceWithFoo = replace("foo");
const replaceConcatenatingBar = replace(concat("bar"));
const replaceBarWithFoo = replaceWithFoo("bar");
const replaceFooRegExpConcatenatingFoo = replaceConcatenatingBar(
	createRegExp("gu")("foo")
);

export default suite([
	{
		given: "two strings to replace one with the other",
		must: "return replaced string",
		received: replaceBarWithFoo("bar"),
		wanted: "foo"
	},
	{
		given: "a replacer function and a regular expression",
		must: "return replaced string",
		received: replaceFooRegExpConcatenatingFoo("foo"),
		wanted: "foobar"
	}
]);
