import { suite } from "@vangware/test";
import { of } from "../src/of";

export default suite([
	{
		given: "a string",
		must: "return an array with that string on it",
		received: of("foo"),
		wanted: ["foo"]
	}
]);
