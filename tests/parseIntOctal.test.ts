import { suite } from "@vangware/test";
import { parseIntOctal } from "../src/parseIntOctal";

export default suite([
	{
		given: "a string with value '100'",
		must: "return the number 64 (0o100)",
		received: parseIntOctal("100"),
		wanted: 0o100
	}
]);
