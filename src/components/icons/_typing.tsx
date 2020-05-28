type Color = 'primary' | 'secondary' | 'charcoal' | 'surface' | 'transparent' | string;
type Sizes = 'small' | 'regular' | 'medium' | 'large' | 'very-large' | number;

export interface Props {
  primaryColor?: Color;
  secondaryColor?: Color;
  backgroundColor?: Color;
  borderRadius?: string;
  size?: Sizes;
}
