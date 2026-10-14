# Facilitator guide

Run this as an eighty-minute workshop led by the [handout](../public/handout/index.html): putting self-interest to work for the public good through an application of the Decentralized Curation framework. Its central idea is that personal rewards for honest, competent and careful judgment can also create public benefit. The application is public-goods curation; funding is one use of the resulting assessments. The opening worked example curates relative allocation shares from adjustable scores for a real contribution, then applies an optional funding flow. The later live jury examines one component; neither activity simulates the entire protocol. Times run from the session start. The deck has 18 slides; technical detail stays in the private notes.

For rehearsal and delivery, use the [slide-by-slide speaker script](speaker-script.md) and [printable speech](../public/speech/speech.pdf). The projected deck contains visual prompts; the script carries the explanation, optional detail and source links. Use the handout codes for the preprint and follow-up; the deck keeps only the room link needed to join the exercise. The [offline deck](../public/deck/deck.pdf) is a fallback when the live demonstration is unavailable.

## Before people arrive

- Print the [handout](../public/handout/handout.pdf) on A4 paper and the [score sheets](../public/paper/sheets.html), two A5 sheets per A4 page. For thirty participants, print thirty handouts and fifteen pages of score sheets. Scan all three handout codes and check that the room, working paper and mailing list open.
- Rehearse joining, sealing, automatic opening, grading and host takeover in a separate room on a laptop and phone. Keep the session room for the session.
- Open the [deck](../public/deck/index.html) and separate host controls. Press `F1` or select **Shortcuts** for the keyboard guide, including next, previous, first and last slide controls. Charge both devices and check Wi-Fi and mobile data.
- Rehearse the NumPy example on slides 4 to 10: change a juror score, apply the appeal, set grant flow to zero and restore it, show the debunked branch, apply the lower reassessment and reset. These controls share one state; return to the allocation table on slide 8 after each change. Reset before the session.
- Without a shared display, direct participants to the deck from the home page, announce slide numbers and read the policy and results aloud. Let participants return to the game before opening a nominee.
- Review the [speaker script’s private questions](speaker-script.md#private-reference-questions-to-answer-without-loading-the-slides) and the [source register](presentation-sources.md). Keep the framework, this application and the teaching exercise distinct; use implementation detail only to answer a relevant question.
- Before participants arrive, privately record the comparison you expect between the portable document format round and the other rounds. Keep that note and the expected direction off participant-facing screens and out of the briefing until all compared rounds have closed. Do not call it preregistered research unless a dated record was actually fixed before scoring.

Summon the jury from the laptop: enter an alias, keep the six default nominees selected and press “Summon a jury and host it”. Leave the spares unticked; the docket cannot change after summoning. Keep the lobby open until the joining segment.

## Run of show

| Time | Slides | Purpose and action |
| --- | --- | --- |
| 0:00 to 0:25 | 1 to 11 | Explain public-goods curation with NumPy's real release evidence. Change scores and follow the calculated shares through an appeal, a separate claim challenge and periodic reassessment. Show funding as one use, then explain honesty, care and competence. |
| 0:25 to 0:32 | 12 to 14 | Join the room, read the shared policy and use the points widget. Make the workshop's simplifications explicit. |
| 0:32 to 0:59 | 15 | Play all six nominees. Allow about four and a half minutes each: roughly three minutes to score, recover phones, reveal and grade; ninety seconds to discuss. |
| 0:59 to 1:09 | 16 and 17 | Debrief the results and collusion widget. Then examine attacks, responses and remaining weaknesses. |
| 1:09 to 1:20 | 18 | Brief recap, then reflection and questions. Connect personal rewards to useful judgment and public benefit; close with the handout’s follow-up codes. |

These are facilitation allowances, not changes to the game's scoring clock. If joining or paper collection takes longer, shorten discussion explicitly. Processing a round and interpreting it are separate work.

## Explain the framework, then the public-goods application

Open with: “Research depends on judgments about what to read, cite, reuse and reward. Those judgments take work. The idea is to make honest, competent and careful judgment personally rewarding, so the same work can also create public benefit. Fact-checking follows the same logic: reward the person who does useful work that others can rely on.”

State the scope: “Credible consensus is the general design problem. Today we explore public-goods curation as one application. Funding is one use of the resulting assessments.”

Define terms in the order used by the handout. The goal says what the group wants to support; the criteria say how to assess contributions. The policy collects that goal, its criteria, required evidence and rewards. A pool applies one published policy to its nominations. A submitter's deposit backs the nomination's claims; jurors make their own deposits to enter the draw for paid assessment. Explain those as separate deposits with different roles. Use “juror” for someone drawn to assess a nomination and “deposit” in the main explanation; technical sources may call these curators and bonds.

Use the conference memo to tailor examples and language to the research audience. The author has worked on this thesis since 2021; do not present it as an idea conceived at the conference. The memo is not a survey or evidence of demand, adoption or efficacy. Acknowledge preservation, discovery and granular attribution as distinct parts of the research infrastructure. This mechanism depends on accessible evidence; it does not supply those other layers by itself. Explain the relationship between metrics and judgment: choosing a measure, its weight and its interpretation embeds a purpose. Metrics can help, and a jury score can also be gamed. The relevant question is how assessment can be inspected, challenged and improved.

Then name the intermediate objective: “Credible consensus: a collective judgment people have reason to rely on. The final aim is public benefit, not agreement for its own sake or a claim to certify truth.” The [research framing](presentation-sources.md#judgment-and-public-accountability) supports combining informed judgment with participation and scrutiny. It does not establish that monarchy produces better decisions or that democracy only counts preferences.

Explain what credibility requires: inspectable evidence, a public policy, incentives for careful judgment, and usable routes to challenge and revision. Consensus means the resulting collective judgment, not unanimity. Accuracy challenges address false or untestable claims; relevance judgments remain relative to the stated goal and criteria. These mechanisms aim to earn credibility, and agreement alone does not demonstrate success. Keep two tests separate: do private rewards induce useful work, and does that work improve decisions for the people affected?

Use the NumPy 2.0.0 release throughout. Say: “The release and source records are real. This nomination, its jury scores and its funding parameters are illustrative. No NumPy application, payment or accuracy ruling is being reported.” The shared policy scores the nominee; the release is evidence about its work, not the entire object being scored.

- **Slides 1 to 3:** Establish the central idea and framework/application distinction. The creator states the goal and criteria; people nominate work, assess relevance, challenge claims, appeal scores and reassess later. Curation has costs; a budget for beneficiaries can arrive after the assessments.
- **Slides 4 and 5:** Read the shared question and criteria. Use NumPy 2.0.0's release date, 16 June 2024, as one checkable fact. Its release record does not determine its relevance. The nomination and scores are illustrative. Keep release capabilities, migration issues and project history out of this explanation.
- **Slide 6:** Explain the deposit-backed draw for paid jury work. More available stake increases draw chances; six seats may belong to three people. Move a juror's score and inspect the weighted mean. Scores are sealed privately before revelation; the controls show already-revealed scores. Reset before the baseline below.
- **Slide 7:** Apply the twelve-seat appeal result. Competing, fully funded proposals trigger a larger jury. Ask what evidence might justify a different judgment. Keep backer settlement, funding windows and exceptional outcomes in the private notes.
- **Slide 8:** Use the four columns: contribution, weight, share and units per day. Divide each weight by the total to obtain shares. Set funding to zero, then restore it: the assessments stay while the funding changes. The weights express judgments under the criteria, not measured public benefit. Leave caps and holdback mechanics for questions.
- **Slide 9:** Invent the claim that NumPy 2.0.0 was released in 2020; contrast it with the release record's 16 June 2024 date. Explain the independent claim challenge, external arbitrator, deposit awarded to a successful fact-checker and end of the nomination. Future funding stops; already-earned funding stays owed. The bad claim is a teaching example, not a claim made by NumPy. The control illustrates the outcome, not a real arbitration.
- **Slide 10:** Distinguish periodic reassessment, a fresh scoring round, from an appeal contesting an existing score. Apply the lower assessment. New weights affect future funding; earlier earnings stay earned. Reset when finished.
- **Slide 11:** Use the handout's distinctions: honesty means reporting sincerely; care means assessing evidence rigorously; competence means knowing how to judge it. Fees fund work, and incentives aim to reward care. Private reports and coherence incentives aim to make honesty a Schelling point when jurors cannot rely on collusion. Repeated losses can reduce relative stake, draw chances and influence. Competence selection requires informed judgment to outperform guessing after all rewards, fees, penalties and effort. Connect that judgment to its intended public benefit, without presenting success as established.

Participants should be able to distinguish the route for a false or untestable claim from a relevance appeal and a periodic reassessment, and explain how either can affect funding. Avoid spending this segment on every parameter.

### Worked-example checkpoints

Use these as checkpoints for the default example, not as independent configuration. The [deck's worked-example data](../public/deck/index.html) owns the inputs. The comparison archive and registry are illustrative positions with unchanged weights.

| Action | NumPy weight | NumPy funding per day | What to ask |
| --- | --- | --- | --- |
| Reset the example | 0.60 | 40 units per day | Why is a score of 0.60 not 60 percent of the flow? |
| Apply appeal result | 0.70 | 43.75 units per day | Which other shares shrink when this weight increases? |
| Apply lower assessment | 0.30 | 25 units per day | Why does the cut affect future accrual without recovering earlier payments? |
| Show debunked outcome | Weight stopped | 0 units per day | Why does future funding stop while all prior earnings remain owed? |

The default grant flow is an illustrative 100 units per day. At the reset state, NumPy's effective weight is 0.60 against a total weight of 1.50. Its share is 0.60 ÷ 1.50 = 40 percent; applying the flow yields 40 units per day. A zero grant flow leaves that share unchanged and yields no earnings. Changing a juror slider returns the calculator to the initial-jury stage; use the named buttons to choose a later outcome. The “Apply lower assessment” button restores the original jury before applying the lower assessment. The reassessment and debunked buttons show alternative consequences, not a chronological continuation of a debunked nomination. Debunking preserves the recorded relevance score while stopping its earning weight.

Keep the teaching example focused on what the controls show. It does not simulate balances, transfers, admission checks, jury selection, arbitration or appeal settlement. For questions about caps, no eligible weights, holdback, earned balances or closed nominations, use the [private answers](speaker-script.md#private-reference-questions-to-answer-without-loading-the-slides) and [source register](presentation-sources.md). Do not expand those into another presentation segment.

## Join, read the policy and mark the workshop boundary

Before anyone joins, read the shared participation notice: use an alias; aliases, revealed scores and standings are visible to the room; some rounds assign an adversarial role that participants may decline. Watching without joining and sitting a nominee out are ordinary participation choices, not evidence of incompetence. Room records remain stored until the host wipes them; there is no automatic expiry. Wiping room records does not remove browser-stored seat credentials or sealed-score proofs. Ask permission before photographing or sharing identifiable results.

On slide 12, participants who choose to play scan the room code or type the printed address, enter an alias and press “Take a seat”. Compare the seated count with the people joining. Remove duplicate or stray seats with the cross on their chip while still in the lobby.

On slide 13, read the policy, attribution rule, anchors, worked examples and exclusions together. The policy in [the shared domain](../public/domain.js) is authoritative for this workshop: it is one authored example, not a protocol-wide default or mandatory rubric. Each pool crafts its own curation policy. Label the worked scores as hypothetical calibration examples, not measured ratings. Say: “We are keeping this exercise lightweight: use the brief descriptions and what you already know. We have not supplied a common evidence dossier. These scores illustrate coordination under uneven information, rather than a rigorous assessment of research-wide reliance.”

Apply the shared attribution rule to the contribution actually nominated. If two entries claim the same work, identify the shared portion and credit it only once across them; distinct work by the same beneficiary can still earn separate credit. The contract cannot recognize semantic overlap. A deposit and a different registry identifier do not establish distinct work. Do not turn this into a global ban on repeat beneficiaries.

For this example, ask what role the nominee’s completed and maintained work plays in current research workflows and what alternatives are available. Completed work can remain important; completion alone is no reason to discount it. Assess the available current-use evidence without inferring future maintenance or the benefit of another grant. Do not add an unstated funding-need or popularity criterion. Whether need or expected benefit from another grant should count is a choice for this pool's curation policy, not a missing mechanism. Other pools may choose differently; no change to the workshop policy follows from that distinction. Knowledge gaps can justify recusal; disagreeing with others does not by itself mean someone lacks knowledge.

On slide 14, say: “Our scores produce a group result and a reward zone. Scores inside the zone share the points; scores outside it lose points. Every seat counts equally here. Relevance scores guide support for contributions; these points reward the jurors.”

Move one score and ask what changed. At essentially zero spread, distance penalties are disabled. A non-void workshop round pays the full base reward, as specified by `SESSION.workshopReward` in [session data](../public/session.js). The precise calculation and differences from other versions remain in the private notes; do not teach contract settlement here.

Explain the incentive: jurors anticipate what others applying this policy will judge. That expectation may encourage careful reading, but it can also reward shared bias. Neither agreement nor profit proves improved judgment.

## Open and debrief each round

Before scoring, explain the rules without announcing an expected winner or group result. Keep the privately recorded comparison hidden until every compared round has closed. Afterwards, reveal the original note and compare it with the observed results, including failures. If the expectation was announced early, record that exposure and treat the exercise as primed.

Read the spread alongside the group result, response count, recusals and reasons. Scores bounded by zero and one have less room to vary near an endpoint. A wider reward zone alone does not establish more substantive disagreement, less expertise or worse judgment. These rounds concern different nominees and share participants and discussion; they are not independent trials.

Announce the grading cutoff before pressing “Open”. Reserve the end of the processing window for waking phones, opening seals and grading. “Close and reveal” unlocks when everyone has sealed or recused, or when the scoring clock runs out.

After closing, ask everyone to wake their phone and keep the room open. Connected phones reveal stored seals automatically. Check “Not yet revealed” and allow recovery before the announced cutoff. Do not require every seal to open. A person who never sealed or lost the stored salt cannot reveal. “Grade” fixes the cutoff: later reveals are recorded but excluded from that result.

Read the group result, reward zone, who gained points and who lost them. Ask:

1. Which policy test or piece of evidence most affected your score?
2. What did the game reward?
3. What would justify changing the judgment or asking another jury?

Then press “Next nominee”. A forfeit does not prove incompetence; a reward does not prove accuracy. If an informed minority loses, discuss why a full system needs a correction path and what that path requires.

On arXiv, say “assigned adversarial role” and “other jurors.” Compare the banner's assigned group with the jurors who submitted its instructed score. Assignment is sampled seat by seat; a majority, compliance and a successful attack are not guaranteed. Role compliance can reflect following instructions. A matching score establishes neither motive nor voluntarily chosen manipulation, and the other jurors are not certified honest by their reports. The outcome shows what these reports earned under this configuration.

## After the demonstration: attacks, responses and limits

On slide 16, inspect the actual result and widget. If the coordinated group benefits, ask what moved the group result. If it loses, ask which scores, relative influence and reward zone produced that outcome. Neither result establishes a universal safe collusion threshold.

Keep the live demonstration focused on the scoring rules and observed results. Explain proof reporting when participants need to use it, without presenting it as general protection against collusion. Introduce the attack catalogue on slide 17, after participants have seen the mechanism operate.

For each row on slide 17, state the attack, the response and its remaining weakness:

- **Different criteria:** a published policy supplies a shared question, but it can be ambiguous or misguided.
- **Copying or coordination:** scores are private until revealed. This does not prevent private coordination or buying votes.
- **Jury capture:** deposits put capital at risk, but concentrated stake can concentrate influence; a large deposit does not prove competence.
- **A disputed result:** a funded appeal brings another hearing, but costs, missing evidence and shared bias can still prevent correction.
- **Proof of a sealed score:** the workshop offers a reporting penalty and reward. A buyer may have other ways to verify compliance; this exercise rule is not general protection against vote buying.

Choose one attack to discuss concretely. Ask what the attacker would do, how the defense would respond and what weakness remains. Detailed contract behavior, payout rules and recovery machinery belong in the [private speaker answers](speaker-script.md#private-reference-questions-to-answer-without-loading-the-slides), not this walkthrough.

## Close with reflection and questions

Slide 18 runs from 1:09 to 1:20. Use about two minutes for a recap and first reactions, about seven for discussion and the final two to close. Do not turn this allowance into an eleven-minute monologue.

Restate the central idea: personal rewards for honest, competent and careful judgment can also create public benefit through better decisions. Public-goods curation is the application; funding is one use of its assessments. Ask where participants could use such an assessment and what would make them hesitant to rely on it.

If needed, choose one prompt at a time:

1. How do a claim challenge, relevance appeal and periodic reassessment differ?
2. Where would informed judgment help in your work, and what evidence would jurors need?
3. What would show that rewards improved judgment rather than simply agreement?
4. Who would benefit from the resulting decisions, and whose needs might the criteria miss?

Use a participant's concrete example. Keep both links visible: incentives must support useful judgment, and the resulting decisions must help people. This exercise establishes neither. Answer detailed mechanism questions briefly and offer the private source notes for follow-up. Finish by pointing to the handout's preprint and mailing-list codes. Press “Finish” if needed so standings remain visible.

## While the room plays

- “Sit this nominee out” recuses a juror: no scoring stake, reward share or absence fine. A prior proof leak can still be penalized. “Take my seat back” restores scoring while it is open. Nobody has to claim a knowledge deficit to decline.
- Jurors may change a seal until closing. The chip marks a changed seal with a small arrow.
- A proof contains a score and two words. Another juror seated for that nominee can submit it through “Report” for a bounty; the disclosing juror loses more. This concerns proof disclosure, not discussion of the policy. “Proofs: on screen” can put proofs behind a button.
- A phone waking before “Grade” can reveal automatically. A non-recused seated juror without a timely reveal loses the stake if at least one score opens. If nobody reveals, the round is void with no absence forfeits.
- Late arrivals may join any time and are at stake from the next nominee opened.

## Recovery and paper fallback

If the laptop drops, open the room on the phone, press “Take over” and confirm. If a screen says the game moved on, check the current state: another host action may already have succeeded. “End the game” keeps completed results. “New game” returns everyone to the summon screen and reseats them.

If everyone's connection fails, use the [score sheets](../public/paper/sheets.html). Jurors write in the nominee's row and fold the sheet. At “open”, read scores aloud in seat order and enter them in the [paper calculator](../public/paper/index.html) on a connected device, or later. The same ledger grades them.

Keep aliases consistent and enter a score or explicit recusal for each juror in each played round. An omitted name is an absence if at least one score opens. The calculator treats every name entered anywhere as seated in every entered round. For late arrivals, enter “recuse” in earlier rounds and explain the workaround. Leave unplayed rounds blank.

Paper play has no private bloc instruction. Everyone scores arXiv under the shared policy; use slide 16 for the collusion discussion. If switching after live rounds, announce that paper standings restart from this point: earlier balances are not imported. Allow extra collection time and shorten discussion explicitly.

If a stranger joins, remove their seat in the lobby. The room link is public; do not promise stronger access control.

## After the session

Explain that final standings remain visible until the host wipes them. Do not invite identifiable photographs without the people concerned agreeing. After the closing discussion, press “Wipe all” and confirm. The room has no automatic expiry; verify the wipe rather than assuming the session timeout removed data. Server-side seat authentication and browser-stored credentials and proofs remain after a room wipe; photographs already taken cannot be erased by it.

Keep only notes covered by the participation notice and the people concerned's consent. Prefer non-identifying observations about policy interpretations, surprising scores, minority reasoning, assigned roles and observed compliance. Further research use or retention of identifiable material needs separate disclosure and consent. Separate observations from explanations. This room did not test the entire protocol.

Follow the [README](../README.md) for authorized mailing-list exports and secret handling. Keep tokens out of slides, shared notes and handouts.
