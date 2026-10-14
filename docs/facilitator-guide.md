# Facilitator guide

Run this as an eighty-minute workshop led by the [handout](../public/handout/index.html): putting self-interest to work for the public good through an application of the Decentralized Curation framework. First establish why useful information requires curation for purpose-specific qualities, why information quality is multidimensional and why delegated curation requires honesty, competence and scrutiny. Compare institutions, introduce incentives and a brief Schelling-point exercise, then apply the paper’s general framework to public goods funding. The central hypothesis is that personal rewards for honesty, competence and scrutiny can make useful curation worthwhile and thereby help people make better decisions. The worked example derives relative shares from adjustable scores, then applies optional funding. The live jury examines one component; neither activity simulates the entire protocol. Times run from the session start. The deck has 24 slides; technical detail stays in the private notes.

For rehearsal and delivery, use the [slide-by-slide speaker script](speaker-script.md) and [printable speech](../public/speech/speech.pdf). The projected deck contains visual prompts; the script carries the explanation, optional detail and source links. Use the handout codes for the preprint and follow-up; the deck contains the room link needed to join the workshop. Both coordination rounds are spoken and need no device. The [offline deck](../public/deck/deck.pdf) is a fallback when the live demonstration is unavailable: it has 24 pages matching the 24 logical slides, including unrevealed coordination rounds on slides 7 and 8.

## Before people arrive

