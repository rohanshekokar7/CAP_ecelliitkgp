import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: stats, error } = await supabase.from('LiveStats').select('*');
    
    if (error) throw error;
    
    // Default fallback values if DB is empty
    const defaultStats = {
      recruits: 1542,
      active_agents: 300,
      sectors: 45
    };

    const statsMap = (stats || []).reduce((acc: Record<string, number>, stat: { key: string; value: number }) => {
      acc[stat.key as keyof typeof defaultStats] = stat.value;
      return acc;
    }, defaultStats as Record<string, number>);

    return NextResponse.json(statsMap);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
