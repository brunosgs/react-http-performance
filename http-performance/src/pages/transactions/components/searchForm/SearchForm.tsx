import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFromSchema = z.object({
   query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFromSchema>

export function SearchForm() {
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
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log(data)
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