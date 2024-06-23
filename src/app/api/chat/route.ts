import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  // OpenAI API와 통신 로직 (여기서는 예시로 고정된 응답을 사용)
  const reply = `You said: ${message}`;

  return NextResponse.json({ reply });
}
