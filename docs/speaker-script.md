# Speaker script

This script accompanies [the presentation deck](../public/deck/index.html). Slide numbers match the deck. Read the spoken paragraphs naturally; bracketed directions are private delivery cues. The slides supply a picture, a question or a result while the explanation comes from you.

The eighty-minute schedule matches the facilitator guide. Timing includes demonstrations, audience answers and quiet scoring time, not continuous speech. Protect the game's scoring window. If joining or recovery takes longer, shorten a later discussion explicitly rather than rush participants through an active round. Slides 21 to 24 are optional references.

Use the live values on screen if a slider changes them. Default numerical checkpoints below describe the reset example only. The [deck](../public/deck/index.html) owns those inputs; the [shared policy](../public/domain.js), [session information](../public/session.js), [facilitator guide](facilitator-guide.md) and [source register](presentation-sources.md) remain the detailed references.

## 1. Decentralized curation

**Target: 1 minute. Elapsed: 0:00 to 0:01.**

“Research depends on people deciding what deserves attention, trust and support. Those decisions take work. My question is whether we can make useful judgment and useful correction personally rewarding, so that pursuing a private benefit also helps other people.

“I call the framework Decentralized Curation. I have worked on it since 2021. Today we will explore one application, experience part of it together, and then attack it.

“Thank you to Octant for sponsoring this session.”

[Look at the audience. Let the title settle before advancing.]

## 2. Who judges research, and what do we reward?

**Target: 2 minutes. Elapsed: 0:01 to 0:03.**

“Think about work that research depends on but that a publication count struggles to describe: maintaining software, preserving data, improving a method or finding an important error. Someone still has to decide what that work contributes and how to recognize it.

“Metrics can help us. But choosing a metric, choosing its weight and interpreting the result already involve judgment. Moving that judgment into a formula does not remove the underlying choices.

“I want to make those choices visible, make assessment worth doing, and make weak assessments worth challenging. The immediate aim is credible consensus: a collective judgment that people have reasons to rely on. The further aim is that decisions based on it benefit the people they affect.

“Those are two separate tests. Getting people to agree does not, by itself, pass either one.”

[Invite one brief example of valuable work that is poorly recognized. Take the example without trying to solve it yet.]

## 3. One application: public-goods funding

**Target: 2 minutes. Elapsed: 0:03 to 0:05.**

“Here is the public-goods funding application, or PGF. A pool has a purpose and a published policy. Someone nominates a contribution, supplies evidence, identifies its beneficiary and puts up a bond. A drawn jury judges relevance under that policy. People can fund an appeal. Together, the resulting weights describe what matters under that policy. A funding budget can arrive later and use those shares.

“Two questions run through this process. Is the nomination making defensible factual claims? And, given those facts, how relevant is the contribution to this pool's purpose?

“The accuracy gate handles a challenge to the facts. The relevance gate handles the judgment under the policy. A high relevance score does not certify that every factual claim is true.

“This is one application of the framework. Decentralized Curation is not limited to funding or to these two gates.”

[Trace the main path once. Point to the separate accuracy path; leave its procedure for slide 9.]

## 4. First, agree what the pool is trying to do

**Target: 2 minutes. Elapsed: 0:05 to 0:07.**

“For this example, our purpose is supporting open infrastructure that research depends on. The question is how much the nominee's completed and maintained work underpins how research is done, shared and kept, now.

“Examine who relies on it, its role in research and the alternatives. Releases, documentation and downstream use provide evidence. Costs and limitations belong there too.

“This is a choice made for this example pool. Another pool may care about a different problem and need a different policy. We can start curating before anyone commits a grant budget. Bonds and jury costs still follow the economic rules; knowledge production is not cost-free.

“Publishing a policy lets people inspect it. It does not establish that everyone affected chose it, or that it serves a good purpose. The creator chooses the terms; funders choose whether to support that pool; jurors apply its policy.”

[Read the scoring prompt once. Do not read every anchor.]

## 5. Nominate work that we can inspect

