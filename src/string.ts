export function strTrimStart(value: string, trim?: string): string;
export function strTrimStart(value: undefined, trim?: string): undefined;
export function strTrimStart(
  value: string | undefined,
  trim = " ",
): string | undefined {
  if (!value) return value;

  while (value.startsWith(trim)) {
    value = value.substring(trim.length);
  }

  return value;
}

export function strTrimEnd(value: string, trim?: string): string;
export function strTrimEnd(value: undefined, trim?: string): undefined;
export function strTrimEnd(
  value: string | undefined,
  trim = " ",
): string | undefined {
  if (!value) return value;

  while (value.endsWith(trim)) {
    value = value.substring(0, value.length - trim.length);
  }

  return value;
}

export function strTrim(value: string, trim?: string): string;
export function strTrim(value: undefined, trim?: string): undefined;
export function strTrim(
  value: string | undefined,
  trim = " ",
): string | undefined {
  if (!value) return value;

  return strTrimStart(
    strTrimEnd(value, trim),
    trim,
  );
}

export function strCapitalize(value: string): string;
export function strCapitalize(value: undefined): undefined;
export function strCapitalize(value: string | undefined): string | undefined {
  if (!value || value.length <= 0) return value;

  return value.charAt(0).toUpperCase() + value.slice(1);
}
