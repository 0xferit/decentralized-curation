# Likely questions, and answers grounded in the sources

Start from the full mechanism and its aim of turning private incentives into public benefit. Credible consensus is an intermediate objective. Then say which version a question concerns: today's hosted exercise, the current manuscript, the archived publication, the contract implementation and the planned Arrow experiment have different rules. Agreement alone establishes neither credibility, truth nor public benefit.

## Source order

For implemented behavior, use the [contract snapshot](https://github.com/golemfoundation/octant-v3-monorepo/tree/ca8c8560119dee34f809a31e5149f4a6217467fb), committed September 3, 2026. Its pool and coherence-engine code control implementation claims. This is evidence that code exists, not that it is audited or deployed.

For the current research argument, use the [October 11 manuscript at `9927927`](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd). It incorporates the September equilibrium correction and adds a clearer distinction between private incentives, credible consensus and public benefit. [Zenodo version 1.1.0](https://doi.org/10.5281/zenodo.23298493), published October 11, 2026, is the current archive; the [June version 1.0.4](https://doi.org/10.5281/zenodo.20546399) remains historical. Source links identify the inspected manuscript revision; the archive link identifies the published preprint.

For today's rules, use the [ledger](../public/core.js), [policy and docket](../public/domain.js), and [session facts](../public/session.js). The [red-team report](red-team-2026-10-09.md) describes an earlier workshop band and is not a source for current thresholds. The current follow-up wording is defined once as `SESSION.nextRound`.

## 1. What problem does the full system address?

The aim is to make useful information production, assessment and correction privately rewarding, so that people pursuing their own interests improve public decisions. This requires two links: incentives must induce useful work, and its results must benefit affected people. Neither link follows from participant profits alone. The [current manuscript](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd#L27-L41) treats both as hypotheses to test.

A focused group can study evidence carefully while missing affected people's needs; wider participation can supply both those needs and missing knowledge, without guaranteeing a sound decision. Delegating assessment does not authorize assessors to decide whose interests count. The [research framing](presentation-sources.md#judgment-and-public-accountability) explains this accountability question.

The mechanism separates the work needed before allocation: the creator states the policy; nominations supply claims and evidence; jurors assess relevance; wider participants can fund eligible factual challenges or relevance appeals; allocation follows the resulting weights. An allocation formula cannot repair false evidence or decide what a community should value. Stake does not certify expertise, and the cost of scrutiny can exclude useful voices.

Concede: reliable facts do not remove value disagreement. This is a proposed architecture for a class of information and funding problems, not a solution to governance in general.

## 2. How do truth, credible consensus and public benefit differ?

Public benefit is the final aim. Credible consensus is an intermediate objective: judgments grounded in evidence, assessed under an explicit policy, with usable correction paths. Consensus means a collective result, not unanimity; shared bias can still make it wrong. The protocol does not certify truth, competence or beneficial outcomes. These are the [current manuscript's distinctions](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd#L133-L161).

Accuracy challenges and relevance appeals have different jobs. A factual challenge targets a claim and goes to an external arbitrator. A relevance jury asks how much the contribution matters under this pool's policy. Its score does not certify the claim or establish causal impact.

For example, the [NumPy announcement](https://numpy.org/news/#numpy-2-0-0-released) establishes that version 2.0.0 shipped on 16 June 2024. The policy still governs the relevance of NumPy's work. Whether the release caused additional scientific progress is a further evidential question.

Avoid describing a pool's ruling as a universal, protocol-wide truth verdict. Evidence policies, claims and adjudication remain concrete dependencies. Separately accepted claims can also contradict one another: the design has no cross-item consistency test. Nor does faithful application of a policy establish that the policy serves affected people.

## 3. How does a score become money?

In the current contracts, effective weight is the lower of the nominator's requested weight and the curated score. The ongoing funding flow is divided across earning weights. New or increased weight waits through a holdback; a decrease takes effect immediately. Funds accrue and are claimed by the fixed beneficiary.

A score is neither a price nor a fixed percentage of the budget. Two nominations with equal effective weights share equally; adding another earning nomination changes their relative shares. No weight means no retrospective earnings for that interval.

The default worked example makes this visible: NumPy's 0.60 score yields 40 of the illustrative 100 units released per day, because the total effective weight is 1.50. The 0.70 appeal result yields 43.75 units; a 0.30 re-score yields 25. These are calculated accrual rates after any required holdback, not automatic daily transfers or real NumPy funding. The deck owns the example inputs.

Source: [weight rule](https://github.com/golemfoundation/octant-v3-monorepo/blob/ca8c8560119dee34f809a31e5149f4a6217467fb/packages/contracts/src/libraries/Weights.sol) and [pool implementation](https://github.com/golemfoundation/octant-v3-monorepo/blob/ca8c8560119dee34f809a31e5149f4a6217467fb/packages/contracts/src/Pool.sol).

## 4. Why distinguish the relevance score from juror grading?

They perform different jobs. The deepest completed relevance round supplies a weighted mean for the nomination's score. Economic grading instead uses that round's weighted median and median absolute deviation, with a minimum width, to assess reports across the case.

The workshop uses a mean and standard deviation, with reward shares based on closeness. Those visuals illustrate incentives in this exercise; they are not the current contract formula.

A central score can also hide two clusters of judgment. Read the individual scores and reasons, not just the aggregate. A payment band is not a confidence interval.

## 5. What is the nominator risking, and is it the same asset as curator stake?

The current implementation takes a nomination deposit proportional to requested weight, plus a curation fee, in the funding asset. Curators deposit the separately configured stake asset to obtain tickets and back their reports. Challenge counter-stakes and relevance-appeal bonds use the funding asset.

Do not conflate every deposit with the curator token. Nor does posting a deposit demonstrate that evidence is sound: it creates an exposure governed by challenge rules.

## 6. Does paying for agreement reward conformity?

It can. The intended focal point is the public policy applied to evidence, but participants may instead coordinate on a shared bias or an easy response. A clear prompt helps people understand the task; it does not establish honest reporting as a best response.

The September correction withdrew the earlier equilibrium guarantee. The [current manuscript](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd#L372-L390) retains its profitable variance-padding deviation for the paper's mean/standard-deviation, dispersion-scaled reward rule. That defect is not automatically an exploit of the median-based contracts or today's flat-base-reward exercise. Each rule set needs its own analysis.

A truthful-reporting defect does not by itself establish the system's net public effect. A strategically imperfect mechanism could improve on feasible alternatives; the paper establishes neither that improvement nor its absence. Compare information quality, participation costs and downstream consequences.

Avoid saying that incentives “make honesty rational” without assumptions and a valid result for the exact mechanism.

## 7. Does stake prevent fake identities and capture?

Stake weights capital, not people. Splitting an unchanged token balance among addresses does not create extra capital, but the mechanism does not certify identity, independence or competence. One curator can hold multiple drawn seats.

Concentrated or cheaply acquired stake remains a capture risk. A random sample does not reduce a coalition's expected stake share; it changes the realized jury. More seats are not necessarily more independent views.

The current code's tests explicitly include a majority bloc that controls grading and penalizes an honest minority. Do not present a universal safe coalition threshold.

## 8. How can an appeal help an informed minority?

Anyone may file a relevance appeal in the current implementation, including someone outside the jury. The appellant posts a funding-asset bond and a sealed prediction. A larger child jury is drawn, excluding the appellant's own tickets. The deepest completed result becomes the score; its reference grades reports across the case.

The prediction is a separate economic bet. Its refund depends on beating the prior score by the required margin; a lost bet does not invalidate the child jury's result.

Concede: a larger jury helps only if it supplies useful additional judgment. Appeals cost money and time, and can reproduce a pool-wide bias. There is no configured depth ceiling, but available stake, participation and implementation bounds still constrain escalation.

Source: [coherence engine](https://github.com/golemfoundation/octant-v3-monorepo/blob/ca8c8560119dee34f809a31e5149f4a6217467fb/packages/contracts/src/CoherenceEngine.sol).

## 9. What happens during an accuracy dispute?

The nomination must already be scored or active and have no open relevance case. The challenger pays counter-stake and a flat tax in the funding asset, plus the external arbitrator's fee. Current contracts let accrual continue, but withhold claiming and certain exit operations while the dispute is pending.

If the claim is debunked, its weight stops, unclaimed accrual returns to the open pool budget, and the challenger receives the nomination deposit and their counter-stake. If the challenge fails, the nomination resumes and the nominator receives the counter-stake. A timeout bounds detention when an arbitrator does not respond. Payments already made are not clawed back.

This differs from older descriptions that immediately removed disputed weight. Do not mix the two.

The NumPy example deliberately adds a false assertion about unchanged binary compatibility to show this separate branch. It is not an accusation that NumPy made that assertion, and the button is not an actual arbitration. Its documented release date remains supported.

Debunking and a zero relevance score have different meanings: debunking preserves the last relevance score, stops earning weight and returns unclaimed accrual to an open pool. A relevance cut alone preserves earlier accrual.

## 10. Will people investigate false claims if investigation is expensive?

Not necessarily. A profitable dispute after discovering a falsehood does not pay for all the unsuccessful investigations needed to find one. Evidence access, investigation cost, arbitration fees, expected recovery and retaliation concerns matter.

The architecture permits scrutiny; it does not guarantee a sufficient supply of it. A deployment needs to test those incentives and the external arbitrator's competence and availability.

## 11. Can challenges or appeals be used to harass a project?

Yes, they introduce delay and participation costs as well as correction paths. Counter-stakes, fees, prediction requirements and timeouts impose constraints, but they do not prove that all harassment is uneconomic.

Evaluate the exact path and who bears each cost. “There is a bond” is not a complete answer to griefing.

## 12. Who chooses the policy, and can they change the rules later?

A pool creator chooses the policy, terms and dependencies; people choose which pool to use. Publishing a policy makes it inspectable. It does not establish that affected people chose it or that it represents everyone's needs. Current contracts make economic parameters immutable and require a new pool for a new version. Human-readable policy and evidence remain outside the contract's semantic understanding: code enforces procedures and financial consequences, not the meaning or achievement of public benefit.

A configured temporary circuit breaker is a specific exception: its holder can stop future accrual within the defined powers, without rewriting weights or taking already-accrued funds. That authority must be disclosed.

Pool choice does not automatically correct a bad policy. Participants must recognize the problem, find a funded alternative and coordinate a move. People affected by the outcome may lack stake or be absent from the readership. As the [Dewey discussion](https://github.com/0xferit/manuscript-decentralized-curation/blob/9927927cebd11f3b4e66f80bebee65b3248af919/paper.qmd#L686-L694) emphasizes, access and exit have not been shown equivalent to effective public participation. Accountability over public purposes remains a separate requirement.

## 13. Does re-scoring keep the system up to date automatically?

It supplies a route to revisit relevance. The current scheduler works through eligible nominations with bounded calls and can skip infeasible evaluations while retaining the standing score. Someone still has to call it, juries must participate, and evidence must remain usable.

Scheduled draws have a different randomness boundary from participant-triggered draws. The former retain caller timing influence; the latter commit before a future block. Neither warrants “unbiasable randomness” as a blanket claim.

## 14. The workshop punished the one expert. What does that show?

That informed dissent can lose under agreement-based grading. Hear the expert's reason before treating the penalty as a mistake by the person. The ledger cannot identify superior knowledge from a score alone.

Today's exercise has no appeal or structured reason field. Use the example to ask what evidence and correction path a real funding system would need. Do not tell people to recuse merely because they disagree.

## 15. You assigned a colluding bloc, then showed that collusion works.

The live bloc is sampled seat by seat. The banner distinguishes assigned participants from those who revealed the instructed score. Neither a majority nor compliance is guaranteed, and a matching score does not establish motive.

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

It lets someone who lacks knowledge avoid presenting a guess as an informed score. The workshop gives no scoring stake, reward or absence fine for an explicit recusal.

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

The current experiment announcement is supplied by [session data](../public/session.js); do not improvise a confirmed partner, exact launch, allocation budget or production-readiness claim.

## 24. What has actually been validated?

Keep distinct levels of evidence:

- The paper formalizes an architecture and reports conditional calculations and simulations under prescribed strategies and assumptions. These do not establish that freely chosen strategies produce public benefit.
- The historical Truth Post deployment concerned the accuracy layer, not the current integrated funding system.
- Code and tests show implemented rules and exercised cases, not economic safety under every strategy.
- This workshop reveals behavior in a hosted room with points and a selected docket.
- Arrow can collect further behavioral and operational evidence under its trusted-participant assumptions.

The June publication made stronger claims that the September correction withdrew. The October 11 manuscript further distinguishes public benefit from policy fidelity, profits and equilibrium. It specifies no public-welfare objective function and establishes no optimum. Do not attribute these revisions to the archived version, or transfer a paper's result to different contract arithmetic.

## 25. What result today would count against your expectation?

Before play, predict that the portable document format round's band will be wider than both Inkscape's and Linux's. If that does not happen, the comparative prediction fails.

That result alone cannot identify whether the policy, knowledge, incentives or shared interpretation caused it. Ask for reasons and compare them with what was rewarded. Points, a familiar docket and one room do not establish that incentives improve judgment.

For the full system, ask which assumptions need separate tests: viable scrutiny, affordable appeals, independent participation, understandable policies and correct integrated settlement. Then compare the behavior participants choose and the resulting decisions with feasible alternatives. Assess whose needs are covered, who is excluded and what consequences follow for users and non-users. Avoid making the proposal immune to contrary evidence.

## 26. The sources disagree. Which version should I use?

Check scope and content, then dates. The October 11 manuscript controls current research claims; it does not replace the contract specification or turn the paper's funding profile into the implemented mechanism. A newer Arrow plan defines a narrower experiment. The current contracts use continuous funding, proportional nomination deposits and median-based grading. Research funding profiles describe batch allocation and different grading. The workshop deliberately uses another simplified rule set.

For the local exercise, the ledger, policy and session data control. If a slide disagrees with them, acknowledge it and inspect the actual result. Historical thresholds and catalog update times do not overrule current behavior.

## 27. Is the NumPy example an actual funding round?

No. It combines real evidence with an interactive illustration. NumPy's release, delivered features, SciPy's preparation for compatibility and migration costs come from primary records listed in the [evidence register](presentation-sources.md). The nomination, scores, tickets, requested weight, comparison positions and funding parameters are chosen example inputs.

Changing a score really recomputes the weighted mean and allocation shown in the deck. The appeal button substitutes a twelve-ticket jury's result; the re-score button restores the baseline jury and applies a lower score. Initial and appeal views assume finalization and the required holdback are complete. The accuracy button illustrates a debunked counterfactual claim after the relevance case closes. It stops future weight and returns unclaimed accrual, while prior payments remain paid.

This is a calculation of current rates, not execution of the contracts. It does not draw a jury, enforce eligibility, adjudicate claims, settle deposits, track accumulated balances or move assets. The later live workshop separately exercises relevance scoring with points. Neither demonstration establishes that the integrated funding system is deployed or economically secure.
