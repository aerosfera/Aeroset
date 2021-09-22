import * as React from "react";
import {withTheme} from "styled-components";
import IoC from "../../../../../infrastructure/ioc/IoC";
import ColorGradientService from "../../../../../services/colorGradient/GradientService";
import {COLOR_GRADIENT_SERVICE} from "../../../../../infrastructure/ioc/ServiceTypes";
import {DefaultTheme} from "../../../../types/theme";

const ColorGradientView: React.FC<DefaultTheme> = () => {
    const colorGradientService = IoC.get<ColorGradientService>(COLOR_GRADIENT_SERVICE);
    const linearGradientCss = colorGradientService.getGradientAsCSSProperty();

    return (
        <div style={{background: linearGradientCss, height: 150, width: 50, marginTop: 16, marginLeft: 16}}/>
    );
}

export default withTheme(ColorGradientView);