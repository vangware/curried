import { suite } from "@vangware/test";
import { is } from "../src/is";

const value = "foo";
const valueCopy = value;
const otherValue = "bar";

export default suite([
	{
		given: "two equal values",
		must: "return true",
		received: is(value)(valueCopy),
		wanted: true
	},
	{
		given: "two different dates",
		must: "return false",
		received: is(value)(otherValue),
		wanted: false
	},
	{
		given: "two equal objects",
		must: "return false",
		received: is({})({}),
		wanted: false
	},
	{
		given: "two equal arrays",
		must: "return false",
		received: is([])([]),
		wanted: false
	}
]);
