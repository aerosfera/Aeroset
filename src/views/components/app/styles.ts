import styled from "styled-components";
import {ThemeColors} from "../theme/ThemeColors";
import {appSizes, themeColor} from "../theme/themeAccessors";
import {DefaultTheme} from "../../types/theme";

export const Area = styled.main`
  ${props => props.theme.breakpoints.up("sm")} {
    height: calc(100vh - ${props => appSizes('header')(props) + appSizes('footer')(props) + appSizes('instrumentalPanel')(props)}px);
  }

  ${props => props.theme.breakpoints.down("sm")} {
    height: calc(100vh - ${props => appSizes('headerMobile')(props)}px);
  }

  background: ${themeColor(ThemeColors.lightBlue)};
`

export const AuthContainer = styled.section<DefaultTheme>`
  width: 100vw;
  height: 100vh;
`

export const AppMainSection = styled.section<DefaultTheme>`
`
