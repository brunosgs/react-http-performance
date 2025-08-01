import {
   createContext,
   useEffect,
   useState,
   type ReactNode
} from "react";

interface Transaction {
   id: number
   description: string
   type: 'income' | 'outcome'
   price: number
   category: string
   createdAt: string
}

interface TransactionContextType {
   transactions: Transaction[]
}

interface TransactionsProviderProps {
   children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
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
      <TransactionsContext.Provider value={{ transactions }}>
         {children}
      </TransactionsContext.Provider>
   )
}