import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as z from 'zod';
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { SearchFormContainer } from "./styles";

/**
 * Por que um componente renderiza?
 * 
 * - Hooks changed (mudou estado, contexto, reducer);
 * - Props changed (mudou propriedades);
 * - Parent rerendered (component pai renderizou);
 * 
 * Qual o fluxo de renderização?
 * 
 * 1. O react recria o HTML da interface do componente;
 * 2. Compara a versão do HTML recriada com a versão anterior;
 * 3. Se mudou alguma coisa, ele reescreve o HTML na tela.
 * 
 * Memo:
 * 0. Alterou os Hooks ou Props (Hooks changed ou Props changed) fazendo 
 * um deep comparison?
 * 0.1. Comparar a versão anterior dos hooks e props;
 * 0.2. Se mudou algo, permiti o novo fluxo de renderização. Se não,
 * não vai executar o fluxo de renderização.
 * 
 * OBS: Usar o memo, só quando o componente tiver uma complexidade na estrutura
 * de dados complexas. 
 */

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