import { Props } from './_typing';

export const DEFAULT_PROPS: Props = {
  primaryColor: 'primary',
  secondaryColor: 'secondary',
  backgroundColor: 'transparent',
  borderRadius: 'unset',
  size: 14,
};

export const extractProps = (props: Props): Required<Props> => {
  const formattedEntries = Object.entries({ ...DEFAULT_PROPS, ...props }).map(([key, value]) => {
    switch (value) {
      case 'transparent':
        return [key, 'transparent'];
      case 'primary':
        return [key, 'rgba(var(--primary-color))'];
      case 'sedondary':
        return [key, 'rgba(var(--sedondary-color))'];
      case 'surface':
        return [key, 'rgba(var(--surface-color))'];
      case 'charcoal':
        return [key, 'rgba(var(--charcoal))'];
      case 'small':
        return [key, 24];
      case 'regular':
        return [key, 40];
      case 'medium':
        return [key, 50];
      case 'large':
        return [key, 70];
      case 'very-large':
        return [key, 90];
      default:
        return [key, value];
    }
  });
  return Object.fromEntries(formattedEntries);
};
