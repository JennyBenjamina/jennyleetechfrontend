/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yXuqAVd63T7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

export default function Journal() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            My Journal
          </h1>
          <nav className="mt-6">
            <h2 className="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold px-2">
              Categories
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="#"
                  className="flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <BookOpenIcon className="w-4 h-4 mr-2" />
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <LayoutPanelLeftIcon className="w-4 h-4 mr-2" />
                  Travel
                </Link>
              </li>
            </ul>
            <h2 className="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold px-2 mt-6">
              Tags
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="#"
                  className="flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <TagIcon className="w-4 h-4 mr-2" />
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <TagIcon className="w-4 h-4 mr-2" />
                  Thoughts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Journal Entries
          </h2>
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Search entries..."
              className="bg-gray-100 dark:bg-gray-800"
            />
            <Button>New Entry</Button>
          </div>
        </header>
        <div className="p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Entry Title 1</CardTitle>
              <CardDescription>Entry Date 1</CardDescription>
            </CardHeader>
            <CardContent>
              This is a short preview of the journal entry...
            </CardContent>
            <CardFooter>
              <Link to="#" className="text-blue-500 hover:underline">
                Read More
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Entry Title 2</CardTitle>
              <CardDescription>Entry Date 2</CardDescription>
            </CardHeader>
            <CardContent>
              This is a short preview of the journal entry...
            </CardContent>
            <CardFooter>
              <Link to="#" className="text-blue-500 hover:underline">
                Read More
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Entry Title 3</CardTitle>
              <CardDescription>Entry Date 3</CardDescription>
            </CardHeader>
            <CardContent>
              This is a short preview of the journal entry...
            </CardContent>
            <CardFooter>
              <Link to="#" className="text-blue-500 hover:underline">
                Read More
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LayoutPanelLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  );
}

function TagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}
