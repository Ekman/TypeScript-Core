export function strTrimStart(value: string, trim = " "): string {
  while (value.startsWith(trim)) {
    value = value.substring(trim.length);
  }

  return value;
}

export function strTrimEnd(value: string, trim = " "): string {
  while (value.endsWith(trim)) {
    value = value.substring(0, value.length - trim.length);
  }

  return value;
}

export function strTrim(value: string, trim = " "): string {
  return strTrimStart(
    strTrimEnd(value, trim),
    trim,
  );
}

export function strCapitalize(value: string): string {
  if (value.length <= 0) {
    return value;
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}
