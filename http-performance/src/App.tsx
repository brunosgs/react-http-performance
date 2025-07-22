import isPropValid from '@emotion/is-prop-valid';
import {
   StyleSheetManager,
   ThemeProvider
} from "styled-components";
import { Transactions } from "./pages/transactions/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
   return (
      <StyleSheetManager enableVendorPrefixes
         shouldForwardProp={(propName, elementToBeRendered) => {
            return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
         }}>
         <ThemeProvider theme={defaultTheme}>
            <Transactions />
            <GlobalStyle />
         </ThemeProvider>
      </StyleSheetManager>
   )
}