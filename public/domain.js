function frozen(value) {
  if (value && typeof value === "object") {
    for (const child of Object.values(value)) frozen(child);
    Object.freeze(value);
  }
  return value;
}

export const POLICY = frozen({
  scope: "open infrastructure that research depends on",
  prompt:
    "How much does this nominee’s completed and maintained work underpin how research is done, shared and kept, now?",
  anchors: [
    ["0.00", "not infrastructure"],
    ["0.25", "matters to one field"],
    ["0.50", "relied on in several fields"],
    ["0.75", "widely relied on"],
    ["1.00", "critical across research"],
  ],
  attribution:
    "Score the work identified by each nomination. If entries claim the same work, credit that shared work once across them; distinct contributions by the same beneficiary remain eligible.",
  tests: ["how many rely", "role in research", "other options"],
  worked: [
    [
      "0.90",
      "the identifier behind most papers’ links",
      ["most fields, most citations", "links, indexes, metrics", "few, at scale"],
    ],
    [
      "0.55",
      "a free data format many instruments and simulations write to",
      ["many labs, often unknowingly", "those labs’ pipelines and archives", "a few, for new data"],
    ],
    [
      "0.10",
      "a colour map for scientific plots",
      ["millions of figures", "colouring scientific figures", "plenty"],
    ],
  ],
  separate: [
    "Quality of its contents",
    "Who runs or funds it",
    "How much you use it",
    "Your own field or taste",
  ],
});

const DEFAULT_NOMINEES = [
  {
    key: "inkscape",
    name: "Inkscape",
    blurb:
      "Free vector drawing software for technical diagrams, illustrations and other graphics. Started in 2003, the project is developed by a community of contributors.",
    note: "Ask which research workflows use this particular tool, how it supports those workflows and which available alternatives could meet their needs. Personal use and preference are excluded. Hear the reasons for a high or low score before interpreting the result.",
  },
  {
    key: "linux",
    name: "Linux",
    blurb:
      "The kernel used by Linux operating systems on research clusters, cloud servers and supercomputers. It underpins the software environments in which many scientific computations run.",
    note: "Consider reliance through research clusters and computing services as well as direct use. A tight cluster narrows the band, so a juror can forfeit despite giving a defensible score. Inspect the actual centre, band and payout; agreement does not establish correctness.",
  },
  {
    key: "pdf",
    name: "PDF",
    blurb:
      "Portable Document Format (PDF), used to share paginated documents such as papers. Adobe published its specification in 1993; it became the International Organization for Standardization’s 32000 standard in 2008.",
    note: "The alternatives test may divide the room: some jurors consider web and structured-text versions of papers; others emphasize reliance on existing literature and workflows. A preference for another format is excluded; consider the format’s role in those workflows and whether available alternatives meet their requirements. Hear the reasons for each reading. A split can widen the band; being in the smaller group does not by itself imply a forfeit. Inspect what the revealed scores actually earned.",
  },
  {
    key: "latex",
    name: "LaTeX",
    blurb:
      "The free typesetting system used for research articles, theses and books. It supports mathematical notation, cross-references and bibliographies, and runs on TeX engines such as pdfTeX and LuaTeX.",
    note: "Apply the policy to research as a whole. Different disciplines rely on different tools; a juror’s own field gets no extra weight. Ask how participants considered reliance, supported workflows and available alternatives beyond their own work. A minority reading does not by itself imply a forfeit.",
  },
  {
    key: "arxiv",
    name: "arXiv",
    blurb:
      "The preprint server where much of physics, mathematics and computer science has appeared first since 1991: more than three million papers, free to post and free to read. Moderated, not peer-reviewed.",
    note: "Ask how research relies on early sharing and access to existing preprints. The instructed claim about AI-written papers concerns content quality, which this policy excludes. Use the banner to distinguish assignment, submitted score and reward. A matching score does not establish motive, and one outcome cannot establish a safe collusion threshold.",
    bloc: true,
    blocScore: "0.10",
    blocCover: "it’s flooded with AI-written papers",
  },
  {
    key: "numpy",
    name: "NumPy",
    blurb:
      "The array library underneath scientific Python: SciPy, pandas, scikit-learn and Astropy are built on it. It was part of the software behind the first image of a black hole and the first detection of gravitational waves.",
    note: "Indirect reliance counts too. Ask which research workflows use NumPy, how it supports those workflows and which available alternatives could meet their needs. A juror’s own use of Python or R should not determine the score. Hear the reasons before interpreting the room’s mean.",
  },
];

