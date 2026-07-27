const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "All fields are required."
        })
      };
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
      `
    });

    if (error) {
      console.error(error);

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to send email."
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        id: data.id
      })
    };

  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Something went wrong."
      })
    };
  }
};
