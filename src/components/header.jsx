export default function Header({ onShowSidebar, showSide, search, onSearch }) {
  return (
    <header className="main-header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src="/logo.png" alt="logo" width={50} />
            <h1>ميعاد</h1>
          </div>
          <Search onSearch={onSearch} />
          <SideIcon
            showSide={showSide}
            onShowSidebar={onShowSidebar}
            search={search}
          />
        </nav>
      </div>
    </header>
  );
}

function Search({ search, onSearch }) {
  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="🔍 ابحث في قائمة مواعيدك"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}

function SideIcon({ showSide, onShowSidebar }) {
  return (
    <svg
      onClick={onShowSidebar}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={36}
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          showSide
            ? "M6 18 18 6M6 6l12 12"
            : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        }
      />
    </svg>
  );
}
