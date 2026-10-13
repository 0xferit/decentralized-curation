import { roomPath } from "./protocol.js";

const PROJECT = "Decentralized Curation";
const PAPER_DOI = "10.5281/zenodo.23313625";
const PUBLIC_ADDRESS_PLACEHOLDER = "CHANGE-ME";
const SITE = "https://decentralized-curation.0xferit.workers.dev";
const COPYRIGHT = "Copyright (C) 2026 Ferit Tunçer";
const CODE_LICENCE = "GPL-3.0-or-later";
const CONTENT_LICENCE = "CC BY 4.0";
const LICENCE = `code ${CODE_LICENCE}, original text and figures ${CONTENT_LICENCE}; third-party marks excluded`;

export const SESSION = Object.freeze({
  title: "Decentralized curation",
  subtitle: "Putting self-interest to work for the public good.",
  project: PROJECT,
  event: "Institute of Open Science Practices (IOSP) 2026, Leiden",
  day: "Wednesday 14 October 2026, 14:00 to 15:20",
  venue: "Workshop room, Poortgebouw, Leiden",
  site: SITE,
  publicAddressConfirmed: !SITE.includes(PUBLIC_ADDRESS_PLACEHOLDER),
  roomCode: "leiden",
  paperVersion: "1.2.0",
  paperDoi: PAPER_DOI,
  paperSourceUrl:
    "https://github.com/0xferit/manuscript-decentralized-curation/blob/1b1805d66dc46b7b90f2a28c635cd28d0f6794c1/paper.qmd",
  paperUrl: `https://doi.org/${PAPER_DOI}`,
  attribution: `${PROJECT} research by Ferit Tunçer.`,
  support: Object.freeze({
    project: "Octant",
    projectUrl: "https://octant.build/",
    logoUrl: "/brand/octant.svg",
  }),
  workshopReward:
    "Workshop simplification: each round with opened scores pays the full base reward, even when those scores all agree.",
  nextRound:
    "Arrow is a planned precursor experiment at Octant: invited experts score a real docket under a published policy. It assumes honesty, competence and non-collusion; it does not validate the full permissionless system.",
  nextRoundUrl: "https://octant.build",
  copyright: COPYRIGHT,
  codeLicence: CODE_LICENCE,
  contentLicence: CONTENT_LICENCE,
  licence: LICENCE,
  legal: `${COPYRIGHT}. Licence: ${LICENCE}.`,
});

export function roomUrl() {
  return `${SESSION.site}${roomPath(SESSION.roomCode)}`;
}

export function joinUrl() {
  return `${SESSION.site}/join/`;
}

export function renderSupport(root = document) {
  const support = SESSION.support;
  for (const element of root.querySelectorAll("[data-support]")) {
    const logoLink = document.createElement("a");
    logoLink.className = "support-logo";
    logoLink.href = support.projectUrl;
    const logo = document.createElement("img");
    logo.src = support.logoUrl;
    logo.alt = support.project;
    logo.width = 165;
    logo.height = 46;
    logoLink.append(logo);
    const projectLink = document.createElement("a");
    projectLink.href = support.projectUrl;
    projectLink.textContent = support.project;
    const acknowledgement = document.createElement("p");
    acknowledgement.append("Sponsored by ", projectLink, ".");
    element.replaceChildren(logoLink, acknowledgement);
  }
}
