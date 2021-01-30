import { suite } from "@vangware/test";
import { toExponential } from "../src/toExponential";

const defaultToExponential = toExponential(0);
const toExponential1 = toExponential(1);

export default suite([
	{
		given: "a 100 and an exponential of 0",
		must: "return the correct value",
		received: defaultToExponential(100),
		wanted: "1e+2"
	},
	{
		given: "a 100 and an exponential of 1",
		must: "return the correct value",
		received: toExponential1(100),
		wanted: "1.0e+2"
	}
]);
