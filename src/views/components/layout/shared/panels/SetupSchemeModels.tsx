import * as React from "react";
import {useAppDispatch} from "../../../../../store/store";
import {useTranslation} from "react-i18next";
import {FormControlStyled, SelectStyled} from "./style";
import {FormHelperText, MenuItem} from "@material-ui/core";
import {withTheme} from "styled-components";
import {SchemeModelType} from "../../../../types/SchemeModelType";
import {useSelector} from "react-redux";
import {schemeActiveModelSelector, setActiveModel} from "../../../../../store/ui/panels/models/schemeModelsPanel";
import {ChangeEvent} from "../../../../types/event";
import {DefaultTheme} from "../../../../types/theme";

const SetupSchemeModels: React.FC<DefaultTheme> = () => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation()

    const activeModel = useSelector(schemeActiveModelSelector);

    const handleChange = (event: ChangeEvent) => {
        const value = event.target.value as SchemeModelType;

        switch (value) {
            case SchemeModelType.Pressure:
                break;
            case SchemeModelType.Air:
                break;
            case SchemeModelType.None:
                break;
        }

        dispatch(setActiveModel(value));
    };

    return (
        <div>
            <FormControlStyled>
                <SelectStyled
                    value={activeModel}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}>
                    <MenuItem value={SchemeModelType.None}>{t('none')}</MenuItem>
                    <MenuItem value={SchemeModelType.Pressure}>{t('pressure')}</MenuItem>
                    <MenuItem value={SchemeModelType.Air}>{t('models_air')}</MenuItem>
                </SelectStyled>
                <FormHelperText>{t('model')}</FormHelperText>
            </FormControlStyled>

        </div>
    );
}

export default withTheme(SetupSchemeModels);