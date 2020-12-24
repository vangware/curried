import { suite } from "@vangware/test";
import { imul } from "../src/imul";

const double = imul(2);

export default suite([
	{
		given: "a 2 and a 3",
		must: "return result of 32-bit multiplication of 2 and 3",
		received: double(3),
		wanted: 6
	}
]);
