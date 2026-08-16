import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    });

    // Fallback if empty
    if (testimonials.length === 0) {
      return NextResponse.json([
        {
          id: "1",
          agentName: "Agent Carter",
          content: "The Campus Ambassador initiative gave me the leadership skills to assemble my own team.",
          avatarUrl: "https://i.pravatar.cc/150?img=5"
        },
        {
          id: "2",
          agentName: "Agent Coulson",
          content: "A truly extraordinary experience. Networking with top-tier talent was incredible.",
          avatarUrl: "https://i.pravatar.cc/150?img=11"
        },
        {
          id: "3",
          agentName: "Agent Romanoff",
          content: "Strategic missions, broadcasting to sectors, it was all perfectly executed.",
          avatarUrl: "https://i.pravatar.cc/150?img=9"
        }
      ]);
    }

    return NextResponse.json(testimonials);
  } catch {
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}
