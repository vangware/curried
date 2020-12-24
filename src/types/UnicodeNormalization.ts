import type { NFC, NFD, NFKC, NFKD } from "../constants";

/**
 * Types of unicode normalization.
 */
export type UnicodeNormalization =
	| typeof NFC
	| typeof NFD
	| typeof NFKC
	| typeof NFKD;
