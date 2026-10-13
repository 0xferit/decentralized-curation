# Likely questions, and answers grounded in the sources

Start from the full mechanism and its aim of turning private incentives into public benefit. Credible consensus is an intermediate objective. Then say which version a question concerns: today's hosted exercise, the current manuscript, the archived publication, the contract implementation and the planned Arrow experiment have different rules. Agreement alone establishes neither credibility, truth nor public benefit.

## Source order

For implemented behavior, use the [contract snapshot](https://github.com/golemfoundation/octant-v3-monorepo/tree/ca8c8560119dee34f809a31e5149f4a6217467fb), committed September 3, 2026. Its pool and coherence-engine code control implementation claims. This is evidence that code exists, not that it is audited or deployed.

For published research, use [version 1.2.0](https://doi.org/10.5281/zenodo.23313625) and its [source revision](https://github.com/0xferit/manuscript-decentralized-curation/blob/1b1805d66dc46b7b90f2a28c635cd28d0f6794c1/paper.qmd). The October 11 links throughout these notes identify the earlier snapshot inspected for particular arguments; they are historical evidence, not the latest complete design. The release publishes public appeal funding and scalar settlement; subsequent working decisions on fees, rounding, finality and recovery remain unpublished. For the intended working rules, use the [source register](presentation-sources.md#appeal-crowdfunding) and [recovery design](fork-recovery-design.md). Attendees can read the [public mechanism summary](../public/mechanism/index.html) without access to private implementation sources.

For today's rules, use the [ledger](../public/core.js), [policy and docket](../public/domain.js), and [session facts](../public/session.js). The [red-team report](red-team-2026-10-09.md) describes an earlier workshop band and is not a source for current thresholds. The current follow-up wording is defined once as `SESSION.nextRound`.

## 1. What problem does the full system address?

The aim is to make useful information production, assessment and correction privately rewarding, so that people pursuing their own interests improve public decisions. This requires two links: incentives must induce useful work, and its results must benefit affected people. Neither link follows from participant profits alone. The [inspected research snapshot](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd#L27-L41) treats both as hypotheses to test.

A focused group can study evidence carefully while missing affected people's needs; wider participation can supply both those needs and missing knowledge, without guaranteeing a sound decision. Delegating assessment does not authorize assessors to decide whose interests count. The [research framing](presentation-sources.md#judgment-and-public-accountability) explains this accountability question.

The mechanism separates the work needed before allocation: the creator states the policy; nominations supply claims and evidence; jurors assess relevance; wider participants can fund eligible factual challenges or relevance appeals. This produces policy-relative knowledge about what matters, expressed as relative allocation weights. A beneficiary grant budget is not required to start; it can arrive later and use those weights. An allocation formula cannot repair false evidence or decide what a community should value. Stake does not certify expertise, and the cost of scrutiny can exclude useful voices.

Concede: reliable facts do not remove value disagreement. This is a proposed architecture for a class of information and funding problems, not a solution to governance in general.

## 2. How do truth, credible consensus and public benefit differ?

Public benefit is the final aim. Credible consensus is an intermediate objective: judgments grounded in evidence, assessed under an explicit policy, with usable correction paths. Consensus means a collective result, not unanimity; shared bias can still make it wrong. The protocol does not certify truth, competence or beneficial outcomes. These are the [current manuscript's distinctions](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd#L133-L161).

Accuracy challenges and relevance appeals have different jobs. A factual challenge targets a claim and goes to an external arbitrator. A relevance jury asks how much the contribution matters under this pool's policy. Its score does not certify the claim or establish causal impact.

For example, the [NumPy announcement](https://numpy.org/news/#numpy-2-0-0-released) establishes that version 2.0.0 shipped on 16 June 2024. The policy still governs the relevance of NumPy's work. Whether the release caused additional scientific progress is a further evidential question.

Avoid describing a pool's ruling as a universal, protocol-wide truth verdict. Evidence policies, claims and adjudication remain concrete dependencies. Separately accepted claims can also contradict one another: the design has no cross-item consistency test. Nor does faithful application of a policy establish that the policy serves affected people.

## 3. Do we need a funding budget before we can curate?

The beneficiary distribution budget is useful upfront but not required. Curation costs do require funding. Curation produces a policy-relative allocation vector; a distribution budget can arrive later and act on it. Effective weight is the lower of the nominator's requested weight and the adopted score. For total eligible weight $W>0$, each share is $p_i=w_i/W$ and the shares sum to one. Applying a distribution budget $B$ gives $B p_i$ per nomination. Setting $B=0$ leaves the shares unchanged and creates no beneficiary earnings. When $W=0$, there is no allocatable vector, rather than an arbitrary equal split.

Curation funding and the beneficiary distribution budget are separate. Nomination bonds, jury service fees and dispute or appeal costs still follow their existing rules. Only new nominations wait through holdback before earning. Later rating changes affect future earning when adopted under the ordinary finalization rules, without a new holdback. Earned funds are immediately claimable by the beneficiary.

The inspected historical contracts instead apply holdback to new or increased weight and apply decreases immediately. That source behavior is not the intended rule for later rating changes.

A score is neither a price nor a fixed percentage of the budget. Two nominations with equal effective weights share equally; adding another earning nomination changes their relative shares. No weight means no retrospective earnings for that interval.

The score-to-share mapping is a chosen allocation rule. Scores of 0.75 and 0.25 have a 3:1 raw funding-weight ratio; request caps and eligibility can change the resulting allocation. The ratio does not establish three times the public benefit, causal impact or benefit of an additional grant. Each pool authors its own rubric and explains the numeric weights it intends. The working paper retains direct proportional allocation without adding a score transformation. Beneficiary funding, juror voting weights and appeal-backers' inverse-distance payouts are separate calculations.

The full distributable flow is allocated whenever eligible effective weights sum to a positive amount. With a single eligible nomination, a score of 0.01 and a positive request can therefore receive the entire flow, not 1 percent. Its request caps its relative weight, not its absolute payment. This is intentional: other nominations can seek a share through the pool's normal admission process. Actual entry, independent competition and improved outcomes are hypotheses, not consequences established by normalization. Funding availability, holdbacks and zero-weight rules remain in force.

The default worked example makes this visible: NumPy's 0.60 effective weight yields a 40 percent share because total effective weight is 1.50. Applying 100 units per day yields 40 units. The 0.70 appeal result yields 43.75 units; a 0.30 re-score yields 25. With a zero grant flow the shares persist, but no funding accrues. These are calculated rates after the new nomination's holdback and applicable score finalization, not automatic daily transfers or real NumPy funding. Later rating changes do not restart holdback. The deck owns the example inputs.

Source: [weight rule](https://github.com/golemfoundation/octant-v3-monorepo/blob/ca8c8560119dee34f809a31e5149f4a6217467fb/packages/contracts/src/libraries/Weights.sol) and [pool implementation](https://github.com/golemfoundation/octant-v3-monorepo/blob/ca8c8560119dee34f809a31e5149f4a6217467fb/packages/contracts/src/Pool.sol).

## 4. Why distinguish the relevance score from juror grading?

They perform different jobs. A jury-issued relevance score is a weighted mean. Funding uses the score adopted under the pool's rules; an unopposed funded proposal may instead become the final score by forfeiture, without another jury. In the inspected implementation, economic grading uses the deepest completed jury's weighted median and median absolute deviation, with a minimum width, to assess reports across the case.

The workshop uses a mean and standard deviation, with reward shares based on closeness. Those visuals illustrate incentives in this exercise; they are not the current contract formula.

A central score can also hide two clusters of judgment. Read the individual scores and reasons, not just the aggregate. A payment band is not a confidence interval.

## 5. What is the nominator risking, and is it the same asset as curator stake?

The current implementation takes a nomination deposit proportional to requested weight, plus a curation fee, in the funding asset. Curators deposit the separately configured stake asset to obtain tickets and back their reports. Challenge counter-stakes and relevance-appeal bonds use the funding asset.

Do not conflate every deposit with the curator token. Nor does posting a deposit demonstrate that evidence is sound: it creates an exposure governed by challenge rules.

## 6. Does paying for agreement reward conformity?

It can. The intended focal point is the public policy applied to evidence, but participants may instead coordinate on a shared bias or an easy response. A clear prompt helps people understand the task; it does not establish honest reporting as a best response.

The September correction withdrew the earlier equilibrium guarantee. The [published manuscript](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd#L372-L390) gives a variance-padding calculation for the paper's mean/standard-deviation, dispersion-scaled reward rule. The working revision scopes the result to a single-asset analytical reward rule. The selected design instead separates ETH service fees from redistribution of slashed utility tokens; with no distance-based slashing, there are no additional utility-token rewards. Each coherent curator's share rounds down once using its full original locked weight; the leftover units stay in the same pool's separate utility-token balance. A sufficiently small reward pool can therefore pay no extra tokens. Unclaimed allocated rewards remain reserved, and retained tokens do not become ETH fee funding or a base reward subsidy. ETH service fees are fixed per timely, validly revealed seat when a valid ruling is issued, regardless of coherence or dispersion. The numerical example's deviation increases neither that fee nor utility-token rewards under the selected rule. This removes that specific gain; it does not establish truthful reporting, useful research or safe complete appeal payoffs. The single-round result is not automatically an exploit of the median-based contracts or today's flat-base-reward exercise. Each rule set needs its own analysis.

A truthful-reporting defect does not by itself establish the system's net public effect. A strategically imperfect mechanism could improve on feasible alternatives; the paper establishes neither that improvement nor its absence. Compare information quality, participation costs and downstream consequences.

Avoid saying that incentives “make honesty rational” without assumptions and a valid result for the exact mechanism.

## 7. Does stake prevent fake identities and capture?

Stake weights capital, not people. Splitting an unchanged token balance among addresses does not create extra capital, but the mechanism does not certify identity, independence or competence. One curator can hold multiple drawn seats.

Concentrated or cheaply acquired stake remains a capture risk. A random sample does not reduce a coalition's expected stake share; it changes the realized jury. More seats are not necessarily more independent views.

The current code's tests explicitly include a majority bloc that controls grading and penalizes an honest minority. Do not present a universal safe coalition threshold.

## 8. How can an appeal help an informed minority?

Anyone, including the nominator, may back a publicly crowdfunded fixed-score position. Another fully funded different score is its counterparty; it need not defend the existing ruling. For example, proposals of 0.20 and 0.90 oppose each other even if the current score is 0.60. One position exists per ruling and numeric proposed score: 0.7 and 0.70 are the same position. Anyone backing that score contributes to the existing position while its funding is open and below the cap; a duplicate submission cannot create a fresh target, payout weight or funding clock. Proposals use only 0.01 increments from 0 to 1, giving 101 possible slots per ruling. Off-grid values such as 0.599 and 0.705 are rejected before contributions, without silent rounding. This restricts positions, not jury reports or final-score precision; payouts use the actual final score. The same score against a later ruling is a separate position requiring fresh funding. An appellant or backer may serve if selected by the ordinary jury draw. If an otherwise permitted edit creates revision B during an appeal of A, the appeal continues against A with its funds, deadlines and target unchanged. Its outcome remains in A's history; it does not judge B. B awaits its own assessment. Until B has its own adopted score, it is excluded from score-dependent ranking and new score-dependent funding, with no inherited-score proxy. It remains accessible through direct links and pending views. This adds no extra chain-finality wait to the existing adoption rules; other eligibility conditions still apply. Holdback belongs only to new nominations and does not restart for a changed rating. Funding already accrued under A remains attributed to A and immediately claimable by its beneficiary, including during an accuracy dispute. Editing alone cannot erase it or move it to B; B gains no new score-dependent funding from it. A's appeal settlement remains separate. This preserves the subject of the contest that the appellant and opposing score backers funded. Authorship alone does not make the author a party or put the author bond at stake.

The next appeal targets twice the planned seat count of the valid round that issued the referenced ruling; a smaller actual draw does not lower the baseline. A 20-seat plan with 12 seats drawn leads to a 40-seat appeal target. Failed-quorum retries retain that target, and seats need not represent different people. A bounded admission window, provisionally 72 elapsed hours, stays open for its full duration, including after the second position funds. New proposals stop at admission closure. A common funding deadline follows, giving every admitted position the same full funding interval after the slate is fixed; early positions can also fund before admission closes. Both durations are positive and frozen at ruling issuance; the shared funding period provisionally defaults to 72 elapsed hours after admission closes. With at least two fully funded positions, one shared jury starts only after admission closes and all admitted funding outcomes are known. If all admitted positions are fully funded, no unused funding time must elapse. While any position remains below its target, the group waits for its funding outcome. At the common deadline, positions still underfunded cancel and receive full refunds. No outcome or repeat submission resets either clock. More than two proposals may fund. All funded positions against the ruling combine in one common pot, which covers the single jury-fee shortfall after the pool contribution. Their position and backer records remain distinct; normalized reciprocal absolute error determines each distinct position’s share, with a unique exact prediction receiving the whole net pot. Both cutoffs are exclusive: new positions and contributions must be included strictly before their respective deadline. The relevant phase is closed at its cutoff even without a closing transaction. Existing positions can still fund at admission closure, before the funding cutoff; an earlier signature or broadcast does not preserve eligibility.

The [source register](presentation-sources.md#common-pot-jury-fees) describes the common-pot accounting; its [inverse-distance formula](presentation-sources.md#scalar-payouts-by-inverse-distance) defines payouts for all funded distinct positions and reduces to the earlier rule for two positions. All adjudicated levels use the ultimate final score of their chain, and their funds stay locked until that chain ends. A closer position has a larger ideal share but can still lose principal. Whole-wei allocations can tie after rounding. If only one distinct score fully funds after admission closes and all admitted funding outcomes are known, it becomes final by forfeiture; that position receives a full refund without a jury fee or profit. This is procedural, not evidence of consensus. If admitted proposals exist but none fully funds by the common funding deadline, the referenced ruling becomes final then. Its issued score determines settlement of earlier adjudicated pots; earlier earned fees remain charged. All partial contributions are refundable in full, with no new jury fee. Finality does not wait for refund collection and opens no new window. If no proposal was admitted at all, finality instead occurs at admission closure. Failed fundraising is not additional evidence that a ruling is correct. At most one ordinary round per item and pool may be scheduled or running, even across revisions. Its admission and jury-budget reservation are atomic. Ruling issuance transfers directly to the appeal hold; a cancelled round releases admission under its existing rules, and any retry must qualify anew. Other items and pools remain independent. In pools with recurring reassessment, the next ordinary round becomes eligible one full cadence after the last applicable hold ends, subject to ordinary eligibility, funding and scheduling. Missed rounds are not replayed. A new hold resets this wait from its eventual end; claim collection and delayed recognition do not move the protocol-time anchor. Already-started rounds may finish, and the batch profile gains no extra recurring rounds.

Shared pool subsidies follow successful fee-reservation execution order under the working paper. Earlier filing or readiness creates no reservation, while existing reservations remain protected. Eligible appeals use the pool funds available at commitment and pay any shortfall from their own pots, without waiting for replenishment; their funding split is not revised by later deposits. Faster inclusion can win the subsidy and leave an unreserved ordinary round waiting. Existing ordinary scheduling order and full-funding requirements still apply.

Funding access and assessment quality are separate. Backing must arrive in time, and the jury must supply useful judgment. An opposing contribution creates a possible reward; it does not guarantee profit or defeat every attempt to exhaust other participants’ funds. The [appeal notes](presentation-sources.md#appeal-crowdfunding) retain the remaining specification choices and the risks of repeated appeals or quorum failures keeping funds locked indefinitely.

The inspected implementation instead collects a prediction stake from one filing address, reserves jury rewards from the pool and refunds the stake on a sufficiently good prediction. That is source evidence about the code, not the intended public-position settlement. Its address-level jury exclusion also differs from the intended design.

## 9. What happens during an accuracy dispute?

The intended working design uses optimistic publication: posting the bond and satisfying structural requirements do not require prior approval of a nomination's truth or falsifiability. A successful factual-falsification or non-falsifiability challenge debunks the nomination, forfeits its bond and stops that nomination's future pool funding. All funding accrued before closure remains owed to its beneficiary, including unclaimed amounts. The outcome does not debunk or ban its nominator or beneficiary. They may submit a fresh nomination with its own bond under the ordinary submission rules, including the normal submission window and active-nomination limit. The earlier nomination remains closed. Historical outcomes can remain visible, but a past debunking alone cannot bar a fresh nomination. This adds no separate evidence-readiness approval gate.

In the intended design, a factual challenge can begin whenever the nomination is active, including before its first relevance score and during a relevance assessment or appeal. A withdrawn nomination cannot receive a new challenge. Earned funding remains immediately claimable during the dispute. A nomination withdrawal requested after the dispute enters the event queue behind it; if the dispute ends in debunking, that queued exit is cancelled. Claims on earned funding are separate from withdrawal of the nomination.

The inspected implementation differs: in those contracts, the nomination must already be scored or active and have no open relevance case. The challenger pays counter-stake and a flat tax in the funding asset, plus the external arbitrator's fee. Current contracts let accrual continue, but withhold claiming and certain exit operations while the dispute is pending.

In that inspected implementation, if the claim is debunked, its weight stops, unclaimed accrual returns to the open pool budget, and the challenger receives the nomination deposit and their counter-stake. If the challenge fails, the nomination resumes and the nominator receives the counter-stake. A timeout bounds detention when an arbitrator does not respond. Payments already made are not clawed back.

This differs from older descriptions that immediately removed disputed weight. Do not mix the two.

The NumPy example deliberately adds a false assertion about unchanged binary compatibility to show this separate branch. It is not an accusation that NumPy made that assertion, and the button is not an actual arbitration. Its documented release date remains supported.

In the intended design, debunking preserves the last relevance score, closes the nomination and stops future earning weight. All earlier funding remains owed, whether paid or unclaimed. A relevance cut also preserves earlier accrual, but does not itself close the nomination. Separately, the working paper specifies that if an ongoing relevance-appeal chain already had a fully funded contested level before accuracy closure, that same chain continues to its normal settlement, including any later level still fundraising. It cannot reopen the closed item or restore beneficiary funding. This is a working-design rule, not a claim about the inspected contracts. If accuracy closure instead occurs while the first appeal process is still open and before any level has two fully funded positions, it stops admission and funding, leaves the issued score as terminal and refunds all accepted contributions in full. Existing deadline-based finality is respected even before a transaction records it. This does not claw back already-earned jury fees or affect an earlier funded chain. The same threshold applies when an otherwise-permitted voluntary author withdrawal completes: preserve a previously funded contested chain, otherwise cancel the still-open initial appeal and refund contributions. A request or pending cooldown alone does not trigger it. Withdrawal eligibility, cooldown and author-bond return remain unchanged; later relevance rulings cannot reactivate the item, and this rule grants no new withdrawal right.

An ordinary jury whose nonempty draw already completed before closure or completed withdrawal is a separate case: the working paper lets that attempt finish its pinned assessment. Valid issuance earns the normal fee and opens a normal appeal process; the earlier exit does not retrospectively cancel that window. Outcomes remain historical and cannot restore feed or funding eligibility. A failed attempt completes ordinary proof and failure settlement without a new score, ETH fee or appeal window. No fresh ordinary retry is drawn for the inactive item, even with unused allowance; its unused ordinary fee reservation is released normally. This does not change active-item ordinary retry policies or protected appeal-chain retries. See the [source register](presentation-sources.md#an-ordinary-jury-already-drawn-when-the-item-exits).

## 10. Will people investigate false claims if investigation is expensive?

Not necessarily. A profitable dispute after discovering a falsehood does not pay for all the unsuccessful investigations needed to find one. Evidence access, investigation cost, arbitration fees, expected recovery and retaliation concerns matter.

The architecture permits scrutiny; it does not guarantee a sufficient supply of it. A deployment needs to test those incentives and the external arbitrator's competence and availability.

## 11. Can challenges or appeals be used to harass a project?

Yes, they introduce delay and participation costs as well as correction paths. Accuracy-challenge counter-stakes, fees and timeouts impose constraints. For relevance appeals, one unopposed funded position receives its contributions back in full without a jury fee once the required windows end; the resulting score is final by forfeiture, not consensus. For adjudicated distinct positions, returns depend on normalized reciprocal score error and the jury-fee shortfall. A unique exact prediction receives the entire net pot; even the closer position can lose principal. Even adjacent permitted proposals can expose a position to a large change in payout over a small change in the actual final score. Unlimited quorum retries and successive funded appeals can keep capital and ordinary scheduling locked. Funding multiple adjacent proposals such as 0.59 and 0.60 can change payouts and aggregate exposure, but every position requires its full target; whether that creates a profitable strategy remains to be analyzed. Identical scores share one position and pro rata backer payout. The 0.01 grid does not establish neutrality to wealth. Whole-wei position allocations round down, with the remainder credited once at chain finality to the same pool's ETH jury-service budget; unclaimed payouts cannot be swept. Within each position, cumulative rounding in fixed funding-acceptance order distributes its full integer allocation among contribution records, independently of claim order. The rounding bound is per contribution; interleaved funding can change who receives rounding wei. Anyone may trigger an already-claimable ETH jury fee, appeal payout or contribution refund to the original recipient's current standing receiving address in the paying contract. Only the original recipient can replace that address or reset it to itself, for all unpaid and future in-scope payments. Each payment uses the setting active when it executes; earlier completed payments stay final. The receiving address gains no ownership or update authority. Failed transfers leave unpaid claims reserved and retryable. Update interfaces, replay-protection representation, remaining transfer mechanics and other monetary rounding remain open. The payout formula cannot support a general security claim. See the [funding and finality rules](presentation-sources.md#appeal-crowdfunding).

Evaluate the exact path and who bears each cost. “There is a bond” is not a complete answer to griefing.

## 12. Who chooses the policy, and can they change the rules later?

Each pool crafts its own curation policy, terms and dependencies; the protocol supplies no universal default scoring objective. People choose which pool to use. The workshop’s policy is one authored example, not a mandatory rubric for other pools. Its marked worked scores are hypothetical calibration examples, not measured ratings. Publishing a policy makes it inspectable. It does not establish that affected people chose it or that it represents everyone's needs. Current contracts make economic parameters immutable and require a new pool for a new version. Human-readable policy and evidence remain outside the contract's semantic understanding: code enforces procedures and financial consequences, not the meaning or achievement of public benefit.

In this workshop example, judges use brief descriptions and prior knowledge about the nominee’s current role in research workflows and available alternatives. There is no common evidence dossier. Results illustrate coordination under uneven information; they cannot validate informed assessment of research-wide reliance. The real application still requires rigorous, pool-specific evidence standards and usable supporting material. Completed work can remain important. Funding need and the expected benefit of another grant are criteria for each pool's curation policy to include or omit, not additional objectives imposed by the mechanism. The existing workshop policy is unchanged: its score does not establish future maintenance needs or the benefit of the next grant. A different pool may choose those objectives and define the evidence and rubric needed to assess them.

A configured temporary circuit breaker is a specific exception: its holder can stop future accrual within the defined powers, without rewriting weights or taking already-accrued funds. That authority must be disclosed.

Pool choice does not automatically correct a bad policy. Participants must recognize the problem, find a funded alternative and coordinate a move. People affected by the outcome may lack stake or be absent from the readership. As the [Dewey discussion](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd#L686-L694) emphasizes, access and exit have not been shown equivalent to effective public participation. Accountability over public purposes remains a separate requirement.

## 13. Does re-scoring keep the system up to date automatically?

It supplies a route to revisit relevance. The current scheduler works through eligible nominations with bounded calls and can skip infeasible evaluations while retaining the standing score. Someone still has to call it, juries must participate, and evidence must remain usable.

Scheduled draws have a different randomness boundary from participant-triggered draws. The former retain caller timing influence; the latter commit before a future block. Neither warrants “unbiasable randomness” as a blanket claim.

## 14. The workshop punished the one expert. What does that show?

That informed dissent can lose under agreement-based grading. Hear the expert's reason before treating the penalty as a mistake by the person. The ledger cannot identify superior knowledge from a score alone.

Today's exercise has no appeal or structured reason field. Use the example to ask what evidence and correction path a real funding system would need. Do not tell people to recuse merely because they disagree.

## 15. You assigned a colluding bloc, then showed that collusion works.

The assigned adversarial group is sampled seat by seat. The banner distinguishes assigned participants from those who revealed the instructed score. Neither a majority nor compliance is guaranteed. Following a role instruction does not show that incentives caused voluntary manipulation; a matching score does not establish motive. The other jurors are not certified honest by their scores.

We introduce a possible attack and inspect what this configuration pays. If it succeeds, discuss capture; if it loses, identify the specific scores and band that caused it. Neither result estimates how common the behavior is or proves the full system secure.

## 16. Does the proof-reporting bounty stop vote buying?

It makes one kind of early disclosure costly in this workshop. A seated juror can report a proof of another juror's sealed score. Ordinary conversation about the policy is not itself such a proof.

A buyer can instead use a public revealed score, a prior agreement or another verification channel. The bounty is not a general bribery solution. More importantly, no commitment-leak report or penalty path was found in the inspected full-system contracts. It must not be advertised as their protection.

The inspected contract binds a reveal to the same juror’s earlier commitment, but accepts early reveals while other jurors can still commit. It therefore does not fully prevent copying. The research blueprint discusses an early-disclosure mechanism; that is a separate source and implementation claim.

## 17. Are sealed scores private from the workshop operator?

Participants trust this hosted service to enforce the protocol. The browser stores the score and salt, the service checks matching reveals, and clients derive the ledger from published records. These checks do not remove operator trust.

The two words are part of a score proof, not a wallet recovery phrase. Losing the local salt can prevent a reveal. Keep proofs private and explain these practical limits before scoring.

## 18. What if a phone sleeps or a participant arrives late?

The cutoff is pressing “Grade”, not the moment a phone sleeps. A phone waking before the cutoff can reveal its stored seal. Later reveals are recorded but excluded. A non-recused seated juror with no timely reveal loses the stake when at least one score opens; if no score opens, the round is void without absence forfeits.

Late arrivals are at stake from the next nominee. In paper play, follow the explicit-recusal workaround in the [facilitator guide](facilitator-guide.md).

## 19. Why let jurors recuse without a penalty?

“Sit this nominee out” lets someone decline without giving a reason, including limited knowledge, discomfort with a role or a preference to observe. The workshop gives no scoring stake, reward or absence fine for an explicit recusal; a previously disclosed proof can still incur its leak penalty.

Concede: confidence and competence are different. Free recusal can remove cautious experts as well as uninformed participants. It is not a selection theorem, and the workshop's recusal behavior should not be projected onto other deployments.

## 20. By the third round, everyone knows the room.

Correct. Sealing hides current scores, not previous outcomes, the roster or discussion. Later rounds may reflect useful calibration, conformity or both.

These six rounds are not six independent experiments. Treat debriefs and observed history as part of the conditions, and avoid causal claims that the exercise cannot distinguish.

## 21. Why not use a panel, deliberation, peer prediction or a lottery?

Those can be appropriate alternatives or complements. This architecture makes evidence, challenge rights, incentives and allocation rules explicit; whether that additional machinery improves a given process must be tested against its alternatives.

A lottery may reduce assessment burden; a deliberative panel may collect richer reasons. Peer-prediction mechanisms have their own rules and assumptions. This scalar coherence game does not inherit another mechanism's truthfulness result simply because both pay participants using others' reports.

## 22. Is this just Kleros?

There is shared intellectual background in Schelling-style coordination. In this architecture an external arbitration system can resolve factual challenges, while a separate scalar relevance process determines policy-relative weights. Naming Kleros is not evidence that a particular court is integrated, appropriately expert or ready for a deployment.

Explain the boundary rather than claiming novelty from sealing alone.

## 23. What is Arrow, and what can it establish?

Arrow is a precursor experiment with invited experts and trusted nominations. It explores relevance scoring and operations under assumptions of competent, honest, non-colluding participants. It does not instantiate the open staked market, accuracy challenges, growing appeal ladder or continuous funding system.

It can inform questions about participation, prompt comprehension, score distributions, coherence and operational execution. Comparing its expert ranking with another funding method supplies a comparison, not a ground-truth verdict. Do not present a positive result as validation of permissionless security.

The current experiment announcement is supplied by [session data](../public/session.js); do not improvise a confirmed partner, exact launch, allocation budget or production-readiness claim. The complete private Arrow protocol was not inspected for this review. Our [public mechanism summary](../public/mechanism/index.html) and [proposed evaluation plan](evaluation-plan.md) let attendees inspect the intended rules and research questions without implying access to that protocol or the private implementation.

## 24. What has actually been validated?

Keep distinct levels of evidence:

- The paper formalizes an architecture and reports conditional calculations and simulations under prescribed strategies and assumptions. These do not establish that freely chosen strategies produce public benefit.
- The historical Truth Post deployment concerned the accuracy layer, not the current integrated funding system.
- Code and tests show implemented rules and exercised cases, not economic safety under every strategy.
- This workshop reveals behavior in a hosted room with points and a selected docket.
- Arrow can collect further behavioral and operational evidence under its trusted-participant assumptions.

The June publication made stronger claims that the September correction withdrew. The October 11 manuscript further distinguishes public benefit from policy fidelity, profits and equilibrium. It specifies no public-welfare objective function and establishes no optimum. Do not attribute these revisions to the archived version, or transfer a paper's result to different contract arithmetic.

## 25. What result today would count against your expectation?

Privately record the expected comparison before play and reveal it only after all compared rounds close. Do not tell participants the expected direction while they can still score. A contrary result counts against that comparison; an early disclosure makes the exercise primed. Dispersion must be interpreted with its mean, response count, recusals and reasons, because the bounded scale mechanically limits variation near its endpoints.

That result alone cannot identify whether the policy, knowledge, incentives or shared interpretation caused it. Ask for reasons and compare them with what was rewarded. Points, a familiar docket and one room do not establish that incentives improve judgment.

The [evaluation plan](evaluation-plan.md) separates comprehension, repeatability, evidence-based updating, correction access and downstream outcomes, each with an independent measure and feasible comparison. It is a proposed plan, not a claim that the private Arrow protocol has been inspected or approved. For the full system, ask which assumptions need separate tests: viable scrutiny, affordable appeals, independent participation, understandable policies and correct integrated settlement. Then compare the behavior participants choose and the resulting decisions with feasible alternatives. Assess whose needs are covered, who is excluded and what consequences follow for users and non-users. Avoid making the proposal immune to contrary evidence.

## 26. The sources disagree. Which version should I use?

Check scope and content, then dates. The pinned October 11 manuscript records the earlier research; version 1.2.0 publishes a later appeal design. Further local hardening remains unpublished. The [source register](presentation-sources.md#appeal-crowdfunding) governs the intended appeal rules in the presentation and aligned working revision. Neither research version replaces the contract specification or turns the paper's funding profile into the implemented mechanism. The Arrow proposal description defines a narrower experiment; its full private protocol was not inspected for this review. The current contracts use continuous funding, proportional nomination deposits and median-based grading. Research funding profiles describe batch allocation and different grading. The workshop deliberately uses another simplified rule set.

For the local exercise, the ledger, policy and session data control. If a slide disagrees with them, acknowledge it and inspect the actual result. Historical thresholds and catalog update times do not overrule current behavior.

## 27. Is the NumPy example an actual funding round?

No. It combines real evidence with an interactive illustration. NumPy's release, delivered features, SciPy's preparation for compatibility and migration costs come from primary records listed in the [evidence register](presentation-sources.md). The nomination, scores, tickets, requested weight, comparison positions and funding parameters are chosen example inputs.

Changing a score really recomputes the weighted mean and relative allocation shown in the deck. Changing grant flow changes the amounts without changing those shares. The appeal button substitutes a twelve-ticket jury's result; the re-score button restores the baseline jury and applies a lower score. Initial and appeal views assume the new nomination's holdback and applicable score finalization are complete. A later rating increase or decrease creates no new holdback. The accuracy button illustrates a debunked counterfactual claim after scoring; this teaching order is not a restriction on when a challenge may begin. It stops future weight and preserves all prior earnings, including unclaimed amounts.

This is a calculation of current rates, not execution of the contracts. It does not draw a jury, enforce eligibility, adjudicate claims, settle deposits, track accumulated balances or move assets. The later live workshop separately exercises relevance scoring with points. Neither demonstration establishes that the integrated funding system is deployed or economically secure.


## 28. Can one project multiply its funding through overlapping nominations?

Distinct registry identifiers do not establish distinct work. The workshop's shared policy requires scoring the contribution identified by each nomination and crediting shared work only once across the set. Separate contributions by the same beneficiary remain possible. A policy assessment can apportion shared credit or assign it to one entry; it must explain that attribution instead of independently crediting the same benefit in full.

For illustration, other active weight of 0.9 and one contribution credited 0.6 produce a 40 percent share. Duplicating the same credit in two entries produces about 57.14 percent combined. Splitting the contribution while keeping total credited weight at 0.6 preserves 40 percent when request caps do not bind. This is a policy guard, not a claim that the smart contract understands the work or enforces semantic uniqueness. Registry admission, deposits and challenges remain separate. Each pool needs its own attribution policy; this example does not impose a protocol-wide duplicate-beneficiary ban.


## 29. What am I agreeing to when I join, and how long is the data kept?

Use an alias. The joining notice explains that aliases, revealed scores and standings are visible to the room, that some rounds assign an adversarial role, and that participants may decline a role, sit a nominee out or watch without joining. These are ordinary choices and need no claim about competence.

Session records remain until the host wipes them; the system supplies no automatic expiry. The facilitator must perform and verify that wipe after the closing discussion. Wiping the room preserves server-side seat authentication and does not remove participants' browser-stored credentials or sealed-score proofs, or recall screenshots. Ask permission before photographing or sharing identifiable results. Joining this teaching exercise is not automatic consent to research reuse or indefinite retention of identifiable data.


## 30. Are you arguing against metrics?

No. A measure can provide useful evidence. Choosing what to measure, how to weight it and what decision follows involves judgment under a purpose. Making those choices inspectable helps others question them. The jury’s numerical score is also a potential target for manipulation; neither using people nor using a number makes an assessment correct. The proposal needs independent tests of evidence use, correction and outcomes.

## 31. How does this relate to the other work presented here?

The assessment workshop makes goals and evidence weights explicit. The Unjournal already commissions paid public expert evaluations and publishes ratings and responses. The Open Source Endowment combines published measures with human due diligence and board approval. Matadisco supports research discovery. These are complementary institutional choices. This proposal explores participation, economic incentives and challenge paths; their relative effectiveness has not been established. See the [conference context and primary sources](presentation-sources.md#conference-observations-and-adjacent-work).

## 32. Does the conference reaction establish demand for your system?

No. The conference memo informs how the presentation addresses this audience. The author has worked on the thesis since 2021; it did not originate at this meeting. The memo is not evidence that attendees endorse this solution, would adopt it or would pay for it. Those require separate observations and tests. The workshop itself can reveal comprehension and experience under its simplified rules, not demand or security of the full system.
