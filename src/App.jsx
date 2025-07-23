import React from "react";
import Header from "./components/Header/Header";
import AdBanner from "./components/AdBanner/AdBanner";
import MainNews from "./components/MainNews/MainNews";
import TopHeadlines from "./components/TopHeadlines/TopHeadlines";
import SecondaryNews from "./components/SecondaryNews/SecondaryNews";
import SectionList from "./components/SectionList/SectionList";
import "./App.css";

const mainStory = {
  title: "Putin stalls. Trump shifts. Ukraine targets Moscow.",
  description: "Putin stalling over ceasefire. Trump flips on sending weapons.",
  category: "WORLD",
  time: "5:23 a.m. ET July 22",
};

const topHeadlines = [
  "Defense Department withdraws Marines from LA",
  "Biden Ambien truth emerges",
  "Oregon waterfall accident death confirmed",
  "Cram Fire nears megafire status",
  "Bangladesh fighter jet crash story",
  "Skarsgård retires at 13",
];

const secondaryStory = {
  title: "'It's a slur:' Native Americans push back",
};

const politicsItems = [
  "DNA case at Supreme Court",
  "Trump loses GOP ally in Arkansas",
  "Biden leads CBS poll",
  "California debate on pardon power",
  "Pandemic response review called",
  "NY protests fueling outrage",
];

function App() {
  return (
    <div className="app">
      <Header />
      <AdBanner />
      <div className="content container">
        <div className="left-col">
          <MainNews story={mainStory} />
          <TopHeadlines title="Top Headlines" items={topHeadlines} />
        </div>
        <aside className="right-col">
          <SecondaryNews story={secondaryStory} />
          <SectionList title="On Politics" items={politicsItems} />
        </aside>
      </div>
    </div>
  );
}

export default App;

