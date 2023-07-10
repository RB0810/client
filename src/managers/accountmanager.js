import supabase from "../config/supabaseClient";

export async function LoginAuth(event){
    const { data, error } = await supabase
    .from(`${event.Type}Users`)
    .select('*')
    .eq(`${event.Type}Email`, event.ID);

        
    if (error) {
        throw error;
    }
        
    const user = data[0];
    
    if (user && user[`${event.Type}Password`] === event.password) {
        const redirectUrl = `/${event.Type.toLowerCase()}landingpage/${user[`${event.Type}ID`]}`;
        window.location.href = redirectUrl;
    } else {
        throw new Error('Invalid credentials');
    }
        
}
