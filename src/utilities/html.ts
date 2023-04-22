export function html(strings: TemplateStringsArray, ...values: unknown[]) {
  return strings.map((str, i) => str + (values[i] ?? '')).join('')
}