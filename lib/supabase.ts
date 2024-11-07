import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient} from '@supabase/supabase-js'

const supabaseURL = 'https://slrkyidmhaucjsurpxxt.supabase.co'
const supabaseAnonkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscmt5aWRtaGF1Y2pzdXJweHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTcxNTUsImV4cCI6MjA0NTUzMzE1NX0.w0x0EUh7Lu5aYOfNsh0DvHcZCSAtF9T0LPOEa2Oo-_s'

export const supabase=  createClient(supabaseURL, supabaseAnonkey, {
    auth:{
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
})
