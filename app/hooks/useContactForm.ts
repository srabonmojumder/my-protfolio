"use client"

import { useState } from "react"
import toast from "react-hot-toast"

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message")
      }

      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 4000,
      })

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error(
        error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        { duration: 4000 }
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return {
    formData,
    isSubmitted,
    isLoading,
    handleSubmit,
    handleChange,
  }
}
