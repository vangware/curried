import { suite } from "@vangware/test";
import { NFC } from "../src/constants";
import { normalize } from "../src/normalize";

const nfcNormalize = normalize(NFC);
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

export default suite([
	{
		given: "an array of numbers",
		must: "return the smallest value",
		received: nfcNormalize(name2),
		wanted: nfcNormalize(name1)
	}
]);
