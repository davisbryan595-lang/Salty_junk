"use client"

import { useEffect } from "react"

export default function SafeFetch() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Monkeypatch fetch to suppress network errors from FullStory and avoid uncaught exceptions
    const originalFetch = window.fetch.bind(window)

    window.fetch = async (input: RequestInfo, init?: RequestInit) => {
      try {
        return await originalFetch(input, init)
      } catch (err) {
        try {
          const url = typeof input === "string" ? input : (input as Request).url
          if (url && (url.includes("fullstory.com") || url.includes("edge.fullstory"))) {
            // Suppress FullStory network errors silently to avoid console noise and HMR crashes
            // Return an empty Response so callers expecting a Response won't break
            return new Response(null, { status: 204, statusText: "No Content" })
          }
        } catch (e) {
          // ignore
        }
        // Re-throw for other errors so normal behavior remains
        throw err
      }
    }

    // Catch unhandled promise rejections globally and ignore FullStory related ones
    function onUnhandledRejection(ev: PromiseRejectionEvent) {
      try {
        const reason = ev?.reason?.toString?.() || ""
        if (reason.includes("fullstory") || reason.includes("edge.fullstory") || reason.includes("fs.js")) {
          ev.preventDefault()
          // eslint-disable-next-line no-console
          console.warn("Suppressed FullStory unhandled rejection:", ev.reason)
        }
      } catch (e) {
        // ignore
      }
    }

    window.addEventListener("unhandledrejection", onUnhandledRejection)

    return () => {
      // restore
      window.fetch = originalFetch
      window.removeEventListener("unhandledrejection", onUnhandledRejection)
    }
  }, [])

  return null
}
