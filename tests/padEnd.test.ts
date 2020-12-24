import { suite } from "@vangware/test";
import { padEnd } from "../src/padEnd";

const padEndZeroes = padEnd("0");
const padEndZeroes3 = padEndZeroes(3);

export default suite([
	{
		given: "a string",
		must: "return that string with padding at the end",
		received: padEndZeroes3("7"),
		wanted: "700"
	}
]);
