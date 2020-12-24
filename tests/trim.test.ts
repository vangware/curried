import { suite } from "@vangware/test";
import { trim } from "../src/trim";

export default suite([
	{
		given: "a string",
		must: "return string with trimmed start",
		received: trim("   foo   "),
		wanted: "foo"
	}
]);
