import { suite } from "@vangware/test";
import { getOwnPropertyDescriptors } from "../src/getOwnPropertyDescriptors";

export default suite([
	{
		given: "an object with a foo property",
		must: "return property descriptors of that object",
		received: getOwnPropertyDescriptors({ foo: "bar" }),
		wanted: {
			foo: {
				configurable: true,
				enumerable: true,
				value: "bar",
				writable: true
			}
		}
	}
]);
