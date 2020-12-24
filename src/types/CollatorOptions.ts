import type { CaseFirstFormat } from "./CaseFirstFormat";
import type { LocaleMatcher } from "./LocaleMatcher";
import type { SensitivityFormat } from "./SensitivityFormat";
import type { UsageFormat } from "./UsageFormat";

/**
 * Internationalization Collator options.
 */
export type CollatorOptions = {
	/**
	 * Whether upper case or lower case should sort first.
	 */
	readonly caseFirst?: CaseFirstFormat;

	/**
	 * Whether punctuation should be ignored.
	 */
	readonly ignorePunctuation?: boolean;

	/**
	 * The locale matching algorithm to use.
	 * Default is "best fit".
	 */
	readonly localeMatcher?: LocaleMatcher;

	/**
	 * Whether numeric collation should be used, such that "1" < "2" < "10".
	 */
	readonly numeric?: boolean;

	/**
	 * Which differences in the strings should lead to non-zero result values.
	 * - `"accent"`: Only strings that differ in base letters or accents and
	 * other diacritic marks compare as unequal.
	 * - `"base"`: Only strings that differ in base letters compare as unequal.
	 * - `"case"`: Only strings that differ in base letters or case compare as
	 * unequal.
	 * - `"variant"`: Strings that differ in base letters, accents and other
	 * diacritic marks, or case compare as unequal. Other differences may also
	 * be taken into consideration.
	 */
	readonly sensitivity?: SensitivityFormat;

	/**
	 * Whether the comparison is for sorting or for searching for matching
	 * strings. Default is "sort".
	 */
	readonly usage?: UsageFormat;
};
