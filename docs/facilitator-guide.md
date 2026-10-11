# Facilitator guide

Run this as an eighty-minute workshop about the full decentralized curation mechanism and its aim of turning private incentives into public benefit. The opening worked example calculates funding rates from adjustable scores for a real contribution. The later live jury examines one component; neither activity simulates the entire protocol. Times run from the session start. Slides 21 to 24 are optional references.

## Before people arrive

- Print the [handout](../public/handout/handout.pdf) on A4 paper and the [score sheets](../public/paper/sheets.html), two A5 sheets per A4 page. For thirty participants, print thirty handouts and fifteen pages of score sheets. Scan all three handout codes and check that the room, working paper and mailing list open.
- Rehearse joining, sealing, automatic opening, grading and host takeover in a separate room on a laptop and phone. Keep the session room for the session.
- Open the [deck](../public/deck/index.html) and separate host controls. Press `F1` or select **Shortcuts** for the keyboard guide, including next, previous, first and last slide controls. Charge both devices and check Wi-Fi and mobile data.
- Rehearse the NumPy example on slides 4 to 10: change a curator score, apply the appeal, show the debunked branch, apply the lower re-score and reset. These controls share one state; return to the allocation table on slide 8 after each change. Reset before the session.
- Without a shared display, direct participants to the deck from the home page, announce slide numbers and read the policy and results aloud. Let participants return to the game before opening a nominee.
- Review [likely questions](likely-questions.md), particularly the differences between the paper, current contracts, workshop and Arrow.

Summon the jury from the laptop: enter your name, keep the six default nominees selected and press “Summon a jury and host it”. Leave the spares unticked; the docket cannot change after summoning. Keep the lobby open until the joining segment.

## Run of show

| Time | Slides | Purpose and action |
| --- | --- | --- |
| 0:00 to 0:25 | 1 to 11 | Explain the complete mechanism with NumPy's real release evidence. Change scores and follow the calculated allocation through an appeal, a separate accuracy branch and re-scoring. End with its dependencies and limits. |
| 0:25 to 0:32 | 12 to 14 | Join the room, read the shared policy and use the payment widget. Make the workshop's simplifications explicit. |
| 0:32 to 0:59 | 15 | Play all six nominees. Allow about four and a half minutes each: roughly three minutes to score, recover phones, reveal and grade; ninety seconds to discuss. |
| 0:59 to 1:09 | 16 and 17 | Debrief the results and collusion widget. Separate each defence from the failure it cannot prevent. |
| 1:09 to 1:16 | 18 and 19 | Place Arrow on the path toward the full system. Distinguish evidence already available, what Arrow can test and what remains untested. |
| 1:16 to 1:20 | 20 | Return to the full mechanism, check understanding, take questions and give the follow-up links. Use appendices 21 to 24 only as needed. |

These are facilitation allowances, not changes to the game's scoring clock. If joining or paper collection takes longer, shorten discussion explicitly. Processing a round and interpreting it are separate work.

## Explain the full mechanism first

Open with: “Can we make useful assessment and correction rewarding, so that people pursuing their own interests help produce better public decisions? That is the ambition. A good funding decision still needs informed judgment and a purpose worth serving. A focused group can study the evidence, while affected people can reveal needs and consequences it missed.”

