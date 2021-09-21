import {withTheme} from "styled-components";
import * as React from "react";
import {useAppDispatch} from "../../../../../store/store";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {Checkbox, CheckboxProps, withStyles} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import {FormControlLabelStyled} from "./style";
import {setTargetAxisVisibility, targetAxisVisibilitySelector} from "../../../../../store/ui/scene/sceneReducer";
import {Scene} from "@babylonjs/core/scene";

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const SetupAxis: React.FC<{ theme: Theme, scene: Scene }> = () => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    const axisIsVisible = useSelector(targetAxisVisibilitySelector)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTargetAxisVisibility(event.target.checked))
    };

    return (
        <React.Fragment>
            <FormControlLabelStyled
                control={
                    <GreenCheckbox checked={axisIsVisible} onChange={handleChange}/>
                }
                label={t('showAxisOnCameraTarget')}
            />
        </React.Fragment>
    )

}

export default withTheme(SetupAxis)