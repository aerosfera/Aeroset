import {withTheme} from "styled-components";
import * as React from "react";
import {useAppDispatch} from "../../../../../store/store";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {FormHelperText, MenuItem} from "@material-ui/core";
import {FormControlStyled, SelectStyled} from "./style";
import {cameraModeChanged, cameraTargetModeSelector} from "../../../../../store/ui/camera/cameraReducer";
import {CameraMode} from "../../../../types/CameraMode";
import {ChangeEvent} from "../../../../types/event";
import {DefaultTheme} from "../../../../types/theme";

const SetupCameraMode: React.FC<DefaultTheme> = () => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    const cameraMode = useSelector(cameraTargetModeSelector)

    const handleChange = (event: ChangeEvent) => {
        dispatch(cameraModeChanged(event.target.value as CameraMode))
    };

    return (
        <React.Fragment>
            <FormControlStyled>
                <SelectStyled
                    value={cameraMode}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}>
                    <MenuItem value={CameraMode.Orthographic}>{t('orthographic')}</MenuItem>
                    <MenuItem value={CameraMode.Perspective}>{t('perspective')}</MenuItem>
                </SelectStyled>
                <FormHelperText>{t('camera')}</FormHelperText>
            </FormControlStyled>

        </React.Fragment>
    )
}

export default withTheme(SetupCameraMode)