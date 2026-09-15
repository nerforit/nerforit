"use client";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Logo from "@/components/Logo";
import { supabaseBrowser } from "@/lib/supabase";

export default function AdminLogin(){
 const router=useRouter(); const params=useSearchParams(); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(params.get("error")==="unauthorized"?"Akun ini tidak memiliki akses admin.":""); const [loading,setLoading]=useState(false);
 async function submit(e:FormEvent){e.preventDefault();setLoading(true);setError("");const {error}=await supabaseBrowser().auth.signInWithPassword({email,password});if(error){setError(error.message);setLoading(false);return}router.replace("/admin");router.refresh();}
 return <div className="login-page"><form className="login-card" onSubmit={submit}><Logo/><h1>Admin Login</h1><p>Masuk untuk mengelola Nerforit.</p>{error&&<div className="login-error">{error}</div>}<div className="field"><label>Email</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="admin@nerforit.com"/></div><div className="field"><label>Password</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="••••••••"/></div><button className="btn btn-dark wide-btn" disabled={loading}>{loading?"Memproses...":"Masuk ke Dashboard"}</button></form></div>
}