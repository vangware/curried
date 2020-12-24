import { suite } from "@vangware/test";
import { padStart } from "../src/padStart";

const padStartZeroes = padStart("0");
const padStartZeroes3 = padStartZeroes(3);

export default suite([
	{
		given: "a string",
		must: "return that string with padding at the start",
		received: padStartZeroes3("7"),
		wanted: "007"
	}
]);
