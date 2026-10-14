# Speaker script

The [handout](../public/handout/index.html) leads the session’s title and scope. This script accompanies [the presentation deck](../public/deck/index.html). Slide numbers match the deck. Read the spoken paragraphs naturally; bracketed directions are private delivery cues. The slides supply a picture, a question or a result while the explanation comes from you.

The eighty-minute schedule matches the facilitator guide. Timing includes demonstrations, audience answers and quiet scoring time, not continuous speech. Protect the game's scoring window. If joining or recovery takes longer, shorten a later discussion explicitly rather than rush participants through an active round. The deck has 18 slides. Source links and technical answers remain in the private notes; follow-up codes are on the handout.

Use the live values on screen if a slider changes them. Default numerical checkpoints below describe the reset example only. The [deck](../public/deck/index.html) owns those inputs; the [shared policy](../public/domain.js), [session information](../public/session.js), [facilitator guide](facilitator-guide.md) and [source register](presentation-sources.md) remain the detailed references.

## 1. Putting self-interest to work for the public good

**Target: 1 minute. Elapsed: 0:00 to 0:01.**

“Every day we use curated information: search results, recommendations, reading lists. Curation helps us find what matters, but it asks us to trust whoever selects it. Research is no different: someone decides what deserves attention, scrutiny and support.

“Decentralized Curation asks how we can open participation and reward honesty, competence and scrutiny in judgment and fact-checking, so this useful work can also create public benefit.

“I have worked on this framework since 2021. Today we will explore one application, experience part of it together, and then attack it.

“Thank you to Octant for sponsoring this session.”

[Look at the audience. Let the title settle before advancing.]

## 2. Who decides? Whose needs count?

**Target: 2 minutes. Elapsed: 0:01 to 0:03.**

“Democracy can combine public voice with expert advice. Counting preferences alone does not ensure informed judgment, and one expert can still miss others' needs. We want open participation and rewarded good judgment together, without assuming that open entry represents everyone.

“Here is a quick coordination game. Look at the three codes on your handout. Without talking or scanning, choose the one you think most people will choose: left, middle or right. Keep it private.

