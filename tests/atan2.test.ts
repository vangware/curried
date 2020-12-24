import { suite } from "@vangware/test";
import { atan2 } from "../src/atan2";

export default suite([
	{
		given: "a 10 and a 5",
		must: "return the angle from the X axis to X, Y",
		received: atan2(10)(5),
		wanted: 1.1071487177940904
	}
]);
