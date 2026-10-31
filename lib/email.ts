/**
 * Sender address for all outgoing mail.
 *
 * Set RESEND_FROM (e.g. "LocalRoofer.ca <noreply@localroofer.ca>") once
 * localroofer.ca is verified in Resend. Until then we fall back to Resend's
 * test sender, which can only deliver to the Resend account owner — fine for
 * internal notifications, but customer-facing mail is skipped.
 */
export const FROM_ADDRESS = process.env.RESEND_FROM || "LocalRoofer.ca <onboarding@resend.dev>";

/** True once a verified sending domain is configured. */
export const CAN_EMAIL_CUSTOMERS = Boolean(process.env.RESEND_FROM);

export const BUSINESS_PHONE_DISPLAY = "(416) 300-2345";
export const BUSINESS_PHONE_TEL = "+14163002345";
