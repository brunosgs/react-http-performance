import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as z from 'zod';
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { SearchFormContainer } from "./styles";

const searchFromSchema = z.object({
   query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFromSchema>

export function SearchForm() {
   const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
      return context.fetchTransactions
   })

   const {
      register,
      handleSubmit,
      formState: {
         isSubmitting
      }
   } = useForm<SearchFormInputs>({
      resolver: zodResolver(searchFromSchema)
   })

   async function handleSearchTransactions(data: SearchFormInputs) {
      await fetchTransactions(data.query)
   }

   return (
      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
         <input type="text"
            placeholder="Busque por transações"
            {...register('query')}
         />
         <button type="submit" disabled={isSubmitting}>
            <MagnifyingGlassIcon size={20} />
            Buscar
         </button>
      </SearchFormContainer>
   )
}