import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadResume(file: File, folder: string): Promise<string | null> {
    const fileName = `${folder}/${Date.now()}_${file.name.replace(/\s+/g, "_")}`;

    const { error } = await supabase.storage
        .from("vconnect-resumes")
        .upload(fileName, file, { cacheControl: "3600", upsert: false });

    if (error) {
        console.error("Resume upload error:", error.message);
        return null;
    }

    const { data } = supabase.storage
        .from("vconnect-resumes")
        .getPublicUrl(fileName);

    return data.publicUrl;
}