import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { prompt } = data;
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
  });

  const input = {
    prompt: prompt,
    output_format: 'png',
    output_quality: 100,
    aspect_ratio: '1:1',
  };

  const output: any = await replicate.run('black-forest-labs/flux-schnell', {
    input,
  });
  console.log(output);
  //=> ["https://replicate.delivery/yhqm/hcDDSNf633zeDUz9sWkKfaf...
  return NextResponse.json({ imageUrl: output[0] });
}
