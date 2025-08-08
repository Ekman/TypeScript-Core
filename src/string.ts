import { NullOrUndefined, nullToUndefined } from "./types";

export function strTrimStart(value: string, trim?: string): string;
export function strTrimStart(value: NullOrUndefined, trim?: string): undefined;
export function strTrimStart(
  value: string | NullOrUndefined,
  trim = " ",
): string | undefined {
  value = nullToUndefined(value);

  if (!value) return value;

  while (value.startsWith(trim)) {
    value = value.substring(trim.length);
  }

  return value;
}

export function strTrimEnd(value: string, trim?: string): string;
export function strTrimEnd(value: NullOrUndefined, trim?: string): undefined;
export function strTrimEnd(
  value: string | NullOrUndefined,
  trim = " ",
): string | undefined {
  value = nullToUndefined(value);

  if (!value) return value;

  while (value.endsWith(trim)) {
    value = value.substring(0, value.length - trim.length);
  }

  return value;
}

export function strTrim(value: string, trim?: string): string;
export function strTrim(value: NullOrUndefined, trim?: string): undefined;
export function strTrim(
  value: string | NullOrUndefined,
  trim = " ",
): string | undefined {
  value = nullToUndefined(value);

  if (!value) return value;

  return strTrimStart(
    strTrimEnd(value, trim),
    trim,
  );
}

export function strCapitalize(value: string): string;
export function strCapitalize(value: NullOrUndefined): undefined;
export function strCapitalize(
  value: string | NullOrUndefined,
): string | undefined {
  value = nullToUndefined(value);

  if (!value || value.length <= 0) return value;

  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function strToBool(value: string | NullOrUndefined): boolean {
  if (!value) return false;

  value = value.toLowerCase();

  if (value === "false" || value === "0") return false;

  return Boolean(value);
}
