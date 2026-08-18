import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: testimonials, error } = await supabase
      .from('Testimonial')
      .select('*')
      .eq('isActive', true)
      .order('createdAt', { ascending: false });

    if (error) throw error;

    // Fallback if empty
    if (!testimonials || testimonials.length === 0) {
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
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}
