import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';
import Signin from 'components/Signin';
import { authOptions } from 'pages/api/auth/[...nextauth]';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
    // return { redirect: { destination: '/' } };
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="mt-24 flex justify-center">
      <Signin providers={providers} callbackUrl={callbackUrl} />
    </section>
  );
}
