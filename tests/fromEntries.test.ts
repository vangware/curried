import { suite } from "@vangware/test";
import { fromEntries } from "../src/fromEntries";

const key = "key";
const value = "value";

export default suite([
	{
		given: "an array of entries [key, value]",
		must: "return an object with the shape { key: value }",
		received: fromEntries([[key, value]]),
		wanted: { [key]: value }
	}
]);
