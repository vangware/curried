import { suite } from "@vangware/test";
import { parseIntBinary } from "../src/parseIntBinary";

export default suite([
	{
		given: "a string with value '100'",
		must: "return the number 4 (0b100)",
		received: parseIntBinary("100"),
		wanted: 0b100
	}
]);
