import { suite } from "@vangware/test";
import { concat } from "../src/concat";
import { then } from "../src/then";

const thenConcatBar = then<string, string>(concat("bar"));

export default suite([
	{
		given: "a then handler that concatenates a string and a promise",
		must: "return the concatenation of the resolved value and the then",
		received: thenConcatBar(Promise.resolve("foo")),
		wanted: "foobar"
	}
]);
