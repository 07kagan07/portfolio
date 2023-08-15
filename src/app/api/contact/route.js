import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  if (!email || !subject || !message || !name) {
    return new Response(JSON.stringify({error:"Missing parameters"}),{status: 400});
  }


  const emailSent = await sendEmail(email, name, subject, message);

  if (emailSent) {
    return new Response(JSON.stringify({message:"E-posta gönderildi"}),{status: 200});
  } else {
    return new Response(JSON.stringify({error: "E-posta gönderilirken hata oluştu"}),{status: 500});
  }
}