**Target: 2 minutes. Elapsed: 0:07 to 0:09.**

“Let us use NumPy, the array library used throughout scientific Python. Its 2.0.0 release gives us a bounded piece of real evidence to inspect. The release date, 16 June 2024, is a factual assertion we can check.

“The release added capabilities, including array-standard support and variable-length strings. SciPy prepared support for it. There were migration costs too: affected compiled extensions needed rebuilding, and some numerical behavior changed.

“Those records establish delivery and some costs of use. They do not give us the right funding weight. That needs judgment under the policy, including evidence of reliance and alternatives.

“The release records are real. The nomination, requested weight, scores and funding in this demonstration are illustrative. This is not an actual application by NumPy.”

[Point once to the evidence links. Keep the distinction between evidence and assessment visible.]

## 6. A jury turns evidence into a relevance score

**Target: 3 minutes. Elapsed: 0:09 to 0:12.**

“Now imagine a jury has read that evidence. Here we have six drawn seats held by three curators. One curator can hold several seats; six seats do not necessarily mean six independent people.

“Each curator commits a score and then reveals it. These controls show scores after revelation. The result is the weighted mean: a curator holding more of the drawn weight has more influence on it.

“Watch what happens when I move one score.”

[Move one slider. Pause while the audience follows the change.]

“The calculation changes predictably. To decide whether the judgment improved, we need the reason and the evidence.

“I will restore that score so that we can follow the same starting point through the next steps.”

[Restore the changed slider to its starting value. If asked about the arithmetic, use the displayed calculation. Ask one person what evidence could justify a higher or lower score. Save the technical limitations of commitment and revelation for slide 17.]

## 7. A disputed score can face a larger jury

**Target: 3 minutes. Elapsed: 0:12 to 0:15.**

“Suppose people believe that assessment missed something important. Under the intended design, anyone can help fund a proposed score. The nominator can participate too. Different funded scores oppose one another; nobody has to volunteer to defend the old score specifically.

“When at least two distinct positions are fully funded, the appeal goes to one shared jury. Here the planned jury grows from six seats to twelve. The jury examines the underlying nomination and may return a score that none of the backers proposed.

“Let us apply this illustrative result.”

[Select **Apply appeal result**.]

“The adopted score changes. Backers are putting capital behind a judgment about where the final score will land. Their payouts favor positions closer to that ultimate score. They can lose principal even if they are closer than another position.

“If only one position becomes fully funded after the admission and funding process closes, it wins by forfeiture. Its backers get a full refund, with no new jury fee or profit. That is a procedural win; it is not another jury's consensus.

“The larger jury and public funding create a way to contest a result. They do not guarantee new information or a successful correction.”

[Do not calculate backer settlement here. The widget changes the assessment and allocation only.]

## 8. Curate the shares; funding can follow

**Target: 3 minutes. Elapsed: 0:15 to 0:18.**

“The effective weight is the smaller of the requested weight and the adopted relevance score. Divide each eligible weight by their total, and the resulting shares sum to one. This is our curated, policy-relative picture of what matters. It exists before a grant budget does.

“At the reset values, NumPy's weight is 0.60 out of a total of 1.50: a 40 percent share. Set the grant flow to zero: the shares remain. Add 100 units per day, and NumPy receives 40. The budget acts on the curated knowledge.”

[Set the grant-flow control to zero, then restore 100. Point to the unchanged shares and changed amounts. Use the current values if the appeal is still applied.]

“A score of 0.60 does not mean a 60 percent share. And twice the weight is not evidence of twice the public benefit. These are relative judgments under a chosen policy.

“One eligible positive weight receives the whole share, even with a low score. With no positive eligible weights, there is no allocation vector yet; we do not invent equal shares.

“The table shows earning rates after the relevant conditions are met. A new nomination waits through holdback before it earns. Later rating changes create no new holdback. Once funds are earned, the beneficiary can claim them immediately.”

[Ask: “If one weight rises and the budget stays fixed, whose share changes?” Take a short answer.]

