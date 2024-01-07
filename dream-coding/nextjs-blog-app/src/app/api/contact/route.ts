import * as yup from 'yup';
import { sendEmail } from 'service/email';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  // eslint-disable-next-line
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: '메일을 보내는데 실패했음' }),
      { status: 400 }
    );
  }

  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음' }), {
          status: 200,
        })
    )
    .catch((error) => {
      return new Response(
        JSON.stringify({ message: '메일을 보내는데 실패했음' }),
        { status: 500 }
      );
    });
}
