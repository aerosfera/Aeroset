import * as React from "react";
import IoC from "../../../infrastructure/ioc/IoC";
import VersionService from "../../../services/version/VersionService";
import {VERSION_SERVICE} from "../../../infrastructure/ioc/ServiceTypes";
import {useTranslation} from "react-i18next";

const loadVersion = () => {
    const versionService = IoC.get<VersionService>(VERSION_SERVICE)
    return versionService.GetVersion();
}

interface Props {
    isDark?: boolean;
}

const Version: React.FC<Props> = (props: Props) => {
    const {t} = useTranslation()
    const {isDark} = props
    return (
        <div style={{
            color: isDark ? "black" : "white"
        }}>     {t('version')}
            : {loadVersion()}
        </div>
    );
}

Version.defaultProps = {
    isDark: false,
}

export default Version;