"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export const Navigation = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-2xl font-semibold text-gray-900"
              rel="noopener noreferrer"
            >
              Pokéweb
            </Link>

            <div className="items-center hidden gap-4 sm:flex">
              <Link
                href="/"
                className={`text-gray-700 hover:text-rose-500 transition ${pathName === "/" ? "font-bold" : ""}`}
                rel="noopener noreferrer"
              >
                Home
              </Link>
              <Link
                href="/pokemon"
                className={`text-gray-700 hover:text-rose-500 transition ${pathName === "/pokemon" ? "font-bold" : ""}`}
                rel="noopener noreferrer"
              >
                Pokémon
              </Link>
              <Link
                href="/about"
                className={`text-gray-700 hover:text-rose-500 transition ${pathName === "/about" ? "font-bold" : ""}`}
                rel="noopener noreferrer"
              >
                About
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/pokemon"
              className="hidden px-4 py-2 font-medium text-white transition rounded-full sm:inline-block bg-rose-500 hover:opacity-90 hover:scale-110 hover:rotate-3 active:scale-95"
              rel="noopener noreferrer"
            >
              Explore
            </Link>

            {/* Mobile menu button */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md sm:hidden hover:bg-gray-100"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay moved outside nav to avoid stacking/overflow issues */}
      {open && (
        <MobileOverlay pathName={pathName} onNavigate={() => setOpen(false)} />
      )}
    </>
  );
};

function MobileOverlay({
  pathName,
  onNavigate,
}: {
  pathName: string | null;
  onNavigate: () => void;
}) {
  const router = useRouter();
  const navigate = async (href: string) => {
    await router.push(href);
    onNavigate();
  };

  // refs and focus handling
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prevActive = document.activeElement as HTMLElement | null;

    const el = overlayRef.current;
    if (!el) return;

    const focusable = Array.from(
      el.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );

    // focus the first focusable element
    focusable[0]?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onNavigate();
        return;
      }

      if (e.key === "Tab") {
        if (focusable.length === 0) return;
        const idx = focusable.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey) {
          // Shift + Tab
          if (idx === 0 || document.activeElement === el) {
            e.preventDefault();
            focusable[focusable.length - 1].focus();
          }
        } else {
          // Tab
          if (idx === focusable.length - 1) {
            e.preventDefault();
            focusable[0].focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      prevActive?.focus?.();
    };
  }, [onNavigate]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      ref={overlayRef}
      className="fixed inset-0 z-[60] sm:hidden bg-white/95 backdrop-blur-md"
      onClick={() => onNavigate()}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full p-6">
        {/* close button in top-right (mirrors hamburger position) */}
        <button
          aria-label="Close menu"
          className="absolute p-2 text-gray-700 rounded-md right-4 top-4 hover:bg-gray-100"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          className="flex flex-col items-center justify-center gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              void navigate("/");
            }}
            className={`text-xl ${pathName === "/" ? "font-bold text-rose-600" : "text-gray-700"}`}
          >
            Home
          </Link>

          <Link
            href="/pokemon"
            onClick={(e) => {
              e.preventDefault();
              void navigate("/pokemon");
            }}
            className={`text-xl ${pathName === "/pokemon" ? "font-bold text-rose-600" : "text-gray-700"}`}
          >
            Pokémon
          </Link>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              void navigate("/about");
            }}
            className={`text-xl ${pathName === "/about" ? "font-bold text-rose-600" : "text-gray-700"}`}
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}
