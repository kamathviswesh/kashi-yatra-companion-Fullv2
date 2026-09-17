"use client";
 
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
 
type Trip = {
  name: string;
  start_date: string;
  end_date: string;
  base_location: string;
};
 
export default function Home() {
  const [trip, setTrip] = useState<Trip | null>(null);
 
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("trips")
        .select("*")
        .single();
 
      if (data) setTrip(data);
    };
    load();
  }, []);
 
  if (!trip) return <main style={{padding:24}}>Loading...</main>;
 
  return (
    <main style={{padding:24}}>
      <p style={{color:"#8B5E3C"}}>🕉 HAR HAR MAHADEV</p>
 
      <h1>{trip.name}</h1>
 
      <p>{trip.start_date} → {trip.end_date}</p>
 
      <div style={{
        background:"#7A4A22",
        color:"#fff",
        padding:20,
        borderRadius:20,
        marginTop:20
      }}>
        <h2>{trip.base_location}</h2>
        <p>7 Pilgrims</p>
      </div>
    </main>
  );
}
