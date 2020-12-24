import { suite } from "@vangware/test";
import { localeCompare } from "../src/localeCompare";

const localeCompareDefault = localeCompare({});
const localeCompareDefaultEnUS = localeCompareDefault("en-US");
const localeCompareDefaultEnUSOrEnGB = localeCompareDefault(["en-US", "en-GB"]);
const localeCompareFooUS = localeCompareDefaultEnUS("foo");
const localeCompareFooUSOrGB = localeCompareDefaultEnUSOrEnGB("foo");

export default suite([
	{
		given: "two strings",
		must: "return correct comparison value for them (0)",
		received: localeCompareFooUS("foo"),
		wanted: 0
	},
	{
		given: "two strings",
		must: "return correct comparison value for them (-1)",
		received: localeCompareFooUS("bar"),
		wanted: -1
	},
	{
		given: "two strings",
		must: "return correct comparison value for them (1)",
		received: localeCompareFooUS("zzz"),
		wanted: 1
	},
	{
		given: "two strings",
		must: "return correct comparison value for them (0)",
		received: localeCompareFooUSOrGB("foo"),
		wanted: 0
	},
	{
		given: "two strings",
		must: "return correct comparison value for them (-1)",
		received: localeCompareFooUSOrGB("bar"),
		wanted: -1
	},
	{
		given: "two strings",
		must: "return correct comparison value for them (1)",
		received: localeCompareFooUSOrGB("zzz"),
		wanted: 1
	}
]);
