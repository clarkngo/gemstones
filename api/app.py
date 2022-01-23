from flask import Flask, jsonify

@app.route("/me")
def me_api():
    user_dict = {
        "username": "cj",
        "theme": "dark",
    }
    return jsonify(user_dict)
