"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

      if (!serviceId || !templateId) {
        throw new Error("EmailJS is not configured. Please set up environment variables.")
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        subject: `New Message from Let's Work Together Section`,
      })

      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 4000,
      })

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("Failed to send message. Please try again later.", {
        duration: 4000,
      })
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
