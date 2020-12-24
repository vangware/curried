import { suite } from "@vangware/test";
import { getOwnPropertySymbols } from "../src/getOwnPropertySymbols";

const fooSymbol = Symbol("foo");

export default suite([
	{
		given: "an object with a foo symbol property",
		must: "return symbol properties array",
		received: getOwnPropertySymbols({ [fooSymbol]: "foo" }),
		wanted: [fooSymbol]
	}
]);
