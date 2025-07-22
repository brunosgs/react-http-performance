import {
   ArrowCircleDownIcon,
   ArrowCircleUpIcon,
   CurrencyDollarIcon
} from '@phosphor-icons/react';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import {
   SummaryCard,
   SummaryContainer
} from "./styles";

export function Summary() {
   const { transactions } = useContext(TransactionsContext)
   console.log(transactions)

   return (
      <SummaryContainer>
         <SummaryCard>
            <header>
               <span>Entradas</span>
               <ArrowCircleUpIcon size={32} color="#00b37e" />
            </header>
            <strong>R$ 17.400,00</strong>
         </SummaryCard>
         <SummaryCard>
            <header>
               <span>Saídas</span>
               <ArrowCircleDownIcon size={32} color="#f75a68" />
            </header>
            <strong>R$ 17.400,00</strong>
         </SummaryCard>
         <SummaryCard variantColor='green'>
            <header>
               <span>Total</span>
               <CurrencyDollarIcon size={32} color="#fff" />
            </header>
            <strong>R$ 17.400,00</strong>
         </SummaryCard>
      </SummaryContainer>
   )
}