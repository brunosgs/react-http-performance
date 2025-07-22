import {
   useEffect,
   useState
} from "react";
import { Header } from "../../components/header/Header";
import { Summary } from "../../components/summary/Summary";
import { SearchForm } from "./components/searchForm/SearchForm";
import {
   PriceHighlight,
   TransactionsContainer,
   TransactionsTable
} from "./styles";

interface Transaction {
   id: number
   description: string
   type: 'income' | 'outcome'
   price: number
   category: string
   createdAt: string
}

export function Transactions() {
   const [transactions, setTransactions] = useState<Transaction[]>([])

   // Forma de usar o async - await no useEffect
   async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()

      setTransactions(data)
   }

   useEffect(() => {
      loadTransactions()

      /* fetch('http://localhost:3333/transactions')
         .then(response => response.json())
         .then(data => {
            console.log(data)
         }); */
   }, [])

   return (
      <div>
         <Header />
         <Summary />
         <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
               <tbody>
                  {transactions.map(transaction => {
                     return (
                        <tr key={transaction.id}>
                           <td width="50%">{transaction.description}</td>
                           <td>
                              <PriceHighlight variant={transaction.type}>
                                 {transaction.price}
                              </PriceHighlight>
                           </td>
                           <td>{transaction.category}</td>
                           <td>{transaction.createdAt}</td>
                        </tr>
                     )
                  })}
               </tbody>
            </TransactionsTable>
         </TransactionsContainer>
      </div>
   )
}