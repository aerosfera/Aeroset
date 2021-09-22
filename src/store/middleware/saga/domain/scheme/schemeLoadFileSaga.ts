import Scheme from "../../../../../data/scheme/Scheme";
import {call, put} from 'redux-saga/effects'
import {parseSchemeFileAsync} from "../../../../../logic/scheme/parseSchemeFileAsync";
import {activeSchemeIdChanged } from "../../../../domain/scheme/activeSchemeReducer";
import {schemeFileLoadError } from "../../../../ui/sections/scheme/schemeSection";
import {schemesAddOne} from "../../../../entity/schemes/schemesReducer";

export function* schemeLoadFileSaga(action: { payload: File | null; }) {
    const file = action.payload;

    if (!file)
        return;

    try {
        const scheme: Scheme = yield call(parseSchemeFileAsync, file);

        yield put(schemesAddOne(scheme));
        yield put(activeSchemeIdChanged(scheme.id));
    } catch (error) {
        yield put(schemeFileLoadError((error as Error)?.message));
    }
}