import { redirect } from "next/navigation";

/**
 * School self-registration has been replaced by the Founding Schools Programme.
 * Redirect any traffic from old links to the contact page.
 */
export default function SchoolRegistrationSuccessPage() {
  redirect("/contact");
}
