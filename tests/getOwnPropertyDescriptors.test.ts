import { suite } from "@vangware/test";
import { getOwnPropertyDescriptors } from "../src/getOwnPropertyDescriptors";

export default suite([
	{
		given: "an object with a foo property",
		must: "return property descriptors of that object",
		received: getOwnPropertyDescriptors({ foo: "bar" }),
		wanted: {
			foo: {
				value: "bar",
				writable: true,
				// TODO: Remove next comment when @vangware/test is updated
				// eslint-disable-next-line sort-keys
				enumerable: true,
				// TODO: Remove next comment when @vangware/test is updated
				// eslint-disable-next-line sort-keys
				configurable: true
			}
		}
	}
]);
