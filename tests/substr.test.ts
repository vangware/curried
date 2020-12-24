import { suite } from "@vangware/test";
import { substr } from "../src/substr";

const substrLength3 = substr(3);
const substrLength3From1 = substrLength3(1);

export default suite([
	{
		given: "a string and a substr that goes from 1 with length 3",
		must: "return the correct substr",
		received: substrLength3From1("foobar"),
		wanted: "oob"
	}
]);
