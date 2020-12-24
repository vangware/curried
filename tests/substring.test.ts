import { suite } from "@vangware/test";
import { substring } from "../src/substring";

const substringTo3 = substring(3);
const substringTo3From1 = substringTo3(1);

export default suite([
	{
		given: "a string and a substring that goes from 1 to 3",
		must: "return the correct substring",
		received: substringTo3From1("foobar"),
		wanted: "oo"
	}
]);
