import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const stats = await prisma.liveStats.findMany();
    
    // Default fallback values if DB is empty
    const defaultStats = {
      recruits: 1542,
      active_agents: 300,
      sectors: 45
    };

    const statsMap = stats.reduce((acc: Record<string, number>, stat: { key: string; value: number }) => {
      acc[stat.key as keyof typeof defaultStats] = stat.value;
      return acc;
    }, defaultStats as Record<string, number>);

    return NextResponse.json(statsMap);
  } catch {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