Then name the intermediate objective: “Credible consensus: a collective judgment people have reason to rely on. The final aim is public benefit, not agreement for its own sake or a claim to certify truth.” The [research framing](presentation-sources.md#judgment-and-public-accountability) supports combining informed judgment with participation and scrutiny. It does not establish that monarchy produces better decisions or that democracy only counts preferences.

Explain what credibility requires: inspectable evidence, a public policy, incentives for careful judgment, and usable routes to challenge and revision. Consensus means the resulting collective judgment, not unanimity. Accuracy challenges still address false factual claims; relevance judgments remain relative to the pool’s policy. These mechanisms aim to earn credibility, and agreement alone does not demonstrate success. Keep two tests separate: do private rewards induce useful work, and does that work improve decisions for the people affected?

Use the NumPy 2.0.0 release throughout. Say: “The release and source records are real. This nomination, its curator scores and its funding parameters are illustrative. No NumPy application, payment or accuracy ruling is being reported.” The shared policy scores the nominee; the release is evidence about its work, not the entire object being scored.

- **Slides 1 to 3:** Separate who assesses a contribution from whose needs the assessment serves. Then name the complete loop: the creator states the policy; jurors assess relevance; wider participants can supply evidence and fund eligible challenges or appeals; resulting weights determine continuing funding. Challenge and appeal costs limit access. This is delegated assessment with correction paths, not a guarantee that everyone is represented. Return to the map whenever a component is mistaken for the whole system.
- **Slides 4 and 5:** Read the scoring prompt and anchors generated from the shared policy. The creator chooses the policy; publishing it makes the criterion inspectable, not democratically authorized. The pool fixes economic terms; the prompt states what curators score and the rubric guides how they score it. Inspect the release announcement, delivered capabilities, SciPy's preparation for compatibility, and NumPy's migration costs. A nomination identifies a beneficiary, supplies evidence, requests an applied weight and posts a deposit in the funding asset. A requested weight is a ceiling, not a promised share.
- **Slide 6:** Move a curator's score and inspect the weighted mean. Six drawn tickets belong to three illustrative curators: stake buys potential seats, not certified expertise or six independent people. These controls represent revealed reports; they do not enact commit and reveal. The current contract binds each reveal to a commitment but accepts early reveals while other jurors can still commit. Do not promise that it prevents score copying. Reset the example before showing the baseline below.
- **Slide 7:** Apply the twelve-ticket appeal result. The deepest completed jury's mean supplies the adopted relevance score; its median and median absolute deviation supply a separate grading reference for reports across the case. The calculator omits curator rewards and the appellant's separate prediction bet. A lost prediction bet does not discard the child jury's score. An appeal helps only if the wider pool supplies better judgment and someone can afford it.
- **Slide 8:** Inspect the allocation table. Effective weight is the lower of requested weight and curated score; each earning weight receives its proportion of the funded pool's release. The initial and appeal views show rates after finalization and the required holdback. These are accrual rates, not daily transfers: the beneficiary must claim accrued funds. The contracts release by block; units per day are a readable equivalent.
- **Slide 9:** Show the separate accuracy branch after scoring. Current contracts require a scored or active nomination with no open relevance case. The quoted claim about unchanged binary compatibility is a counterfactual addition, not a claim NumPy made. Its migration guide provides counter-evidence. During a dispute, accrual continues while claims and exits are withheld. “Show debunked outcome” illustrates stopped future weight and returned unclaimed accrual; it does not enact arbitration or calculate a settlement.
- **Slide 10:** Apply the lower re-score and return to the allocation table. A decrease applies when the score is committed; a later increase waits through a new holdback. Re-scoring does not guarantee that every stale claim is found or every due evaluation completes. Reset when finished.
- **Slide 11:** State the dependencies: usable evidence, clear policy, meaningful stake, participation, independent scrutiny, adequate arbitration and accessible appeals. A configured temporary circuit breaker can stop future accrual; it cannot take already accrued funds. Contracts enforce procedures and financial consequences; they cannot determine whether the chosen policy serves the public or certify jurors' expertise. A faithfully applied policy can still exclude important needs. Separately accepted claims can also contradict one another; individual challenge outcomes do not establish a consistent body of knowledge.

Participants should be able to distinguish the route for a false factual claim from the route for a disputed relevance judgment, and explain how either can affect funding. Avoid spending this segment on every parameter.

### Worked-example checkpoints

Use these as checkpoints for the default example, not as independent configuration. The [deck's worked-example data](../public/deck/index.html) owns the inputs. The comparison archive and registry are illustrative positions with unchanged weights.

| Action | NumPy score | NumPy accrual equivalent | What to ask |
| --- | --- | --- | --- |
| Reset the example | 0.60 | 40 units per day | Why is a score of 0.60 not 60 percent of the flow? |
| Apply appeal result | 0.70 | 43.75 units per day | Which other shares shrink when this weight increases? |
| Apply lower re-score | 0.30 | 25 units per day | Why does the cut affect future accrual without recovering earlier payments? |
| Show debunked outcome | Weight stopped | 0 units per day | Which funds return to the pool, and which were already paid? |

The funded pool releases an illustrative 100 units per day. At the reset state, NumPy's effective weight is 0.60 against a total weight of 1.50. Its share is 100 × 0.60 ÷ 1.50 = 40. Changing a slider returns the calculator to the initial-jury stage; use the named buttons to choose a later outcome. The re-score button restores the original jury before applying the lower assessment. The re-score and debunked buttons show alternative consequences, not a chronological continuation of a debunked nomination. Debunking preserves the recorded relevance score while stopping its earning weight.

The debunked branch returns unclaimed accrual to the open pool; already paid funds are not recovered by this process. The calculator shows current rates only. It does not simulate balances, actual asset transfers, eligibility checks, jury drawing, arbitration, appeal-bond returns or contract settlement.

## Join, read the policy and mark the workshop boundary

On slide 12, everyone scans the room code or types the printed address, enters a name and presses “Take a seat”. Compare the seated count with the people joining. Remove duplicate or stray seats with the cross on their chip while still in the lobby.

On slide 13, read the policy, anchors, worked examples and exclusions together. The policy in [the shared domain](../public/domain.js) is authoritative. Do not add an unstated funding-need or popularity criterion. Knowledge gaps can justify recusal; disagreeing with others does not by itself mean someone lacks knowledge.

On slide 14, say: “You will try one relevance-curation game with equal seats and points. This hosted game uses a mean and standard deviation, with rewards shared by closeness inside the band. The current full-system contracts use different grading, drawn stake and an appeal ladder. This exercise does not reproduce those contracts.”

Use the widget to show the centre, spread and band. At essentially zero spread, distance forfeits are disabled. Forfeits join the pot. This workshop pays the full base reward for a non-void round; the paper reduces that total at low dispersion. The authoritative wording is `SESSION.workshopReward` in [session data](../public/session.js).

Explain the incentive: jurors anticipate what others applying this policy will judge. That expectation may encourage careful reading, but it can also reward shared bias. Neither agreement nor profit proves improved judgment.

## Open and debrief each round

Before the first nominee, state a falsifiable expectation: “I expect the portable document format (PDF) round's band to be wider than both Inkscape's and Linux's. If it is not, that expectation was wrong. The scores alone will not tell us why; we will hear how you applied the policy.”

Announce the grading cutoff before pressing “Open”. Reserve the end of the processing window for waking phones, opening seals and grading. “Close and reveal” unlocks when everyone has sealed or recused, or when the scoring clock runs out.

After closing, ask everyone to wake their phone and keep the room open. Connected phones reveal stored seals automatically. Check “Not yet revealed” and allow recovery before the announced cutoff. Do not require every seal to open. A person who never sealed or lost the stored salt cannot reveal. “Grade” fixes the cutoff: later reveals are recorded but excluded from that result.

Read the centre, band, who was paid and who forfeited. Ask:

1. Which policy test or piece of evidence most affected your score?
2. What did the game reward?
3. What would justify changing the judgment or asking another jury?

Then press “Next nominee”. A forfeit does not prove incompetence; a reward does not prove accuracy. If an informed minority loses, discuss why a full system needs a correction path and what that path requires.

On arXiv, compare the banner's assigned bloc with the jurors who submitted its instructed score. Assignment is sampled seat by seat; a majority, compliance and a successful attack are not guaranteed. A matching score does not establish motive.

## Debrief: a defence and its limit

On slide 16, inspect the actual result and widget. If the bloc benefits, ask what controlled the reference. If it loses, ask which scores, stake distribution and band produced that outcome. Neither result establishes a universal safe collusion threshold.

On slide 17, distinguish:

- **Commit and reveal:** binds each reveal to a prior commitment. The inspected contract does not require commitments to close before reveals begin: one juror can reveal while others are still able to commit. It therefore does not fully prevent copying, private coordination or payment after a public reveal.
- **At-risk stake:** makes some deviations costly. Its distribution and value determine how much protection it supplies; it does not certify expertise.
- **Appeals:** can replace the first result and grade earlier reports against the final reference. They depend on a better-informed wider pool and someone willing and able to fund escalation.

The workshop's proof-reporting bounty is an extra demonstration feature. The inspected full-system contracts have no commitment-leak reporting or penalty path. Do not attribute that bounty to the current implementation.

## Arrow, evidence and the close

On slide 18, return to the full map and highlight the part Arrow explores. Invited experts and trusted nominations replace open entry, and Arrow omits accuracy disputes, drawn staked juries, relevance appeals and continuing funding. It is a precursor, not a miniature validation of the complete system. Use the current follow-up wording from `SESSION.nextRound` in [session data](../public/session.js).

On slide 19, distinguish evidence types. The October 11 manuscript formalizes a mechanism and reports conditional calculations, simulations under prescribed behavior and a partial historical deployment. The current contracts implement a different profile. This workshop supplies observations and questions from one room. Arrow can test participation, prompt comprehension, scoring patterns and operations under its assumptions. Permissionless security, appeal behavior and integrated funding still require further evidence. Test the private-to-public link by examining the behavior participants choose, the information and decisions it produces, and feasible alternatives. Serving a public purpose also requires examining whose needs the policy includes, who can afford to contest a result, and what funded work actually delivers.

Ask: “Whose needs are missing from this policy? What evidence would show that the resulting funding served its stated purpose?” Then ask which of those claims the available evidence supports. Do not treat every possible outcome as support.

On slide 20, return to public benefit as the final aim and credible consensus as an intermediate objective. Ask one participant to distinguish accuracy challenge from relevance appeal, and another to explain what would make an agreed judgment credible or justify revising it. Then ask what evidence would show that the resulting decisions benefited affected people. A profitable strategy, faithful policy application or stable consensus alone would not answer that question. Close with the full loop, research questions and paper/mailing-list links. Press “Finish” if needed so standings remain visible.

## While the room plays

- “I do not know enough” recuses a juror: no scoring stake, reward share or absence fine. They can take the seat back while scoring is open.
- Jurors may change a seal until closing. The chip marks a changed seal with a small arrow.
- A proof contains a score and two words. Another juror seated for that nominee can submit it through “Report” for a bounty; the disclosing juror loses more. This concerns proof disclosure, not discussion of the policy. “Proofs: on screen” can put proofs behind a button.
- A phone waking before “Grade” can reveal automatically. A non-recused seated juror without a timely reveal loses the stake if at least one score opens. If nobody reveals, the round is void with no absence forfeits.
- Late arrivals may join any time and are at stake from the next nominee opened.

## Recovery and paper fallback

If the laptop drops, open the room on the phone, press “Take over” and confirm. If a screen says the game moved on, check the current state: another host action may already have succeeded. “End the game” keeps completed results. “New game” returns everyone to the summon screen and reseats them.

If everyone's connection fails, use the [score sheets](../public/paper/sheets.html). Jurors write in the nominee's row and fold the sheet. At “open”, read scores aloud in seat order and enter them in the [paper calculator](../public/paper/index.html) on a connected device, or later. The same ledger grades them.

Keep names consistent and enter a score or explicit recusal for each juror in each played round. An omitted name is an absence if at least one score opens. The calculator treats every name entered anywhere as seated in every entered round. For late arrivals, enter “recuse” in earlier rounds and explain the workaround. Leave unplayed rounds blank.

Paper play has no private bloc instruction. Everyone scores arXiv under the shared policy; use slide 16 for the collusion discussion. If switching after live rounds, announce that paper standings restart from this point: earlier balances are not imported. Allow extra collection time and shorten discussion explicitly.

If a stranger joins, remove their seat in the lobby. The room link is public; do not promise stronger access control.

## After the session

Leave final standings available for photographs, then press “Wipe all” and confirm. Keep only the records participants expect you to retain.

Record policy interpretations, surprising scores, minority reasoning, bloc assignment and observed compliance. Separate observations from explanations. This room did not test the entire protocol.

Follow the [README](../README.md) for authorized mailing-list exports and secret handling. Keep tokens out of slides, shared notes and handouts.
