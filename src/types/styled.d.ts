import 'styled-components';
import { DefaultTheme } from 'styled-components';

import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
