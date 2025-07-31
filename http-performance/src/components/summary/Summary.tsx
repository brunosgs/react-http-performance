import {
   ArrowCircleDownIcon,
   ArrowCircleUpIcon,
   CurrencyDollarIcon
} from '@phosphor-icons/react';
import { priceFormatter } from '../../utils/formatter';
import {
   SummaryCard,
   SummaryContainer
} from "./styles";
import { useSummary } from '../../hooks/useSummary';

export function Summary() {
   const summary = useSummary()

   return (
      <SummaryContainer>
         <SummaryCard>
            <header>
               <span>Entradas</span>
               <ArrowCircleUpIcon size={32} color="#00b37e" />
            </header>
            <strong>{priceFormatter.format(summary.income)}</strong>
         </SummaryCard>
         <SummaryCard>
            <header>
               <span>Saídas</span>
               <ArrowCircleDownIcon size={32} color="#f75a68" />
            </header>
            <strong>{priceFormatter.format(summary.outcome)}</strong>
         </SummaryCard>
         <SummaryCard variantColor='green'>
            <header>
               <span>Total</span>
               <CurrencyDollarIcon size={32} color="#fff" />
            </header>
            <strong>{priceFormatter.format(summary.total)}</strong>
         </SummaryCard>
      </SummaryContainer>
   )
}