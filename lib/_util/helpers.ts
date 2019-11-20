export const scopeHelper = (scope: string) => (subClass?: string): string => subClass ? `${scope}-${subClass}` : scope;

