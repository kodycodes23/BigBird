import {supabase} from "../lib/supabase"
import { useUserStore } from "@/store/useUserStore"

export default function supabaseAuth(){
    const {session, setSession, setUser} = useUserStore();

    async function signInWithEmail(email: string, password: string ){
        const{error, data} = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        return{
            error,
            data,
        };
    }

    async function signUpWithEmail(email: string, password: string ){
        const{error, data} = await supabase.auth.signUp({
            email,
            password,
        });

        return{
            error,
            data,
        };
    }

    async function signOut(){
        const{error} = await supabase.auth.signOut();

        if(!error){
            setSession(null);
            setUser(null);
        }
        return{
            error,
        };
    }

    async function getUserProfile(){
       if(!session?.user) throw new Error("No User on the session!");
       const{ data, error, status} = await supabase
       .from("profiles")
       .select(`username, fullname, avatar_url, website`)
       .eq("id", session?.user.id)
       .single();
        return{
            data,
            error,
            status,
        };
    }

    async function updateUserProfile(
        username: string,
        fullname: string,
        avatarUrl: string,
        website: string,
    ){
        if(!session?.user) throw new Error("No User on the session!");
        const updates = {
            id: session?.user.id,
            username,
            full_name: fullname,
            website: website,
            avatar_url: avatarUrl,
            updated_at:new Date(),
        }
        const {error} = await supabase.from("profiles").upsert(updates)
        return{
             error,
         };
     }

     return{
        signInWithEmail,
        signUpWithEmail,
        signOut,
        getUserProfile,
        updateUserProfile,
     };

}
