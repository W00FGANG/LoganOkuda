import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, subject, message, website, recaptchaToken } = JSON.parse(event.body || "{}");

    // 1. Honeypot check: bots automatically fill hidden fields
    if (website) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Spam detected." }),
      };
    }

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "All fields are required.",
        }),
      };
    }

    // 2. Google reCAPTCHA v2 server-side verification
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "Please complete the reCAPTCHA verification.",
          }),
        };
      }

      const verifyParams = new URLSearchParams({
        secret: recaptchaSecret,
        response: recaptchaToken,
      });

      const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: verifyParams.toString(),
      });

      const verifyData = await verifyResponse.json();
      if (!verifyData.success) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "reCAPTCHA verification failed. Please try again.",
          }),
        };
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Website Contact <website@logynokuda.com>",
      to: ["logokuda03@gmail.com"],
      replyTo: email,
      subject: `Website Contact: ${subject}`,
      html: `
        <h2>New Website Contact</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to send email.",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        id: data.id,
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Something went wrong.",
      }),
    };
  }
};
