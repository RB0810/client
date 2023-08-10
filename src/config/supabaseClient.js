const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
console.log(process.env.REACT_APP_SUPABASE_KEY);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