[Allow five silent seconds. Do not point out the middle code's dark green color yet. This is a quick show of hands, with no money or app scoring.]

“Reveal together: one finger for left, two for middle, three for right. One, two, three.

[Observe the distribution before pointing out the middle code's dark green color. If there is a tie or no clear cluster, say: “We did not find one shared choice this time.”]

“I made the middle code green. I notice it and expect you to notice it too. That shared focal point is called a Schelling point.

“Shared expectations can guide independent choices. The curation game aims to make honest assessment that shared focal point. Credible consensus means a collective judgment people have reasons to rely on. We still need to test whether the incentives earn that credibility.”

[The code labels also influence choices. Do not claim that the color caused the result or that this exercise proves honesty. Keep the two-minute slot.]

## 3. Curating public goods

**Target: 2 minutes. Elapsed: 0:03 to 0:05.**

“Here is one application: curating public goods against a stated goal. First, a group defines the goal, the judging criteria, the required evidence and the assessor rewards. Together, these rules form its policy. A pool applies that policy to the nominations submitted to it.

“Someone nominates a contribution, supplies testable claims and evidence, identifies its beneficiary and puts down a deposit backing those claims. A jury judges relevance under the criteria. People can fund an appeal, and periodic reassessment keeps the scores current. The resulting weights describe relative importance under the chosen criteria. A funding budget can arrive later and use those shares.

“Two questions run through this process. Do the nomination's testable claims hold up to challenge? And, given those claims, how relevant is the contribution to the stated goal?

“An accuracy challenge addresses the claims. Relevance assessment judges the contribution under the criteria. A high relevance score does not certify that every claim is true.

“Funding is one use of these assessments. Decentralized Curation is the broader framework. It distributes the work of judging and checking; it still depends on sound criteria, usable evidence and credible arbitration.”

[Trace the main path once. Point to the separate accuracy path; leave its procedure for slide 9.]

## 4. Define the goal and criteria

**Target: 2 minutes. Elapsed: 0:05 to 0:07.**

“For this example, our goal is to support open infrastructure that research depends on. The question is how much the nominee's completed and maintained work underpins how research is done, shared and kept, now.

“Examine who relies on it, its role in research and the alternatives. Releases, documentation and downstream use provide evidence. Costs and limitations belong there too.

“This is a choice made for this example pool. Another pool may care about a different problem and need a different policy. Curation costs must be funded. A budget to distribute to beneficiaries is useful upfront, but optional: it can arrive after we have curated the weights.

“Publishing a policy lets people inspect it. The creator chooses the terms; funders choose whether to support the pool; jurors apply its criteria. We still need to ask affected people whose needs those criteria include or miss.”

[Read the scoring prompt once. Do not read every anchor.]

## 5. Nominate work that we can inspect

**Target: 2 minutes. Elapsed: 0:07 to 0:09.**

“Let us use NumPy, the array library used in scientific Python. Its version 2.0.0 was released on 16 June 2024. That is a testable claim: we can check the release record.

“Establishing that fact does not tell us how much the work matters. That needs judgment under our criteria: who relies on it, what role it plays and what alternatives exist.

“The release record is real. The nomination, scores and funding in this demonstration are illustrative. This is not an actual application by NumPy.”

[Point to the release date, then ask which of our criteria the date alone can answer. Keep factual evidence separate from the relevance judgment.]

Source for this example: [NumPy release record](https://numpy.org/news/#numpy-2-0-0-released). Keep the link in the notes for questions rather than projecting it.

## 6. Jurors score independently

**Target: 3 minutes. Elapsed: 0:09 to 0:12.**

“People put down a deposit to enter the draw for paid jury work. That deposit is their stake: capital they can lose. More available stake increases their chance of being drawn. Here six drawn seats are held by three jurors. One person can hold several seats, so six seats do not necessarily mean six independent people.

“Each juror reads the evidence and privately seals a score before revealing it. The technical name is commit and reveal. These controls show scores after revelation. The result is the weighted mean: a juror holding more of the drawn weight has more influence on it.

“Watch what happens when I move one score.”

[Move one slider. Pause while the audience follows the change.]

“The calculation changes predictably. To decide whether the judgment improved, we need the reason and the evidence.

“I will restore that score so that we can follow the same starting point through the next steps.”

[Restore the changed slider to its starting value. If asked about the arithmetic, use the displayed calculation. Ask one person what evidence could justify a higher or lower score. Save the technical limitations of commitment and revelation for slide 17.]

## 7. A disputed score can face a larger jury

**Target: 3 minutes. Elapsed: 0:12 to 0:15.**

“Suppose people believe that assessment missed something important. Anyone can help fund a proposed score, including the person who nominated the work. Competing, fully funded proposals trigger a larger jury.

“Here the jury grows from six seats to twelve. It examines the same nomination and can reach its own judgment. Let us apply this illustrative result.”

[Select **Apply appeal result**. Let the audience see which score and shares change.]

“An appeal gives people a way to contest a score. More seats do not automatically mean more knowledge or a better answer: correction still needs evidence, participation and funding.”

[Ask what new evidence they would want the appeal jury to consider. Keep settlement rules in the private questions below.]

## 8. Curate the shares; distribution can follow

**Target: 3 minutes. Elapsed: 0:15 to 0:18.**

“The table shows each contribution's weight, its share of the total and what that share receives from a funding budget. The shares sum to one. They describe relative importance under the chosen criteria.

“At the reset values, NumPy's weight is 0.60 out of a total of 1.50: a 40 percent share. Set funding to zero: the shares remain. Add 100 units per day, and NumPy's share receives 40.”

[Set the funding control to zero, then restore 100. Point to the unchanged shares and changed amounts. Use the current values if the appeal is still applied.]

“We have curated an assessment that can exist before a funding budget. Funding is one use of it. These weights are judgments under our criteria, not measurements of public benefit.”

[Ask: “If one weight rises and the budget stays fixed, whose share changes?” Take a short answer.]

## 9. Claim challenges reward fact-checkers

**Target: 3 minutes. Elapsed: 0:18 to 0:21.**

“Now imagine the nomination says: ‘NumPy 2.0.0 was released in 2020.’ We just checked its release record: 16 June 2024. That gives a fact-checker evidence for a challenge.

“Anyone can challenge a claim as false or untestable while its nomination is active. An external arbitrator decides. If the challenge succeeds, the fact-checker receives the submitter's deposit and the nomination ends.

“That reward gives people a reason to check claims. It is different from asking a jury how relevant the contribution is.”

[Select **Show debunked outcome**.]

“Future funding to this nomination stops. What it already earned remains its beneficiary's money. The submitter can make a fresh nomination.

“The 2020 claim is invented for this demonstration; it is not an accusation against NumPy.”

[Ask who has an incentive to check the claim and where the reward comes from. Keep deposit settlement and withdrawal details in the private questions below.]

## 10. Reassess periodically

**Target: 2 minutes. Elapsed: 0:21 to 0:23.**

“A contribution's claims can remain accurate while its relevance changes. Alternatives may improve or people may rely on it less. Periodic reassessment runs a fresh scoring round to keep the judgment current. An appeal is different: it contests an existing score.

“This is a separate branch of the example. I am restoring the original nomination and applying an illustrative lower assessment.”

[Select **Apply lower assessment**, then return to the allocation table if helpful.]

“The new weight changes future funding. Earlier earnings stay earned. A higher assessment would also change future funding.”

[Ask for one change in evidence that could justify reassessment. The calculator shows current rates, not accumulated balances.]

## 11. Honesty, competence and scrutiny

**Target: 2 minutes. Elapsed: 0:23 to 0:25.**

“We want personal rewards to encourage judgment that other people can rely on. That takes three different qualities.

“Honesty means reporting sincerely. Competence means knowing how to judge the subject. Scrutiny means critically examining claims and evidence. Someone can examine a claim honestly and still lack expertise; an expert can also fail to question it.

“Fees support the work of scrutiny. Paying someone does not create expertise or prove that they examined the claims and evidence.

“Jurors score privately. Agreement earns rewards; disagreement can bring penalties. Honesty is the intended Schelling point, but avoiding collusion does not show it is the only successful strategy.

“Informed investigation must pay for its effort and earn more overall than cheaply predicting the group. Otherwise the game can reward prediction without rewarding competence.

“Losses reduce future influence when they leave a juror with less stake relative to others, after any replenishment. We need to test these incentives, and whether better assessment improves decisions for the people affected.

“Now let us experience one part of that game ourselves.”

## 12. Join the workshop

**Target: 3 minutes. Elapsed: 0:25 to 0:28.**

“Scan the code or open the room address. Use an alias and take a seat. You do not need an account or wallet; we are using points.

“Every round gives each seat the same weight, regardless of earlier wins or losses. This exercise lets us examine scoring incentives; it cannot test whether stake losses select better jurors.

“Your alias, revealed scores and standings will be visible to this room. Some rounds may give you an optional adversarial role. You can decline that role, sit out a nominee or simply observe. Please ask people before photographing or sharing identifiable results.

“I will wipe the room records after our discussion. The room does not automatically expire, and that wipe does not remove credentials or sealed-score proofs stored on your own device.

“Keep your device awake when we reveal. For now, read the policy before taking your first scoring decision.”

[Compare seats with participants. Remove duplicate or stray seats before opening the first nominee. Do not put private host controls on the projector.]

## 13. Use one shared policy

**Target: 2 minutes. Elapsed: 0:28 to 0:30.**

“Our question is the same one from the example: how much does this nominee's completed and maintained work underpin how research is done, shared and kept, now?

“Consider reliance, its role in research and available alternatives. Keep your personal taste, your own field and who runs or funds the project separate from that assessment. A completed contribution can still matter greatly today.

“Score the work actually nominated. If two nominations claim the same underlying work, we should not credit that same work twice. Distinct contributions by the same beneficiary can still count separately.

“The anchors give us a common language, not measured truths. We are using short descriptions and our prior knowledge today, without a common evidence dossier. You may sit out if you lack enough information, or for any other reason. This is an exercise in how judgment and incentives interact, not a rigorous evaluation of these projects.”

[Read the anchor labels together. Invite one clarification about the policy. Avoid announcing which nominee should score highest.]

## 14. See what the workshop rewards

**Target: 2 minutes. Elapsed: 0:30 to 0:32.**

“The scores we submit produce a group result. Around it is a reward zone. Every seat counts equally in this workshop.

“Inside that zone, scores closer to the group result receive a larger share of the points. Outside it, scores lose points, with larger losses further away. If everyone gives the same score, there are no distance penalties.

“Watch the reward zone when I move one score.”

[Move a dot, then reset. Let the audience describe what changed.]

“Your score helps shape the result against which you and everyone else are rewarded. That can draw attention to the shared question; it can also reward a shared mistake.

“Relevance scores guide support for contributions; juror rewards pay the people assessing them. This workshop uses points to let us experience those incentives.”

## 15. Play the jury

**Target: 27 minutes. Elapsed: 0:32 to 0:59.**

“For each nominee, read the description, apply the policy and seal your own score. Keep the two secret words used to seal your score private. When I close scoring, keep this page open so your device can reveal. You can change your seal before closing, or sit the nominee out.

“Before opening each round, I will announce the grading cutoff and leave time for sleeping phones to reconnect and reveal. Once I grade, a later reveal cannot change that round's result.”

[Play the six default nominees in the order shown by the room. Allow roughly four and a half minutes each: quiet scoring first, then recovery and grading, followed by ninety seconds of discussion. Do not shorten an active scoring window.]

After each result, ask:

“Which piece of evidence or part of the policy most affected your score?”

[Hear one higher and one lower assessment when time permits. Then point to the outcome.]

“What did this rule reward in the reports we actually received?”

[Do not call paid jurors correct or forfeiting jurors incompetent. Record interesting differences for the debrief instead of resolving every one now. Do not announce the privately recorded comparison before all the compared rounds finish.]

If proof reporting needs explanation, say:

“A sealed-score proof contains the score and its two words. Another seated juror can report a valid proof during scoring for a bounty; the disclosing juror loses points. This concerns disclosing the proof, not discussing the policy.”

[For the assigned-role round, let the interface deliver the private instruction. Participants may decline it. Do not identify roles publicly before the result. If nobody reveals, explain that the round is void; do not infer a judgment from it.]

## 16. What shaped the scores?

**Target: 5 minutes. Elapsed: 0:59 to 1:04.**

“Now let us interpret what happened. Where did the policy guide us, and where did expectations about other people guide us? What evidence explained a high score or a low one? Did we disagree about the facts, the policy's scope, or the available alternatives?”

[Hear two or three explanations. Reveal the privately recorded comparison now, including any mismatch with the observed results.]

“The group result and spread describe these reports, without explaining them. Scores near zero or one have less room to vary. A wider reward zone alone does not establish deeper disagreement.

“In the assigned-role round, compare the people assigned a role, the scores actually submitted and the points actually earned. Being assigned a role is not the same as following it. Following an instruction is not evidence that money caused manipulation. A matching score does not tell us someone's motive.

“Let us use the widget to examine how a coordinated group can move the group result.”

[Move the bloc control gradually. State the displayed configuration; do not announce a universal safe percentage.]

“The group can sometimes move the result against which everyone is rewarded. A minority can also have a good argument and lose. This is why coherence alone cannot certify accuracy. One room and one simulated group do not establish resistance to capture.”

## 17. Attack the mechanism

**Target: 5 minutes. Elapsed: 1:04 to 1:09.**

“Now let us examine where the defenses could fail.

“A published policy gives us shared criteria, but the criteria can still be ambiguous or misguided.

“Private scoring makes copying harder while scores remain hidden. Early disclosure exposes a score before others finish. Sealing does not prevent people from coordinating privately or buying votes.

“Deposits put a juror's money at risk, but concentrated stake can still concentrate influence. A large deposit alone does not demonstrate competence.

“An appeal allows another hearing, but it needs funding and useful evidence. A larger jury can still share the same bias.

“This workshop adds a penalty and reward for reporting proof of a disclosed score. That particular rule belongs to this exercise. A vote buyer may have other ways to check compliance.

“Choose one of these attacks. What would the attacker do, and what would the defense need to stop it?”

[Use the remaining time for one concrete attack and response. Ask what weakness remains. Keep contract comparisons, payout rules and recovery machinery in the private notes.]

## 18. Close the loop

**Target: 11 minutes. Elapsed: 1:09 to 1:20.**

“The aim is open participation supported by honesty, competence and scrutiny. Personal rewards should make that work worthwhile for the people doing it, while their assessments help others make better decisions.

“We explored public-goods curation, with funding as one use of its results. What would make this useful in your work, and what would make you hesitate to rely on it?”

[Use about two minutes for the recap and first responses. Keep the remaining time conversational.]

[From 1:11 to 1:18, invite questions. If the room is quiet, choose one prompt at a time:]

- [“What is the difference between challenging a claim, appealing a score and reassessing later?” Ask a participant to explain before adding anything.]
- [“Where would informed judgment make a difference in your work? What evidence would those jurors need?”]
- [“What would show us that the rewards improved judgment, rather than simply producing agreement?”]
- [“Who would benefit from the resulting decisions? Whose needs might our criteria miss?”]

[Use a concrete example from the audience. Keep detailed mechanism questions brief and offer the private source notes for follow-up. Do not fill the time with a second lecture.]

[At about 1:18, bring the discussion back to the central idea.]

“We need two separate results: rewards must make useful investigation worth doing, and the decisions must improve outcomes for the people affected. Agreement and profit alone establish neither.

“Your handout has the codes to read the framework preprint and stay in touch. Please bring me both use cases and counterexamples. Thank you.”

[Leave the closing slide visible for questions and point people to the handout codes. Finish the game if necessary so final standings remain available. After the discussion, wipe room records as promised and verify that the wipe succeeded.]

## Private reference: source scope

Use these notes for source questions; there is no corresponding projected slide.

“The sources have different roles. The published paper records the research at a particular release. The source register identifies later working choices. The inspected implementation snapshot supports statements about that code, not a claim that those contracts are deployed, audited or identical to the paper.

“The Arrow proposal supports the experiment's stated scope. It does not supply results. Some implementation and proposal sources are access-controlled, so the public explanation states what was inspected and where independent access is limited.

“If a source seems to contradict today's explanation, first check which version and which system it describes.”

References: [published version 1.2.0](https://doi.org/10.5281/zenodo.23313625), [published manuscript source](https://github.com/0xferit/manuscript-decentralized-curation/blob/1b1805d66dc46b7b90f2a28c635cd28d0f6794c1/paper.qmd), [Schelling point explanation](https://en.wikipedia.org/wiki/Focal_point_(game_theory)), [inspected implementation snapshot](https://github.com/golemfoundation/octant-v3-monorepo/tree/ca8c8560119dee34f809a31e5149f4a6217467fb), [Arrow experiment proposal](https://app.notion.com/p/3e4e165689aa819b8aa6d2f4c5d54330), [public mechanism summary](../public/mechanism/index.html), [full source register](presentation-sources.md), [proposed evaluation plan](evaluation-plan.md).

## Private reference: questions to answer without loading the slides

These are optional answers, not another presentation segment. The [source register](presentation-sources.md) retains the detailed rules and their evidence boundaries.

### How do the funding weights and juror rewards differ?

“The example's funding weight is the smaller of the requested cap and the adopted relevance score. The cap is a ceiling, not a promised share. Normalize the eligible positive weights to obtain the shares. One positive weight receives the whole share; no positive weights means there is no allocation yet.

“A jury-issued relevance score is a weighted mean. An unopposed funded proposal can instead supply an adopted score by forfeiture, without another jury. Juror rewards are a separate calculation. The workshop's group result is a mean and its reward zone uses standard deviation, with a zero-spread fallback. The inspected implementation instead grades reports against the final jury's weighted median and median absolute deviation, with a configured floor.

“In the intended working design, ether (ETH) pays a fixed service fee per eligible revealed seat when a valid ruling is issued. A separate utility token provides jury stake and the redistribution of incoherence penalties. If nobody loses utility tokens, there are no extra tokens to redistribute. The service fee is separate from that coherence result.”

See the [grading comparison](presentation-sources.md#keep-the-four-mechanisms-distinct) for the model and version boundaries.

### What does score sealing protect, and where does it fall short?

“Sealing binds a later revealed score to its earlier commitment. The inspected contract permits an early reveal while other people can still commit, so it does not fully prevent copying. Private coordination, bribery and other ways to prove compliance remain possible. The workshop's proof-reporting penalty is an exercise rule; no corresponding reporting path was found in that inspected contract snapshot.”

### Is there an authority that can stop funding?

“The inspected funding implementation has a configured, time-limited authority that can permanently stop future accrual once. That holder cannot take funding already accrued. This is an implementation-specific governance choice, not a claim that such authority follows from the framework.”

### How do public appeal positions settle?

“Anyone can back a score position, including the nominator and a juror. A backer can still serve if selected under the ordinary draw. The same numeric score against the same ruling has one shared position. Proposals use steps of 0.01 from zero to one; the final jury score keeps its own precision.

“Admission stays open for a bounded period. All admitted positions then share a funding deadline. Two fast funders cannot close admission early. Underfunded positions receive full refunds. If no position fully funds, the referenced ruling stands. One funded position wins by forfeiture; at least two funded distinct positions share a larger jury.

“Each contested level has one combined pot. It covers the jury-fee shortfall after the pool contribution. The net pot is divided by inverse distance to the ultimate final score; a unique exact prediction receives the whole net pot. Each position then pays its backers pro rata. A closer prediction can still lose money after fees and competition.

“Adjudicated backer pots wait until the whole appeal chain ends, and every level uses its ultimate final score. That lock is different from already-earned jury fees and beneficiary earnings.”

### What if the jury fails to reach quorum?

“The intended threshold is valid, timely reveals covering at least 80 percent of the originally drawn voting weight. Missing reports do not make the denominator smaller, and there is no separate minimum headcount. A failed appeal attempt retries at the same planned size, without a fee for the failed attempt. Retries have no fixed limit while that protected appeal process remains eligible. A later appeal level doubles the previous ruling's planned target; a retry does not double it again.”

### Why does a numerical score not solve the judgment problem?

“The score records an assessment under a policy and supplies an input to a chosen allocation rule. It is not an objective unit of research quality or public benefit. The questions remain: does the policy ask for something worthwhile, is the evidence adequate, do assessors apply it well, and do the consequences help affected people?”

### What happens to earned funds, holds and exits?

“Only new nominations face holdback before earning. A later score increase or decrease creates no new holdback and changes future earning when adopted under the ordinary finalization rules. Once beneficiary funding is earned, it is immediately claimable, including during a claim challenge and after the nomination is debunked. A successful challenge closes the nomination, stops future earning and awards the submitter's deposit to the fact-checker. It does not take the beneficiary's past earnings.

“A request to withdraw the nomination is a different event. If made after a factual dispute starts, it waits behind that dispute. A successful challenge closes the nomination and cancels that queued exit. A rejected challenge allows the exit to proceed under the ordinary rules.”

### What if the nomination is edited?

“A jury and its appeals remain attached to the revision they assessed. Editing does not erase that funded contest or transfer its judgment to new content. A new revision needs its own adopted score for score-dependent funding. Previously earned money stays attributed to the earlier revision and remains claimable. Content identifiers establish which revision is being judged; they do not guarantee that its evidence stays available.”

### How do honesty, competence and scrutiny differ?

“Honesty means reporting sincerely. Competence means knowing how to judge the subject. Scrutiny means critically examining claims and evidence, including plausible alternatives. Willingness to examine a claim is different from having the expertise to assess it; an expert can also accept a claim without questioning it.

“Fees compensate service, not measured effort or expertise. Rewards and penalties aim to make informed judgment and critical scrutiny worthwhile. Private reports and agreement-based rewards are meant to make honesty a shared focal point, or Schelling point. The absence of collusion does not establish that truthful reporting is the only equilibrium or the most profitable strategy.

“Competence selection requires informed investigation to be profitable after effort and other costs, and to outperform a cheap prediction of the group's answer. A participant can predict others accurately without understanding the subject. Service fees can also outweigh token losses. Compare total returns, including both assets and effort, rather than treating agreement or a loss as a competence test.

“Losses reduce future draw chances only if available stake falls relative to competitors. Replenishment, outside wealth and changes in other jurors' stakes can change that outcome. The design does not guarantee that every weak assessor leaves.”

### What can we infer from the handout's coordination game?

“It can illustrate shared expectations and a salient choice. It cannot isolate a color effect: color, middle position, label and destination occur together. It also cannot establish that honesty is a focal point in an assessment game, because this choice has no factual answer and asks people to coordinate. A cluster is an observation about this room, not proof of the proposed incentives.”

### What can we infer from the points exercise?

“We can observe which reports earn points under this rule and discuss why participants chose them. The same reports produce the group result and its rewards, so the rewards do not independently establish honesty, competence and scrutiny. Even unanimous erroneous scores can earn rewards.

“The exercise gives each seat equal weight every round; accumulated point losses do not reduce later weight or draw chances. It does not model real capital at risk, costly information gathering, replenishment or stake-based selection. The short descriptions and prior knowledge also differ from a full evidence dossier.

“An assigned role is an instruction, not evidence that money caused manipulation. Discussion can affect later scores, and six different nominees are not six independent replications. Treat the results as observations for discussion, not a causal test of the complete design.”

### Does open participation mean that everyone is represented?

“No. People may lack money, time, relevant knowledge or access, and more deposited stake can carry more influence. Open entry removes an invitation requirement; it does not guarantee equal influence or representation of everyone affected.

“Choosing goals, judging evidence and representing affected people's needs are different tasks. Democratic institutions can include expert advice and deliberation. This design is one proposed way to organize assessment, not proof that it replaces or improves upon democratic decision-making.”

### Where does trust remain?

“The design distributes assessment and makes some judgments contestable. It still depends on the chosen criteria, accessible evidence, an external arbitrator and the implementation of its rules. We should ask what supports each dependency rather than describe the whole process as needing no trust.”

### What would establish public benefit?

“First test whether the incentives improve assessment compared with a feasible alternative, using evidence of quality independent of the reward formula. Then test whether decisions based on that assessment improve outcomes for affected people, including costs, excluded needs and harms. Better prediction of the group, stable scores, private profit and faithful application of a policy do not by themselves establish that second result.”

### Does this guarantee honest or sound judgment?

“No such guarantee has been established. The design tries to make useful assessment and correction worthwhile. Shared bias, coordination, poor policy and inaccessible evidence can still produce a bad outcome. We need separate evidence about reporting behavior, assessment quality, correction and downstream consequences. Profit and agreement alone do not supply it.”

### What makes capture costly, and can the community recover?

“Acquiring enough of a dedicated utility token may be costly, and a visible capture may damage demand for the system and that token. Neither effect is a fixed security guarantee: liquidity, concentration, attacker motives and public recognition matter.

“The intended recovery path is voluntary forking. A group can choose whom to exclude and preserve the other balances; funders can choose whether to migrate their funds. Different groups may disagree about suspicion or which fork to follow. The practical requirements include a usable snapshot, migration tools and coordination. The [capture and recovery discussion](presentation-sources.md#capture-defense-attribution-and-recovery-design) records the attribution and the limits of this response.”

### What do these materials establish today?

“There is a research proposal, formal and simulated analysis with explicit limits, inspected implementation evidence, a proposed precursor experiment and a functioning teaching exercise. They do not yet establish that the integrated permissionless system reliably improves public outcomes. That is the work to test.”
