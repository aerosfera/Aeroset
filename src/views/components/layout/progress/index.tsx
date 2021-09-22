import React, { useEffect, useState} from 'react';
import {ThemeProvider, withTheme} from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import IoC from "../../../../infrastructure/ioc/IoC";
import {EventBusService} from "../../../../services/eventBus/EventBusService";
import {EVENT_BUS_SERVICE} from "../../../../infrastructure/ioc/ServiceTypes";
import {START_PROGRESS_EVENT, STOP_PROGRESS_EVENT} from "../../../../services/eventBus/EventTypes";
import {ProgressContainer} from "./style";
import {purple} from "@material-ui/core/colors";
import {DefaultTheme} from "../../../types/theme";

const Progress: React.FC<DefaultTheme> = (props: DefaultTheme) => {
    const { theme } = props;
    const [state, setState] = useState<{
        title: string,
        isOpen: boolean
    }>({
        title: "",
        isOpen: false
    })
    useEffect(() => {
        const eventBus = IoC.get<EventBusService>(EVENT_BUS_SERVICE)
        eventBus.subscribe(START_PROGRESS_EVENT, startProgressHandler)
        eventBus.subscribe(STOP_PROGRESS_EVENT, stopProgressHandler)

        return () => {
            eventBus.unsubscribe(START_PROGRESS_EVENT, startProgressHandler)
            eventBus.unsubscribe(STOP_PROGRESS_EVENT, stopProgressHandler)
        }
    })

    function startProgressHandler(events: any[]) {
        const title: string = events[0] as string
        setState({title: title, isOpen: true})
    }

    function stopProgressHandler() {
        setState({title: "", isOpen: false})
    }

    const {title, isOpen} = state
    const innerTheme = createMuiTheme({
        palette: {
            primary: {
                main: purple[500],
            },
            secondary: {
                main: '#42baf5'
            }
        },
    });
    return (
        <ThemeProvider theme={innerTheme}>
            <ProgressContainer Theme={theme} isOpen={isOpen}>
                <LinearProgress title={title} color={"secondary"}/>
            </ProgressContainer>
        </ThemeProvider>
    );
}

export default withTheme(Progress);