## 9. Accuracy is a different dispute

**Target: 3 minutes. Elapsed: 0:18 to 0:21.**

“Now separate relevance from accuracy. The actual release date is documented. Imagine, however, that our nomination also claimed that existing NumPy 1.x compiled extensions all work unchanged with version 2.0. The migration guide supplies counter-evidence for affected binaries.

“Anyone can challenge a false or non-falsifiable factual claim while the nomination is active, including before scoring or during a relevance assessment or appeal. The challenger supplies the required stake and fees. An external arbitrator resolves the factual dispute; the relevance jury does not take over that job.

“This is a hypothetical bad claim added for the example, not an accusation against NumPy. Let us show what a successful challenge would do.”

[Select **Show debunked outcome**.]

“Future funding stops and the nomination loses its bond. What it already earned remains its beneficiary's money, paid or unpaid. There are no clawbacks of earned funding. Earned funds also remain claimable while the dispute is pending.

“Withdrawing the nomination itself is different from claiming its earnings. If that exit request comes after the dispute, it waits behind it. Debunking closes the nomination, so that pending exit becomes unnecessary and is cancelled. If the challenge fails, the nomination can continue and the challenger loses the counter-stake under the dispute rules.”

## 10. Revisit the judgment when the evidence changes

**Target: 2 minutes. Elapsed: 0:21 to 0:23.**

“A contribution can remain factually accurate and still become less relevant to the pool. Alternatives may improve, reliance may change, or an earlier assessment may have been too generous.

“This is a separate branch of the example. I am restoring the original nomination and applying an illustrative lower assessment.”

[Select **Apply lower re-score**, then return to the allocation table if helpful.]

“When the new score is adopted under the ordinary finalization rules, the lower weight changes future earning. A rating increase would take effect on adoption too, without a new holdback. Earlier earnings stay earned.

“We have now seen the main loop: evidence, judgment, contest and a consequence that can change over time.”

[The calculator shows current rates, not accumulated balances or settlement. The holdback applies only to new nominations; increases and decreases follow ordinary score adoption.]

## 11. What has to go right?

**Target: 2 minutes. Elapsed: 0:23 to 0:25.**

“For this to work well, several things have to go right. The policy must serve a defensible purpose. Relevant evidence must be accessible. Assessors must have enough knowledge and independence. People must be able to discover a problem and afford to contest it.

“A contract can enforce encoded procedures and transfers. It cannot certify expertise, eliminate shared bias or make a bad objective good. More stake and more agreement do not establish those things either.

“There are also real governance choices. The inspected funding implementation has a configured, time-limited authority that can permanently stop future accrual once. That holder cannot take funding already accrued. We should make that authority visible when discussing the system.

“So I am presenting a design to examine, with explicit dependencies and failure modes. Let us now experience one component ourselves.”

## 12. Join the workshop

**Target: 3 minutes. Elapsed: 0:25 to 0:28.**

“Scan the code or open the room address. Use an alias and take a seat. You do not need an account or wallet; we are using points.

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

“Here is the scoring game. The room's reports determine a centre and a band around it. For this workshop, the centre is the mean and the width comes from the standard deviation. Every seat has equal weight.

“Inside the band, closer reports receive a larger share of the points. Outside it, distance increases the forfeit. If the spread is essentially zero, distance forfeits switch off. A round with opened scores receives the full base reward in this teaching version.

“Watch the band when I move one report.”

[Move a dot, then reset. Let the audience describe the visible change.]

“You may anticipate what others applying the policy will think. That can encourage attention to a common question. It can also reward a shared mistake. Keep both possibilities in mind.

“This workshop uses simplified arithmetic. The inspected full-system contracts use a median-based grading reference. The points here are not a reproduction of their financial settlement.”

## 15. Play the jury

**Target: 27 minutes. Elapsed: 0:32 to 0:59.**

“For each nominee, read the description, apply the policy and seal your own score. Keep your two salt words private. When I close scoring, keep this page open so your device can reveal. You can change your seal before closing, or sit the nominee out.

