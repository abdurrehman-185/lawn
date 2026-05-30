"use server";

import { redirect } from "next/navigation";

export async function submitQuote() {
  redirect("/thank-you");
}
