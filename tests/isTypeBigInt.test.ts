import { suite } from "@vangware/test";
import { isTypeBigInt } from "../src/isTypeBigInt";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeBigInt(BigInt(1)) && isTypeBigInt(BigInt("1")),
		...wantedTrue
	},
	{
		given: "a boolean",
		received: isTypeBigInt(true) && isTypeBigInt(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isTypeBigInt(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeBigInt(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isTypeBigInt(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isTypeBigInt(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isTypeBigInt(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeBigInt(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isTypeBigInt("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			isTypeBigInt(Symbol("description")) && isTypeBigInt(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isTypeBigInt([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isTypeBigInt({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeBigInt(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isTypeBigInt(undefined),
		...wantedFalse
	}
]);
