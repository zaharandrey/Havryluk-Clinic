/** A value is a placeholder if it is empty or contains a [bracketed] token. */
export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return true;
  return /\[[^\]]*\]/.test(value);
}

export const isFilled = (value: string | null | undefined): value is string =>
  !isPlaceholder(value);