const SPARE_NOMINEES = [
  {
    key: "swh",
    name: "Software Heritage",
    blurb:
      "The archive of publicly available source code, publicly launched by Inria in 2016. It preserves code from hosts that have shut down, including Google Code and Gitorious.",
    note: "Ask about current workflows and access to preserved code. The prompt includes how research is kept. Consider how archived code supports research and which available alternatives provide comparable access. Hear how each reading applies the three policy tests.",
  },
  {
    key: "git",
    name: "Git",
    blurb:
      "The version-control tool initially developed by Linus Torvalds in 2005 for the Linux kernel. GitHub, owned by Microsoft, is one hosting platform built around it. Git is free software and a Software Freedom Conservancy project.",
    note: "Score the tool named, rather than a hosting platform such as GitHub. Ask how research workflows use version history and collaboration, the role Git plays in them and which available alternatives could support those workflows. Website ownership is excluded by the policy.",
  },
  {
    key: "orcid",
    name: "ORCID",
    blurb:
      "A free, persistent researcher identifier that distinguishes people with similar names, run by a member-funded nonprofit. Some funders and publishers require it for applications or submissions.",
    note: "Distinguish administrative requirements from practical reliance. Ask which workflows use the identifier, the role it plays and whether available alternatives meet those needs. A requirement alone does not settle the score.",
  },
  {
    key: "openalex",
    name: "OpenAlex",
    blurb:
      "An open index of scholarly works, authors and institutions, launched by the nonprofit OurResearch in 2022 as Microsoft retired its academic graph. Sorbonne University announced a move from Web of Science to OpenAlex.",
    note: "Apply all three policy tests. Ask how research workflows use this index, the role it plays and which available alternatives could meet those needs. The policy does not restrict alternatives to free products; explain any access or cost constraints that affect whether an alternative is practical.",
  },
  {
    key: "ojs",
    name: "Open Journal Systems",
    blurb:
      "Free, open-source publishing software from the Public Knowledge Project. It runs tens of thousands of journals in more than a hundred countries.",
    note: "Consider reliance by journals and readers who may not know which software they use. Ask which publication workflows the software supports and which available alternatives could meet their needs. Explain any resource constraints rather than assuming a paid alternative is either adequate or impossible.",
  },
  {
    key: "rstudio",
    name: "RStudio",
    blurb:
      "The open-source edition of the editor for R, licensed under the GNU Affero General Public License version 3. It is developed by Posit, the public benefit corporation called RStudio until 2022.",
    note: "Keep ownership separate from the policy tests. Ask how researchers rely on the editor, which workflows it supports and which available alternatives could meet those needs. Heavy use alone does not settle the score.",
  },
  {
    key: "osm",
    name: "OpenStreetMap",
    blurb:
      "The open map of the world, built by a global community of mappers and published under the Open Database License. Navigation applications, humanitarian responders and research projects use its data.",
    note: "Apply the prompt to research uses, rather than general popularity. Ask which research workflows use OpenStreetMap, the role it plays and which available alternatives could meet those needs. Hear different assessments of scope before interpreting the scores.",
  },
];

export const NOMINEES = frozen(DEFAULT_NOMINEES.concat(SPARE_NOMINEES));
export const DEFAULT_DOCKET_KEYS = frozen(DEFAULT_NOMINEES.map((nominee) => nominee.key));
