import { suite } from "@vangware/test";
import { parseInt } from "../src/parseInt";

export default suite([
	{
		given: "a string with value '10' and a radix of 16",
		must: "return the number 16 (0x10)",
		received: parseInt(16)("10"),
		wanted: 0x10
	},
	{
		given: "a string with value '10' and a radix of 10",
		must: "return the number 10",
		received: parseInt(10)("10"),
		wanted: 10
	},
	{
		given: "a string with value '10' and a radix of 2",
		must: "return the number 2",
		received: parseInt(2)("10"),
		wanted: 2
	}
]);
