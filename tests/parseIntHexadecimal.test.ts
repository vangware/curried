import { suite } from "@vangware/test";
import { parseIntHexadecimal } from "../src/parseIntHexadecimal";

export default suite([
	{
		given: "a string with value '100'",
		must: "return the number 256 (0x100)",
		received: parseIntHexadecimal("100"),
		wanted: 0x100
	}
]);
