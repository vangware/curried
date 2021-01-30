import { suite } from "@vangware/test";
import { toFixed } from "../src/toFixed";

const toFixed0 = toFixed(0);
const toFixed2 = toFixed(2);

export default suite([
	{
		given: "a 100 and an fraction of 0",
		must: "return the correct value",
		received: toFixed0(100),
		wanted: "100"
	},
	{
		given: "a 100 and an fraction of 2",
		must: "return the correct value",
		received: toFixed2(100),
		wanted: "100.00"
	}
]);
