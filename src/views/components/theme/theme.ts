import { Theme } from '@material-ui/core/styles'
import createAppTheme from "./createAppTheme";
import {defaultAppThemeValues} from "./defaultAppThemeValues";

const theme: Theme = createAppTheme(defaultAppThemeValues)
export default theme;