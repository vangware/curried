import { suite } from "@vangware/test";
import { trimEnd } from "../src/trimEnd";

export default suite([
	{
		given: "a string",
		must: "return string with trimmed start",
		received: trimEnd("   foo   "),
		wanted: "   foo"
	}
]);
