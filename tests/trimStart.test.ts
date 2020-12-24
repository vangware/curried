import { suite } from "@vangware/test";
import { trimStart } from "../src/trimStart";

export default suite([
	{
		given: "a string",
		must: "return string with trimmed start",
		received: trimStart("   foo   "),
		wanted: "foo   "
	}
]);
