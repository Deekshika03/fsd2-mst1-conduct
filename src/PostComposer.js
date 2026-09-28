import React, { useState } from "react";

// Change these values here and the UI will update automatically
const LIMITS = {
  Twitter: 280,
  LinkedIn: 3000,
};

function PostComposer() {
  const [platform, setPlatform] = useState("Twitter");
  const [text, setText] = useState("");

  const characterLimit = LIMITS[platform];
  const characterCount = text.length;
  const isOverLimit = characterCount > characterLimit;

  return (
    <div style={styles.container}>
      <h2>Post Composer</h2>

      {/* Platform selector */}
      <div>
        <label>
          <input
            type="radio"
            value="Twitter"
            checked={platform === "Twitter"}
            onChange={() => setPlatform("Twitter")}
          />
          Twitter ({LIMITS.Twitter} chars)
        </label>

        <label style={{ marginLeft: "16px" }}>
          <input
            type="radio"
            value="LinkedIn"
            checked={platform === "LinkedIn"}
            onChange={() => setPlatform("LinkedIn")}
          />
          LinkedIn ({LIMITS.LinkedIn} chars)
        </label>
      </div>

      {/* Textarea */}
      <textarea
        style={styles.textarea}
        rows={6}
        placeholder={`Write your ${platform} post here...`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Character count */}
      <p style={{ color: isOverLimit ? "red" : "gray" }}>
        {characterCount} / {characterLimit} characters
      </p>

      {/* Error message */}
      {isOverLimit && (
        <p style={styles.error}>
          Your post is {characterCount - characterLimit} character(s) over the{" "}
          {platform} limit!
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  textarea: {
    width: "100%",
    marginTop: "12px",
    padding: "10px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    resize: "vertical",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
};

export default PostComposer;
