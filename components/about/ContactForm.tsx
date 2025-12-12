"use client";

import { ArrowRight, Check, X } from "lucide-react";
import React, { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) {
        throw new Error("Network Error");
      }
      setStatus("success");
      setMessage("");
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-[40px] border border-gray-300 p-4 lg:p-6 flex flex-col gap-3 w-full"
    >
      <div>
        <h4 className="text-xl md:text-3xl font-semibold">Hi, I'm Arun</h4>
        <p className="md:text-lg text-muted-foreground">
          Shoot me a message, and let’s grab a coffee -because good chats and
          great vibes go best with caffeine :)
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <input
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              status === "success"
                ? "Message Sent!"
                : status === "error"
                ? "An Error Occured"
                : "Send a Message"
            }
            className="w-full bg-gray-100 px-4 py-2 rounded-lg border-none outline-none"
          />
          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className={`flex items-center justify-center px-2 py-2 rounded-full ${
              status === "success"
                ? "bg-lime-400"
                : status === "error"
                ? "bg-red-600"
                : "bg-[#2563EB]"
            }  text-white duration-300`}
          >
            {status === "success" ? (
              <Check />
            ) : status === "error" ? (
              <X />
            ) : (
              <ArrowRight />
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
