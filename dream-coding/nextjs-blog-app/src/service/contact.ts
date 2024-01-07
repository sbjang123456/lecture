import type { EmailData } from 'service/email';

export async function sendContactEmail(email: EmailData) {
  const response = await fetch(`/api/contact`, {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // eslint-disable-next-line
  const data = await response.json();
  if (!response.ok) {
    // eslint-disable-next-line
    throw new Error(data.message || 'Something(Server) went wrong!');
  }

  // eslint-disable-next-line
  return data;
}
