import { Header } from "../../components/header/Header";
import { Summary } from "../../components/summary/Summary";
import { SearchForm } from "./components/searchForm/SearchForm";
import {
   PriceHighlight,
   TransactionsContainer,
   TransactionsTable
} from "./styles";

export function Transactions() {
   return (
      <div>
         <Header />
         <Summary />
         <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
               <tbody>
                  <tr>
                     <td width="50%">Desenvolvimento de site</td>
                     <td>
                        <PriceHighlight variant="income">
                           R$ 12.000,00
                        </PriceHighlight>
                     </td>
                     <td>Venda</td>
                     <td>13/04/2022</td>
                  </tr>
                  <tr>
                     <td width="50%">Hamburguer</td>
                     <td>
                        <PriceHighlight variant="outcome">
                           - R$ 59,00
                        </PriceHighlight>
                     </td>
                     <td>Alimentação</td>
                     <td>10/04/2022</td>
                  </tr>
               </tbody>
            </TransactionsTable>
         </TransactionsContainer>
      </div>
   )
}