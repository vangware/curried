import { suite } from "@vangware/test";
import { parseIntDecimal } from "../src/parseIntDecimal";

export default suite([
	{
		given: "a string with value '100'",
		must: "return the number 100",
		received: parseIntDecimal("100"),
		wanted: 100
	}
]);
