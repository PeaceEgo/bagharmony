export function getWhatsAppNumber(): string {
  const digits = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

  if (!digits || digits.startsWith("0")) return "";
  if (digits.length < 8 || digits.length > 15) return "";
  return digits;
}
