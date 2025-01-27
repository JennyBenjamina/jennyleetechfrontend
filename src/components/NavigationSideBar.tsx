import { Button } from "./ui/button";

interface NavigationSideBarProps {
  categories: string[];
  tags: string[];
  selectedCategory: string | null;
  selectedTags: string[];
  newTag: string;
  setNewTag: (newTag: string) => void;
  handleCategoryChange: (category: string) => void;
  handleTagChange: (tag: string) => void;
  handleAddTag: () => void;
}

function NavigationSideBar({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  newTag,
  setNewTag,
  handleCategoryChange,
  handleTagChange,
  handleAddTag,
}: NavigationSideBarProps) {
  return (
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
            <button
              onClick={() => handleCategoryChange("")}
              className={`flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                selectedCategory === null ? "bg-gray-200 dark:bg-gray-600" : ""
              }`}
            >
              All
            </button>
          </li>
          <li key={categories[0]} className="flex items-center">
            <BookOpenIcon className="w-4 h-4 mr-2" />
            <button
              onClick={() => handleCategoryChange(categories[0])}
              className={`flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                selectedCategory === categories[0].toLowerCase()
                  ? "bg-gray-200 dark:bg-gray-600"
                  : ""
              }`}
            >
              {categories[0]}
            </button>
          </li>
          <li key={categories[1]} className="flex items-center">
            <HomeIcon className="w-4 h-4 mr-2" />
            <button
              onClick={() => handleCategoryChange(categories[1])}
              className={`flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                selectedCategory === categories[1].toLowerCase()
                  ? "bg-gray-200 dark:bg-gray-600"
                  : ""
              }`}
            >
              {categories[1]}
            </button>
          </li>
          <li key={categories[2]} className="flex items-center">
            <LayoutPanelLeftIcon className="w-4 h-4 mr-2" />
            <button
              onClick={() => handleCategoryChange(categories[2])}
              className={`flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                selectedCategory === categories[2].toLowerCase()
                  ? "bg-gray-200 dark:bg-gray-600"
                  : ""
              }`}
            >
              {categories[2]}
            </button>
          </li>
        </ul>
        <h2 className="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold px-2 mt-6">
          Tags
        </h2>
        <ul className="mt-2 space-y-2">
          {tags.map((tag) => (
            <li key={tag}>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-2" />
                <button
                  onClick={() => handleTagChange(tag)}
                  className={`flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                    selectedTags.includes(tag)
                      ? "bg-gray-200 dark:bg-gray-600"
                      : ""
                  }`}
                >
                  {tag}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Add new tag"
            className="w-full px-2 py-1 border rounded"
          />
          <Button
            onClick={handleAddTag}
            className="mt-2 w-full px-2 py-1  text-white rounded"
          >
            Add Tag
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default NavigationSideBar;

function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
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

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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

function LayoutPanelLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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

function TagIcon(props: React.SVGProps<SVGSVGElement>) {
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
