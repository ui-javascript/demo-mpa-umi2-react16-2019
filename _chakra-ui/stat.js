import react from "react"
import ReactDOM from "react-dom"

const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
};

import {
    theme,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    ThemeProvider,
} from "@chakra-ui/core";

ReactDOM.render(<ThemeProvider theme={customTheme}><StatGroup>
    <Stat>
        <StatLabel>Sent</StatLabel>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
            <StatArrow type="increase" />
            23.36%
        </StatHelpText>
    </Stat>

    <Stat>
        <StatLabel>Clicked</StatLabel>
        <StatNumber>45</StatNumber>
        <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
        </StatHelpText>
    </Stat>
</StatGroup></ThemeProvider>, mountNode)