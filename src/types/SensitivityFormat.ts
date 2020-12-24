import type { ACCENT, BASE, CASE, VARIANT } from "../constants";

/**
 * Which differences in the strings should lead to non-zero result values.
 */
export type SensitivityFormat =
	| typeof ACCENT
	| typeof BASE
	| typeof CASE
	| typeof VARIANT;