- Print the [handout](../public/handout/handout.pdf) on A4 paper and the [score sheets](../public/paper/sheets.html), two A5 sheets per A4 page. For thirty participants, print thirty handouts and fifteen pages of score sheets. Scan all three handout codes and check that the room, working paper and mailing list open.
- Rehearse joining, sealing, automatic opening, grading and host takeover in a separate room on a laptop and phone. Keep the session room for the session.
- Open the [deck](../public/deck/index.html) and separate host controls. Press `F1` or select **Shortcuts** for the keyboard guide, including next, previous, first and last slide controls. Charge both devices and check Wi-Fi and mobile data.
- Rehearse the NumPy example on slides 13 to 17: change a juror score and reset, set funding to zero and restore it, apply the appeal, show the debunked branch, apply the lower reassessment and reset. These controls share one state; the appeal and debunk controls show their result on the current slide. The jury controls and allocation table share slide 14; funding updates immediately when a judgment changes. Reset before the session.
- Rehearse both spoken coordination rounds on slides 7 and 8. Begin with the seven-by-seven grid: 49 numbers, with 100 in the center and gently tinted blue. Give five seconds for silent choices and ask for a simultaneous spoken answer. Select **Reveal example** to emphasize 100 and explain the converging cues. Advance with **Next**, Space or the right arrow to slide 8, allow five seconds to read the eight ways of playing, hear simultaneous answers and reveal again. Each slide has independent reveal state; **Reset game** hides the explanation and restores the current round's initial styling. The offline deck presents each round before its reveal; use the speaker script to explain the answers. No audience clicking or vote collection is involved.
- Without a shared display, direct participants to the deck from the home page, announce slide numbers and read the policy and results aloud. Let participants return to the game before opening a nominee.
- Review the [speaker script’s private questions](speaker-script.md#private-reference-questions-to-answer-without-loading-the-slides) and the [source register](presentation-sources.md). Keep the framework, this application and the teaching exercise distinct; use implementation detail only to answer a relevant question.
- Before participants arrive, privately record the comparison you expect between the portable document format round and the other rounds. Keep that note and the expected direction off participant-facing screens and out of the briefing until all compared rounds have closed. Do not call it preregistered research unless a dated record was actually fixed before scoring.

Summon the jury from the laptop: enter an alias, keep the six default nominees selected and press “Summon a jury and host it”. Leave the spares unticked; the docket cannot change after summoning. Keep the lobby open until the joining segment.

## Run of show

| Time | Slides | Purpose and action |
| --- | --- | --- |
| 0:00 to 0:25 | 1 to 17 | Establish purpose-specific curation, multidimensional information quality and curator trust. Compare institutions, introduce incentives and run both Schelling rounds within 90 seconds. Explain the feedback loop, then apply the four-step framework to public goods funding using NumPy’s release evidence and three correction paths. |
| 0:25 to 0:32 | 18 to 20 | Join the room, read the shared policy and use the points widget. Make the workshop's simplifications explicit. |
| 0:32 to 0:59 | 21 | Play all six nominees. Allow about four and a half minutes each: roughly three minutes to score, recover phones, reveal and grade; ninety seconds to discuss. |
| 0:59 to 1:09 | 22 and 23 | Debrief the results and collusion widget. Then examine attacks, responses and remaining weaknesses. |
| 1:09 to 1:20 | 24 | Brief recap, then reflection and questions. Connect personal rewards to useful judgment and public benefit; close with the handout’s follow-up codes. |

These are facilitation allowances, not changes to the game's scoring clock. If joining or paper collection takes longer, shorten discussion explicitly. Processing a round and interpreting it are separate work.

## Establish the problem, then introduce the framework

The first eleven slides establish the problem, institutional choices and design tools before showing the funding application. Draw directly on the foundational paper’s introduction and four-step framework, recorded in the [source register](presentation-sources.md). Keep the opening through the reassessment example within twenty-five minutes; both spoken coordination rounds together take 90 seconds.

Open with purpose-specific usefulness. Information does not arrive ready for every decision: curation identifies relevant claims and evidence, assesses their quality and establishes context. Academic work already relies on peer review, systematic reviews, research databases and other curators. The paper’s objective is decision-grade knowledge: information sufficiently accurate and relevant for a specified decision. Avoid claiming that information has no use before curation; emphasize what makes it useful for the chosen purpose.

Make multidimensional quality explicit. Accuracy asks whether a claim holds under its scope and time; relevance asks how much it matters under a stated goal. Accurate football trivia can still fail a world-politics feed. Timeliness, interpretability, completeness and accessibility can also matter. The purpose determines the relevant dimensions. Evidence supports their assessment; a strength in one dimension does not establish quality in every other dimension.

On slide 4, explain the reliance that delegation creates. Honesty is sincere reporting; competence is the ability to assess the subject; scrutiny is critical examination of claims and evidence. A sincere person can be mistaken, and a competent person can report strategically or fail to investigate. Curation is valuable, so these qualities of its curators are consequential. The proposal supports trust with incentives, inspectable evidence and correction.

Compare approaches fairly on slide 5. A central curator can offer expertise, speed and a coherent purpose but concentrates dependence on its judgment and incentives. Simple vote-counting opens participation and aggregates preferences but does not by itself gather evidence or make people informed. Democratic institutions may combine expert advice, discussion and scrutiny. Open entry does not ensure equal influence or representation of affected people. Better evidence cannot decide whose interests count or resolve every value disagreement.

On slide 6, use game theory to make rewards, costs, available strategies, information and expectations explicit. Ask which behavior becomes attractive when participants respond to one another. The design objective is to make honesty, competence and scrutiny the most rewarding way to participate. Informed investigation must be worthwhile after effort and other costs; agreement alone does not show that investigation occurred. Present this as a mechanism-design problem to analyze and test, not deterministic proof that incentives dictate outcomes.

On slide 7, ask people to silently choose a number from the seven-by-seven grid that they expect others to choose. Give five seconds without naming the cues or pointing to a number. Count to three and ask everyone to say their number together. Select **Reveal example** only after hearing the room. The reveal emphasizes 100: it sits in the center, is the only even number among 48 odd values and the only round hundred, and begins with a gentle blue tint. Explain how converging cues can align expectations, then advance to slide 8.

Slide 8 shows all eight combinations of honest or deceptive, competent or uninformed, and thorough or lazy. Honest · Competent · Thorough starts with a gentle blue tint and darker text, matching the cue for 100; reveal makes the emphasis stronger. Ask: “Choose the way of playing you expect everyone else to choose.” Give five seconds, count to three, hear the room and reveal. **Honest · Competent · Thorough** is the intended focal choice: a shared standard for how to play. Explain that thorough means critical scrutiny of claims and evidence. Connect the recognition task to the design objective: make acting on that standard most rewarding. Spend roughly 35 seconds on the numbers and 55 seconds on the ways of playing and transition. The [speaker script](speaker-script.md#7-find-a-shared-focal-point) keeps the historical examples as optional private context, outside this 90-second delivery.

If either round has scattered answers, acknowledge that the room did not converge. The controls reveal the intended cue and explanation, not measured votes. **Reset game** hides the explanation and restores the initial styling: a gentle blue tint for the focal choice in either round. Normal navigation reaches each round; revisiting a slide preserves its reveal state until it is reset. Nobody needs to click, scan or use a device. These exercises illustrate coordination through numerical and contextual salience. They do not establish that honesty is the only equilibrium or most profitable strategy. The transition is: how can the curation game make honesty, competence and scrutiny worth acting on?

On slide 9, explain the feedback loop in thirty seconds, from 0:10 to 0:10:30. Coherence means agreement between judgments. If others assess honestly, competently and thoroughly, seeking coherence can reinforce the same conduct. This depends on informed judgment being more rewarding after costs than a cheap prediction of other people’s answers. State that as the design goal, not a proven best response. Use the remaining ninety seconds, from 0:10:30 to 0:12, for the framework.

On slide 10, trace the four-step framework: identify the curation problem behind the decision; identify its quality dimensions; use factual challenges where falsification is feasible and cheaper than exhaustive verification; choose a mechanism for each dimension. The challenge condition limits where that mechanism is useful, rather than excluding every domain that needs another approach. The paper develops news as an application; this workshop explores public goods funding.

Define credible consensus as evidence-grounded judgment under an explicit policy, with usable routes for correction. Consensus means the resulting collective judgment, not unanimity. Keep two evaluation questions distinct: do the incentives reward useful curation, and do decisions based on it improve outcomes for affected people? Reserve detailed questions about selection and replenishment for the private answers.

## Apply the framework to public goods funding

On slide 11, show the two-dimensional quality space before introducing pool roles. The upper-right target joins accuracy and high relevance. The accurate, lower-relevance example still carries potential funding weight: do not describe the ellipse as an admission cutoff. Explain the distinct mechanisms beside the plot, then move to the pool diagram.

The transition on slide 12 is: “We need informed judgment that people can participate in, inspect and challenge. Now let us apply the framework to deciding which public contributions to support.” Introduce the goal, criteria, evidence and rewards as a policy, and the pool as its application to nominations. A submitter’s deposit backs nomination claims; jurors’ deposits enter the draw for paid assessment. These are separate deposits with separate roles. Use “juror” for someone drawn to assess a nomination and “deposit” in the main explanation; technical sources may call these curators and bonds.

Use the conference memo to tailor examples to a research audience. The author has worked on this thesis since 2021; the memo is not a survey or evidence of demand, adoption or efficacy. Preservation, discovery and granular attribution are distinct parts of research infrastructure. This mechanism depends on accessible evidence; it does not supply all those layers. Metrics can inform judgment, but choosing a measure, its weight and its interpretation embeds a purpose. A jury score can also be gamed. Keep asking how assessment can be inspected, challenged and improved.

Use the NumPy 2.0.0 release throughout. Say: “The release and source records are real. This nomination, its jury scores and funding parameters are illustrative. No NumPy application, payment or accuracy ruling is being reported.” The policy scores the nominee; the release is evidence about its work, rather than the entire object being scored.

- **Slide 1:** Introduce the decision problem and proposal in one minute. Move directly from individual assessment limits to institutional incentives.
- **Slide 2:** Introduce the four quality lenses as a framework for assessing fitness for use. Retain the academic example.
- **Slide 3:** Make multidimensional quality explicit. Distinguish accuracy and relevance, then show why the chosen purpose determines which other dimensions matter.
- **Slide 4:** Define honesty, competence and scrutiny and explain why delegating curation makes us rely on all three.
- **Slide 5:** State both the strengths and limits of a central curator and simple vote-counting. Keep assessment distinct from representation and public authorization.
- **Slide 6:** Show how game theory makes strategic responses to rewards and costs explicit. State the objective of making honesty, competence and scrutiny rewarding; distinguish that objective from a proven optimum.
- **Slide 7:** Run the number round in about 35 seconds. Hear the room before revealing the numerical cues, then advance normally.
- **Slide 8:** Run the ways-of-playing round in about 55 seconds. Hear the room before revealing the shared standard of honest, competent and thorough conduct. Historical examples remain optional private context; coordination does not establish truthful incentives.
- **Slide 9:** Connect expectations, rewards and conduct in thirty seconds. Define coherence as agreement between judgments; the goal is to make informed judgment its most rewarding route.
- **Slide 10:** Trace the four design steps in order. The framework precedes its applications; do not teach funding mechanics yet.
- **Slide 11:** Spend 45 seconds on the quality space. Accuracy asks whether factual claims are correct; relevance asks how much the work matters to this pool. Point to the accurate, highly relevant target, the accurate but peripheral example, and the relevant but false example. The map is conceptual: no numerical accuracy score or relevance pass threshold is introduced. Factual challenges can end eligibility; relevance sets relative funding priority.
- **Slide 12:** Trace funders → pool → beneficiaries, then name the distinct assessment roles: the creator publishes policy, nominators submit claims and evidence, jurors assess relevance, and fact-checkers take factual disputes to an external arbitrator. Curation costs need funding; a beneficiary budget can arrive later. Continuous funding still includes per-nomination jury and appeal rounds.
- **Slide 13:** Combine the shared question and the checkable NumPy nomination. Name reliance, role and alternatives; distinguish the creator’s policy choice from whose needs it includes. Use the 16 June 2024 release date as evidence, without loading the slide with release features or project history.
- **Slide 14:** Show the initial jury reports, weighted mean and funding allocation together. Move Juror A from 0.70 to 1.00: the mean rises from 0.60 to 0.75 and NumPy’s daily funding from 40 to 45.45. Ask what evidence could justify that revision and which other shares shrink. Reset with **Reset funding example**. Set the budget to zero and restore it to show that assessments persist independently of beneficiary funding. Keep seat-weighting as context, not a separate arithmetic lesson.
- **Slide 15:** Apply the twelve-seat appeal result and read the result on the current slide. Competing, fully funded proposals trigger a larger jury. Ask what new evidence could improve its judgment. Keep backer settlement, funding windows and exceptional outcomes in the private notes.
- **Slide 16:** Invent the 2020 release claim and contrast it with the 2024 record. Explain the independent claim challenge, external arbitrator, successful fact-checker’s reward and end of the nomination. Show the outcome on this slide. Future funding stops; earlier earnings stay owed. This is a teaching example, not a real claim or ruling about NumPy. A lack of challenges does not establish that every claim was examined.
- **Slide 17:** Restore the original nomination and apply a lower periodic reassessment. Contrast a fresh assessment with an appeal of an existing score. New weights affect future funding; earlier earnings stay earned. Keep this transition to one minute.

Participants should now distinguish a false or untestable claim challenge, a relevance appeal and a periodic reassessment, and explain how each can affect funding. Avoid spending this segment on every parameter.

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

On slide 18, participants who choose to play scan the room code or type the printed address, enter an alias and press “Take a seat”. Explain that every round gives each seat equal weight regardless of its earlier results. The points exercise does not test accumulated capital, changing draw chances or competence selection. Compare the seated count with the people joining. Remove duplicate or stray seats with the cross on their chip while still in the lobby.

On slide 19, read the policy, attribution rule, anchors, worked examples and exclusions together. The policy in [the shared domain](../public/domain.js) is authoritative for this workshop: it is one authored example, not a protocol-wide default or mandatory rubric. Each pool crafts its own curation policy. Label the worked scores as hypothetical calibration examples, not measured ratings. Say: “We are keeping this exercise lightweight: use the brief descriptions and what you already know. We have not supplied a common evidence dossier. These scores illustrate coordination under uneven information, rather than a rigorous assessment of research-wide reliance.”

Apply the shared attribution rule to the contribution actually nominated. If two entries claim the same work, identify the shared portion and credit it only once across them; distinct work by the same beneficiary can still earn separate credit. The contract cannot recognize semantic overlap. A deposit and a different registry identifier do not establish distinct work. Do not turn this into a global ban on repeat beneficiaries.

For this example, ask what role the nominee’s completed and maintained work plays in current research workflows and what alternatives are available. Completed work can remain important; completion alone is no reason to discount it. Assess the available current-use evidence without inferring future maintenance or the benefit of another grant. Do not add an unstated funding-need or popularity criterion. Whether need or expected benefit from another grant should count is a choice for this pool's curation policy, not a missing mechanism. Other pools may choose differently; no change to the workshop policy follows from that distinction. Knowledge gaps can justify recusal; disagreeing with others does not by itself mean someone lacks knowledge.

On slide 20, say: “Our scores produce a group result and a reward zone. Scores inside the zone share the points; scores outside it lose points. Every seat counts equally here. Relevance scores guide support for contributions; these points reward the jurors.”

Move one score and ask what changed. At essentially zero spread, distance penalties are disabled. A non-void workshop round pays the full base reward, as specified by `SESSION.workshopReward` in [session data](../public/session.js). The precise calculation and differences from other versions remain in the private notes; do not teach contract settlement here.

Explain the incentive: jurors anticipate what others applying this policy will judge. That may encourage critical reading, but it can also reward cheap prediction or shared bias. Scores determine both the group result and the reward zone, so payout is not an independent measure of judgment quality. Neither agreement nor profit proves improved judgment.

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

On slide 22, inspect the actual result and widget. If the coordinated group benefits, ask what moved the group result. If it loses, ask which scores, relative influence and reward zone produced that outcome. Neither result establishes a universal safe collusion threshold.

Keep the live demonstration focused on the scoring rules and observed results. Explain proof reporting when participants need to use it, without presenting it as general protection against collusion. Introduce the attack catalogue on slide 23, after participants have seen the mechanism operate.

For each row on slide 23, state the attack, the response and its remaining weakness:

- **Different criteria:** a published policy supplies a shared question, but it can be ambiguous or misguided.
- **Copying or coordination:** scores are private until revealed. This does not prevent private coordination or buying votes.
- **Jury capture:** deposits put capital at risk, but concentrated stake can concentrate influence; a large deposit does not prove competence.
- **A disputed result:** a funded appeal brings another hearing, but costs, missing evidence and shared bias can still prevent correction.
- **Proof of a sealed score:** the workshop offers a reporting penalty and reward. A buyer may have other ways to verify compliance; this exercise rule is not general protection against vote buying.

Choose one attack to discuss concretely. Ask what the attacker would do, how the defense would respond and what weakness remains. Detailed contract behavior, payout rules and recovery machinery belong in the [private speaker answers](speaker-script.md#private-reference-questions-to-answer-without-loading-the-slides), not this walkthrough.

## Close with reflection and questions

Slide 24 runs from 1:09 to 1:20. Use about two minutes for a recap and first reactions, about seven for discussion and the final two to close. Do not turn this allowance into an eleven-minute monologue.

Return to the opening problem: people need usable evidence for decisions but cannot inspect everything themselves. Restate the proposal: make useful curation personally rewarding through honesty, competence and scrutiny, then evaluate whether decisions based on it create public benefit. Public-goods curation is the application; funding is one use of its assessments. Ask where participants could use such an assessment and what would make them hesitant to rely on it.

If needed, choose one prompt at a time:

1. How do a claim challenge, relevance appeal and periodic reassessment differ?
2. Where would informed judgment help in your work, and what evidence would jurors need?
3. What would show that rewards improved judgment rather than simply agreement?
4. Who would benefit from the resulting decisions, and whose needs might the criteria miss?

Use a participant's concrete example. Keep both links visible: rewards must make useful investigation worthwhile, and the resulting decisions must improve outcomes for affected people. Assess those outcomes separately from scores and profits, including costs, excluded needs and harms. This exercise establishes neither link. Answer detailed mechanism questions briefly and offer the private source notes for follow-up. Finish by pointing to the handout's preprint and mailing-list codes. Press “Finish” if needed so standings remain visible.

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

Paper play has no private bloc instruction. Everyone scores arXiv under the shared policy; use slide 22 for the collusion discussion. If switching after live rounds, announce that paper standings restart from this point: earlier balances are not imported. Allow extra collection time and shorten discussion explicitly.

If a stranger joins, remove their seat in the lobby. The room link is public; do not promise stronger access control.

## After the session

Explain that final standings remain visible until the host wipes them. Do not invite identifiable photographs without the people concerned agreeing. After the closing discussion, press “Wipe all” and confirm. The room has no automatic expiry; verify the wipe rather than assuming the session timeout removed data. Server-side seat authentication and browser-stored credentials and proofs remain after a room wipe; photographs already taken cannot be erased by it.

Keep only notes covered by the participation notice and the people concerned's consent. Prefer non-identifying observations about policy interpretations, surprising scores, minority reasoning, assigned roles and observed compliance. Further research use or retention of identifiable material needs separate disclosure and consent. Separate observations from explanations. This room did not test the entire protocol.

Follow the [README](../README.md) for authorized mailing-list exports and secret handling. Keep tokens out of slides, shared notes and handouts.
