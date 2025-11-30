import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstEntry from "./pages/FirstEntry";
import SecondEntry from "./pages/SecondEntry";
import ThirdEntry from "./pages/ThirdEntry";
import LavenderSideEntry from "./pages/LavenderSideEntry";
import FirstEntryLark from "./pages/FirstEntryLark";
import SecondEntryLark from "./pages/SecondEntryLark";
import GOTVFirstEntry from "./pages/GOTVFirstEntry";
import GOTVSecondEntry from "./pages/GOTVSecondEntry";

import TruthAndTreacheryFirstEntry from "./pages/TruthAndTreacheryFirstEntry";

import BenjaminFirstEntry from "./pages/BenjaminFirstEntry";
import BenjaminSecondEntry from "./pages/BenjaminSecondEntry";
import BenjaminThirdEntry from "./pages/BenjaminThirdEntry";
import BenjaminFourthEntry from "./pages/BenjaminFourthEntry";
import BenjaminFifthEntry from "./pages/BenjaminFifthEntry";
import BenjaminSixthEntry from "./pages/BenjaminSixthEntry";
import BenjaminSeventhEntry from "./pages/BenjaminSeventhEntry";
import BenjaminEighthEntry from "./pages/BenjaminEighthEntry";
import BenjaminNinthEntry from "./pages/BenjaminNinthEntry";
import BenjaminTenthEntry from "./pages/BenjaminTenthEntry";

import Home from "./pages/Home";
import ThirdEntryLark from "./pages/ThirdEntryLark";
import FourthEntryLark from "./pages/FourthEntryLark";
import FifthEntryLark from "./pages/FifthEntryLark";
import SixthEntryLark from "./pages/SixthEntryLark";
import FifthEntry from "./pages/FifthEntry";
import SixthEntry from "./pages/SixthEntry";
import SeventhEntry from "./pages/SeventhEntry";
import FourthEntry from "./pages/FourthEntry";
import NarrativeNotesFirstEntry from "./pages/NarrativeNotesFirstEntry";
import NarrativeNotesSecondEntry from "./pages/NarrativeNotesSecondEntry";
import MilioFirstEntry from "./pages/MilioFirstEntry";
import SilvermoonFirstEntry from "./pages/SilvermoonFirstEntry";
import MilliaFirstEntry from "./pages/MilliaFirstEntry";
import GOTVThirdEntry from "./pages/GOTVThirdEntry";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/maelstrom" element={<FirstEntry />} />
          <Route path="/maelstrom/benjamin" element={<SecondEntry />} />
          <Route path="/maelstrom/benjamin/storyteller" element={<ThirdEntry />} />
          <Route path="/maelstrom/benjamin/storyteller/robin" element={<LavenderSideEntry />} />
          <Route path="/maelstrom/benjamin/storyteller/rabbit" element={<FourthEntry />} />
          <Route path="/maelstrom/benjamin/storyteller/rabbit/clementine" element={<FifthEntry />} />
          <Route path="/maelstrom/benjamin/storyteller/rabbit/clementine/ace" element={<SixthEntry />} />
          <Route path="/maelstrom/benjamin/storyteller/rabbit/clementine/ace/rook" element={<SeventhEntry />} />
          <Route path="/absurdity" element={<FirstEntryLark />} />
          <Route path="/absurdity/hartebeest" element={<SecondEntryLark />} />
          <Route path="/absurdity/hartebeest/hound" element={<ThirdEntryLark />} />
          <Route path="/absurdity/hartebeest/hound/memories" element={<FourthEntryLark />} />
          <Route path="/absurdity/hartebeest/hound/memories/cooper" element={<FifthEntryLark />} />
          <Route path="/absurdity/hartebeest/hound/memories/cooper/heart" element={<SixthEntryLark />} />
          <Route path="/watchtower" element={<GOTVFirstEntry />} />
          <Route path="/watchtower/carolina" element={<GOTVSecondEntry />} />
          <Route path="/watchtower/carolina/workshop" element={<GOTVThirdEntry />} />
          <Route path="/thorns" element={<TruthAndTreacheryFirstEntry/>} />
          <Route path="/narrationnotes" element={<NarrativeNotesFirstEntry/>} />
          <Route path="/redactionnotes" element={<NarrativeNotesSecondEntry/>} />
          <Route path="/melodious" element={<MilioFirstEntry/>} />
          <Route path="/fragments" element={<BenjaminFirstEntry/>} />
          <Route path="/fragments/soul" element={<BenjaminSecondEntry/>} />
          <Route path="/fragments/soul/fetch" element={<BenjaminThirdEntry/>} />
          <Route path="/fragments/soul/fetch/blueapple" element={<BenjaminFourthEntry/>} />
          <Route path="/fragments/soul/fetch/blueapple/amouranth" element={<BenjaminFifthEntry/>} />
          <Route path="/fragments/soul/fetch/blueapple/amouranth/francis" element={<BenjaminSixthEntry/>} />
          <Route path="/fragments/soul/fetch/blueapple/amouranth/francis/gristle" element={<BenjaminSeventhEntry/>} />
          <Route path="/fragments/soul/fetch/blueapple/amouranth/francis/gristle/briarwolf" element={<BenjaminEighthEntry/>} />
          <Route path="/fragments/soul/fetch/blueapple/amouranth/francis/gristle/briarwolf/bulwark" element={<BenjaminNinthEntry/>} />
          <Route path="/fragments/soul/fetch/blueapple/amouranth/francis/gristle/briarwolf/bulwark/tears" element={<BenjaminTenthEntry/>} />
          <Route path="/lunargent" element={<SilvermoonFirstEntry/>} />
          <Route path="/youshouldlookdeeper" element={<MilliaFirstEntry/>} />




      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);