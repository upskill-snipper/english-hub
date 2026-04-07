import { redirect } from "next/navigation";

/**
 * School self-registration has been replaced by the Founding Schools Programme.
 * Schools should book a call instead of self-registering.
 * Redirect any traffic from old links to the contact page.
 */
export default function SchoolRegisterPage() {
  redirect("/contact");
}
