import React from "react";
import { Heart, Building2, UserCheck } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A1A1A]">
      <h1>Contacto</h1>
      <ContactForm />
    </div>
  );
}
