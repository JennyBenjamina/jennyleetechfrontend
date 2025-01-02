import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#7c3aed] text-[#f9fafb] py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Jellen Weight Tracking App</h3>
          <p className="text-sm">
            © {new Date().getFullYear()} Jellen. All rights reserved.
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="h-6 w-6 hover:opacity-75"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.59 0 0 .589 0 1.325v21.351C0 23.412.59 24 1.325 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.892-4.792 4.658-4.792 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.31h3.591l-.468 3.622h-3.124V24h6.116c.735 0 1.325-.588 1.325-1.324V1.325C24 .589 23.41 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="h-6 w-6 hover:opacity-75"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.918 2.201-4.918 4.917 0 .39.044.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.869 3.216 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.211 7.557 2.211 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.016-.633.962-.695 1.8-1.562 2.462-2.549z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              className="h-6 w-6 hover:opacity-75"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.755 0 8.333.015 7.052.072 5.773.13 4.653.46 3.771 1.342.015 5.098 0 6.655 0 12s.015 6.902.072 8.178c.057 1.281.387 2.401 1.342 3.283C4.653 23.542 5.773 23.87 7.052 23.928c1.281.057 1.703.072 4.948.072s3.667-.015 4.948-.072c1.281-.057 2.401-.387 3.283-1.342.975-.975 1.263-2.242 1.325-3.608.058-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.062-1.366-.35-2.633-1.325-3.608-.975-.975-2.242-1.263-3.608-1.325C15.667.015 15.245 0 12 0z" />
              <circle cx="12" cy="12" r="3.6" />
              <path d="M18.406 5.594c0 .796-.646 1.441-1.441 1.441s-1.441-.646-1.441-1.441.646-1.441 1.441-1.441 1.441.646 1.441 1.441z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
