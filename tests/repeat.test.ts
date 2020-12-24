import { suite } from "@vangware/test";
import { repeat } from "../src/repeat";

const repeatTwice = repeat(2);

export default suite([
	{
		given: "a repeat with a value of 2 and a string",
		must: "return that same string repeated twice",
		received: repeatTwice("foo"),
		wanted: "foofoo"
	}
]);
