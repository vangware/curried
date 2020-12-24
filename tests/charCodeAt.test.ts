import { suite } from "@vangware/test";
import { charCodeAt } from "../src/charCodeAt";

const charCodeAt0 = charCodeAt(0);

export default suite([
	{
		given: "a string an a 0 value",
		must: "return the first character's code in given string",
		received: charCodeAt0("foobar"),
		wanted: 102
	}
]);
