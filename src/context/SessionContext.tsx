import { createContext, Dispatch, SetStateAction } from 'react';

// Define a type for user roles
type UserRole = 'mentor' | 'mentee' | null; // Adjust based on your application's roles

type SessionContextType = {
  session: boolean;
  setSession: Dispatch<SetStateAction<boolean>>;
  userRole: UserRole; // Add userRole to the context type
  setUserRole: Dispatch<SetStateAction<UserRole>>; // Add setter for userRole
};

export const SessionContext = createContext<SessionContextType | undefined>(undefined);
