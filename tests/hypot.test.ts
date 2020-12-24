import { suite } from "@vangware/test";
import { hypot } from "../src/hypot";

export default suite([
	{
		given: "a 1 and a 2",
		must: "return the square root of the sum of squares of given legs",
		received: hypot([1, 2]),
		wanted: 2.23606797749979
	}
]);
