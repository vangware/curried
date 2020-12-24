import { suite } from "@vangware/test";
import { codePointAt } from "../src/codePointAt";

const codePointAt0 = codePointAt(0);

export default suite([
	{
		given: "a string an a 0 value",
		must: "return the first character's code point in given string",
		received: codePointAt0("foobar"),
		wanted: 102
	}
]);
