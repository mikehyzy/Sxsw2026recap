import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { TrendReport } from "./pages/TrendReport";
import { SessionLibrary } from "./pages/SessionLibrary";
import { WorkshopRecap } from "./pages/WorkshopRecap";
import { RoundtableRecap } from "./pages/RoundtableRecap";
import { LinkedInSeries } from "./pages/LinkedInSeries";
import { BookSigning } from "./pages/BookSigning";
import { PhotoJournal } from "./pages/PhotoJournal";
import { About } from "./pages/About";
import { Resources } from "./pages/Resources";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "trends", Component: TrendReport },
      { path: "sessions", Component: SessionLibrary },
      { path: "workshop", Component: WorkshopRecap },
      { path: "roundtable", Component: RoundtableRecap },
      { path: "linkedin", Component: LinkedInSeries },
      { path: "book", Component: BookSigning },
      { path: "photos", Component: PhotoJournal },
      { path: "about", Component: About },
      { path: "resources", Component: Resources },
    ],
  },
]);
