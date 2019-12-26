import cs from 'classnames';

export const scopeHelper = (scope: string) => (subClass?: string, ...rest: any[]): string => cs(subClass ? `${scope}-${subClass}` : scope, ...rest);