“After revelation, I will set a clear cutoff before grading so that sleeping phones have a chance to reconnect. Once I grade, a later reveal cannot change that round's result.”

[Play the six default nominees in the order shown by the room. Allow roughly four and a half minutes each: quiet scoring first, then recovery and grading, followed by ninety seconds of discussion. Do not shorten an active scoring window.]

After each result, ask:

“Which piece of evidence or part of the policy most affected your score?”

[Hear one higher and one lower assessment when time permits. Then point to the outcome.]

“What did this rule reward in the reports we actually received?”

[Do not call paid jurors correct or forfeiting jurors incompetent. Record interesting differences for the debrief instead of resolving every one now. Do not announce the privately recorded comparison before all the compared rounds finish.]

If proof reporting needs explanation, say:

“A sealed-score proof contains the score and its two words. Another seated juror can report a valid proof during scoring for a bounty; the disclosing juror loses points. This concerns disclosing the proof, not discussing the policy.”

[For the assigned-role round, let the interface deliver the private instruction. Participants may decline it. Do not identify roles publicly before the result. If nobody reveals, explain that the round is void; do not infer a judgment from it.]

## 16. Did we reward judgment or conformity?

**Target: 5 minutes. Elapsed: 0:59 to 1:04.**

“Now let us interpret what happened. Where did the policy guide us, and where did expectations about other people guide us? What evidence explained a high score or a low one? Did we disagree about the facts, the policy's scope, or the available alternatives?”

[Hear two or three explanations. Reveal the privately recorded comparison now, including any mismatch with the observed results.]

“The mean and spread describe these reports, without explaining them. Scores near zero or one have less room to vary. A wider band alone does not establish deeper disagreement.

“In the assigned-role round, compare the people assigned a role, the scores actually submitted and the points actually earned. Being assigned a role is not the same as following it. Following an instruction is not evidence that money caused manipulation. A matching score does not tell us someone's motive.

“Let us use the widget to examine how a coordinated group can move the reference.”

[Move the bloc control gradually. State the displayed configuration; do not announce a universal safe percentage.]

“The group can sometimes move the target against which everyone is paid. A minority can also have a good argument and lose. This is why coherence alone cannot certify accuracy. One room and one simulated group do not establish resistance to capture.”

## 17. Attack the mechanism

**Target: 5 minutes. Elapsed: 1:04 to 1:09.**

“We have seen the simple demonstration. Now let us examine the defenses rather than assuming them.

“If people apply different criteria, a published policy gives them a shared reference. But it can remain ambiguous, embody poor priorities or create a shared bias.

“If people copy or coordinate, commitment and revelation bind a revealed report to an earlier commitment. The inspected contract still permits an early reveal while others can commit. Private coordination and bribery remain possible. Sealing a score is not a complete anti-collusion defense.

“If someone captures the jury, stake puts selected capital at risk. How much protection that supplies depends on its distribution and value. It does not prove competence. Appeals add another chance to challenge a result, but they need information, participation and funding; doubling seats does not necessarily double independent knowledge.

“If someone can prove a sealed score to a buyer, this workshop provides a reporting penalty and bounty. A buyer may have another verification route. That particular reporting path was not found in the inspected contracts.

“The broader recovery design also allows voluntary forks, including a fork that excludes suspected attackers while preserving other holders' balances. Funders can opt to migrate their pool funds. That requires working migration machinery and social coordination. We should test the recovery procedure rather than treat the possibility of a fork as an automatic rescue.”

[Invite the room to pick one failure mode and make it concrete. Ask what evidence would show the proposed response working. The detailed appeal and recovery rules are in the source register and public mechanism summary; do not read them line by line.]

## 18. What Arrow can teach us

**Target: 3 minutes. Elapsed: 1:09 to 1:12.**

“Arrow is a planned precursor experiment at Octant. Invited experts would score a real docket under a published policy, with trusted nominations and a fixed evaluation round.

