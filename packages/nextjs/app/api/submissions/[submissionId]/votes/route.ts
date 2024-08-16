import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { createOrUpdateVote, deleteVote } from "~~/services/database/repositories/votes";
import { authOptions } from "~~/utils/auth";

export async function POST(req: NextRequest, { params }: { params: { submissionId: number } }) {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user.role !== "admin") {
      return NextResponse.json({ error: "Only admins can vote" }, { status: 401 });
    }
    const { submissionId } = params;

    const { score } = (await req.json()) as { score: string };

    if (parseInt(score) < 0 || parseInt(score) > 10) {
      return NextResponse.json({ error: "Invalid score submitted" }, { status: 400 });
    }

    if (!session.user.address) {
      return NextResponse.json({ error: "Invalid admin address" }, { status: 400 });
    }

    const builderId = session.user.address;

    if (parseInt(score) === 0) {
      await deleteVote(builderId, submissionId);

      return NextResponse.json({ message: "Vote deleted!" }, { status: 200 });
    } else {
      const vote = await createOrUpdateVote({
        score: parseInt(score),
        submission: submissionId,
        builder: builderId,
      });

      return NextResponse.json({ vote, message: "Voted!" }, { status: 201 });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error processing form" }, { status: 500 });
  }
}