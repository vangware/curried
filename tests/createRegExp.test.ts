import { suite } from "@vangware/test";
import { createRegExp } from "../src/createRegExp";

export default suite([
	{
		given: "a flags string and a regular expression",
		must: "return new regular expression",
		received: createRegExp("u")(".+"),
		wanted: /.+/u
	},
	{
		given: "a regular expression",
		must: "return new regular expression with same flags and source",
		received: createRegExp(/.+/u),
		wanted: /.+/u
	}
]);