“That can teach us about the practical work: whether participants understand the policy, what produces disagreement, how stable scores are, and how committing and revealing feels in use.

“It assumes honesty, competence and non-collusion. It does not establish that permissionless selection works, that bribes fail, that accuracy disputes resolve correctly, or that the appeal economy and continuing funding are safe.

“It is useful precisely when we keep that scope clear. These are questions for a proposed experiment, not results already obtained.”

## 19. What would change our minds?

**Target: 4 minutes. Elapsed: 1:12 to 1:16.**

“I want us to specify what failure would look like before we run a serious evaluation.

“If people repeatedly misread the policy after clarification, revise the policy. If scores are stable because everyone shares a misunderstanding, stability is not success. If decisive new evidence arrives and judgments do not respond, revise the evidence and review process.

“To examine incentives, compare choices under different reward conditions and assess the quality of the evidence separately from earnings. Higher rewards alongside poorer assessment would count against the reward design.

“To evaluate public benefit, choose a bounded decision, a population affected by it, a time horizon and a feasible alternative. Include the costs of assessment and correction. Ask whether the resulting decisions improve outcomes for those people, and look for harms too.

“We would set those outcomes and decision criteria with the relevant people before the study. Today's workshop does not supply that comparison.”

[Ask: “Whose needs might this example policy miss?” Then: “What result would make you recommend changing or stopping it?” Take one concrete answer to each.]

## 20. Close the loop

**Target: 4 minutes. Elapsed: 1:16 to 1:20.**

“The idea is putting self-interest to work for the public good. That requires more than a reward formula. People need evidence they can inspect, a policy they can understand, and a practical way to challenge a weak judgment.

“We explored funding as one application. The broader question is whether private incentives can make useful assessment and correction worthwhile, and whether the decisions that follow actually improve things for others.”

[Invite one participant to distinguish an accuracy challenge from a relevance appeal. Invite another to name evidence that would make an agreed judgment more credible.]

“The working paper, public explanation and follow-up links are here. Please bring me both use cases and counterexamples. Thank you.”

[Leave the links visible for questions. Finish the game if necessary so final standings remain available. After the discussion, wipe room records as promised and verify that the wipe succeeded.]

## 21. Backup: keep the scopes separate

**Optional, about 1 minute.**

“There are different objects here. The research describes a framework and application designs. The intended funding system uses drawn, staked juries, factual disputes, appeals and funding consequences. The inspected implementation is evidence about a particular code snapshot, and it differs from some intended rules.

“Arrow is an experiment plan involving invited experts and trusted nominations. This room is a points game that isolates one scoring experience. Evidence from one should not silently become a claim about another.”

