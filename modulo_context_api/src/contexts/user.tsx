import { createContext, useState, type ReactNode } from "react";

type UserContextData = {
   aluno: string;
   qtdAlunos: number;
}

interface UserProviderProps {
   children: ReactNode;
}


export const UserContext = createContext({} as UserContextData);

function UserProvider({ children }: UserProviderProps) {

   const [aluno, setAluno] = useState("Maria Silva")
   const [qtdAlunos, setQtdAlunos] = useState(30)
   return (
      <UserContext.Provider value={{ aluno, qtdAlunos }}>

         {children}

      </UserContext.Provider>
   )
}

export default UserProvider;