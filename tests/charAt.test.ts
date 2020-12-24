import { suite } from "@vangware/test";
import { charAt } from "../src/charAt";

const charAt0 = charAt(0);

export default suite([
	{
		given: "a string an a 0 value",
		must: "return the first character in given string",
		received: charAt0("foobar"),
		wanted: "f"
	}
]);
