from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import resend

load_dotenv()

app = Flask(__name__)
CORS(app)

resend.api_key = os.environ.get("RESEND_API_KEY")


@app.route("/contact", methods=["POST"])
def contact():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"success": False, "message": "All fields are required"}), 400

    try:
        resend.Emails.send(
            {
                "from": "Portfolio <onboarding@resend.dev>",
                "to": "knshkainth2002@gmail.com",
                "subject": "New Portfolio Message",
                "reply_to": email,
                "html": f"""
                    <h3>New Message from Portfolio</h3>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Message:</strong><br>{message}</p>
                """,
            }
        )

        return jsonify({"success": True, "message": "Message sent successfully!"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