[Use this slide when a question conflates the exercise, proposed experiment, manuscript and implementation. See the [scope comparison](presentation-sources.md#keep-the-four-mechanisms-distinct).]

## 22. Backup: the funding score and the grading reference

**Optional, about 2 minutes.**

“A jury-issued relevance score is a weighted mean. Funding uses the score adopted under the pool's rules, which can instead come from an unopposed funded proposal winning by forfeiture. That requires no new jury and is not new jury consensus. In the inspected implementation, grading curators uses the final jury's weighted median and median absolute deviation, or MAD, with a configured floor. Reports from earlier rounds are evaluated against that final reference too.

“The workshop instead uses the mean and standard deviation, with closeness-based points and a zero-spread fallback. You cannot read the full implementation's settlement off this widget.

“In the intended working design, Ether, or ETH, pays a fixed service fee per eligible revealed seat when a valid ruling is issued. A separate utility token provides jury stake and the redistribution of incoherence penalties. If nobody loses utility tokens, there are no extra tokens to redistribute. The ETH service fee is separate from that coherence result.”

[Use the [grading comparison and source register](presentation-sources.md#keep-the-four-mechanisms-distinct) for model-specific questions. Do not transfer a result for one reward formula to another.]

## 23. Backup: related approaches

**Optional, about 2 minutes.**

“Several adjacent approaches address parts of this problem. Matadisco supports discovery through published metadata pointers. The assessment workshop makes a funder's goals and evidence weights explicit. The Unjournal pays experts for public evaluation and allows author responses. The Open Source Endowment combines published criteria with human due diligence and board approval.

“They illustrate different institutional choices, and they can complement one another. Paying reviewers and publishing assessments are already practiced. The question for this proposal is what open participation, its incentive rules and funded correction add, and at what cost.

“I am not presenting a comparative study of their performance or claiming that these organizations have endorsed this design.”

Sources: [Matadisco](https://matadisco.org/), [Institute of Open Science Practices programme](https://www.iosp.science/), [The Unjournal](https://info.unjournal.org/), [Open Source Endowment](https://endowment.dev/faq/). See the [conference context](presentation-sources.md#conference-observations-and-adjacent-work) for attribution and evidence limits.

## 24. Backup: sources and version boundaries

**Optional, about 1 minute.**

“The sources have different roles. The published paper records the research at a particular release. The source register identifies later working choices. The inspected implementation snapshot supports statements about that code, not a claim that those contracts are deployed, audited or identical to the paper.

“The Arrow proposal supports the experiment's stated scope. It does not supply results. Some implementation and proposal sources are access-controlled, so the public explanation states what was inspected and where independent access is limited.

“If a source seems to contradict today's explanation, first check which version and which system it describes.”

References: [published version 1.2.0](https://doi.org/10.5281/zenodo.23313625), [published manuscript source](https://github.com/0xferit/manuscript-decentralized-curation/blob/1b1805d66dc46b7b90f2a28c635cd28d0f6794c1/paper.qmd), [public mechanism summary](../public/mechanism/index.html), [full source register](presentation-sources.md), [proposed evaluation plan](evaluation-plan.md).

## Private reference: questions to answer without loading the slides

These are optional answers, not another presentation segment. The [source register](presentation-sources.md) retains the detailed rules and their evidence boundaries.

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

“Only new nominations face holdback before earning. A later rating increase or decrease creates no new holdback and changes future earning when adopted under the ordinary finalization rules. Once beneficiary funding is earned, it is immediately claimable, including during a factual dispute and after debunking. Debunking stops future earning and forfeits the nomination bond, not the beneficiary's past earnings.

“A request to withdraw the nomination is a different event. If made after a factual dispute starts, it waits behind that dispute. A successful challenge closes the nomination and cancels that queued exit. A rejected challenge allows the exit to proceed under the ordinary rules.”

### What if the nomination is edited?

“A jury and its appeals remain attached to the revision they assessed. Editing does not erase that funded contest or transfer its judgment to new content. A new revision needs its own adopted score for score-dependent funding. Previously earned money stays attributed to the earlier revision and remains claimable. Content identifiers establish which revision is being judged; they do not guarantee that its evidence stays available.”

### Does this guarantee honest or sound judgment?

“No such guarantee has been established. The design tries to make useful assessment and correction worthwhile. Shared bias, coordination, poor policy and inaccessible evidence can still produce a bad outcome. We need separate evidence about reporting behavior, assessment quality, correction and downstream consequences. Profit and agreement alone do not supply it.”

### What makes capture costly, and can the community recover?

“Acquiring enough of a dedicated utility token may be costly, and a visible capture may damage demand for the system and that token. Neither effect is a fixed security guarantee: liquidity, concentration, attacker motives and public recognition matter.

“The intended recovery path is voluntary forking. A group can choose whom to exclude and preserve the other balances; funders can choose whether to migrate their funds. Different groups may disagree about suspicion or which fork to follow. The practical requirements include a usable snapshot, migration tools and coordination. The [capture and recovery discussion](presentation-sources.md#capture-defense-attribution-and-recovery-design) records the attribution and the limits of this response.”

### What do these materials establish today?

“There is a research proposal, formal and simulated analysis with explicit limits, inspected implementation evidence, a proposed precursor experiment and a functioning teaching exercise. They do not yet establish that the integrated permissionless system reliably improves public outcomes. That is the work to test.”
