# Public-goods funding (PGF)

_An application of the Decentralized Curation framework._

This one-page workflow shows the ongoing-funding application used in the presentation. Its accuracy gate controls nomination eligibility; its relevance gate supplies policy-relative weights before any beneficiary budget is required. Eligible weights can be normalized into allocation shares; any later funding can use them. These two gates describe this application, not the full scope of the framework. Other funding profiles can have different allocation rules.

```mermaid
flowchart TB
    accTitle: Public-goods funding application workflow
    accDescr: An ongoing-funding application of the broader Decentralized Curation framework. Nominations remain subject to accuracy challenges while relevance juries and appeals produce scores that determine eligible funding weights, accrual and beneficiary claims.
    subgraph publication["Publish under declared rules"]
        define_policy["POOL CREATOR<br/>Define purpose and policy<br/>Evidence requirements<br/>and fixed economic rules"]
        publish_nomination["NOMINATOR<br/>Publish claims and evidence<br/>Identify contribution and beneficiary<br/>Request a weight; post the bond"]
        fund_pool["POOL FUNDERS<br/>Fund the costs of curation<br/>Distribution budget may come later"]
    end
    subgraph accuracy_gate["ACCURACY GATE: can the claims withstand challenge?"]
        provisional_eligibility["PROTOCOL<br/>Check bond and structural rules<br/>Admit the nomination provisionally<br/>No prior truth approval"]
        file_challenge["PUBLIC CHALLENGER<br/>Any time while nomination is active<br/>Contest false or non-falsifiable claims<br/>Post counter-stake, tax and fees"]
        external_arbitration["ARBITRATOR + PROTOCOL<br/>Arbitrator examines the dispute<br/>Existing earning continues<br/>Earned funds stay claimable<br/>Later nomination exit queues"]
        challenge_upheld{"EXTERNAL ARBITRATOR<br/>Challenge<br/>upheld?"}
        close_nomination["PROTOCOL<br/>Close the failed nomination<br/>Bond to challenger; future funding stops<br/>Accrued funding remains owed"]
        resume_nomination["PROTOCOL<br/>Resume the nomination<br/>Counter-stake to the nominator<br/>Queued exit may then proceed"]
        arbitration_timeout["PROTOCOL<br/>Apply existing timeout rules<br/>Limit detention; no truth approval"]
    end
    subgraph relevance_gate["RELEVANCE GATE: how much does the contribution matter?"]
        draw_jury["PROTOCOL + CURATORS<br/>Curators stake to join the draw<br/>Protocol selects the jury<br/>Curators assess, commit and reveal"]
        sufficient_quorum{"PROTOCOL<br/>At least 80%<br/>valid reveal weight?"}
        failed_round["PROTOCOL<br/>Record failure; no ruling or fee<br/>Complete required failure steps<br/>Allow retry under round rules"]
        issue_ruling["PROTOCOL<br/>After early-disclosure<br/>reporting window closes<br/>Compute weighted-mean score<br/>Credit fees per valid revealed seat"]
        open_appeal["PUBLIC APPEAL BACKERS<br/>Propose and fund score positions<br/>Protocol enforces the windows<br/>One position per distinct score"]
        funded_positions{"PROTOCOL<br/>Fully funded<br/>score positions?"}
        larger_jury["PROTOCOL + CURATORS<br/>Combine backing; draw larger jury<br/>Double the previous planned seats<br/>Curators use the same judging process"]
        final_score["PROTOCOL<br/>0: retain issued score<br/>1: adopt funded score<br/>Settle adjudicated pots<br/>Backers collect payouts"]
    end
    subgraph funding["Allocate funding and preserve accrued claims"]
        adopt_funding_score["PROTOCOL<br/>Use this revision's adopted score<br/>Produce curated weights<br/>Distribution budget optional"]
        compute_funding_weight["PROTOCOL<br/>Cap by request and score<br/>Normalize eligible weights<br/>Positive total: shares sum to 1<br/>Zero total: no allocation"]
        allocate_funding["PROTOCOL + BENEFICIARIES<br/>Apply funding when available<br/>New nominations serve holdback<br/>Earned funds are immediately claimable"]
    end
    define_policy --> publish_nomination
    fund_pool -->|Optional funding| allocate_funding
    publish_nomination --> provisional_eligibility
    provisional_eligibility -->|Continue while eligible| draw_jury
    provisional_eligibility -.-> file_challenge
    file_challenge --> external_arbitration
    external_arbitration --> challenge_upheld
    external_arbitration -->|Timeout| arbitration_timeout
    challenge_upheld -->|Upheld| close_nomination
    challenge_upheld -->|Rejected| resume_nomination
    resume_nomination -.->|Restore eligibility| provisional_eligibility
    close_nomination -.->|New nomination; new bond| publish_nomination
    draw_jury --> sufficient_quorum
    sufficient_quorum -->|Not met| failed_round
    failed_round -.->|Retry if allowed| draw_jury
    sufficient_quorum -->|Met| issue_ruling
    issue_ruling --> open_appeal
    open_appeal --> funded_positions
    funded_positions -->|2+ funded scores| larger_jury
    larger_jury -.->|Next appeal jury| draw_jury
    funded_positions -->|0 or 1| final_score
    final_score -->|Final score| adopt_funding_score
    issue_ruling -.->|Apply issued score<br/>Under pool adoption rules| adopt_funding_score
    adopt_funding_score --> compute_funding_weight
    compute_funding_weight --> allocate_funding
    classDef neutral fill:#f3f4f6,stroke:#6b7280,color:#1f2937
    classDef assess fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    classDef decision fill:#fef9c3,stroke:#ca8a04,color:#713f12
    classDef outcome fill:#dcfce7,stroke:#16a34a,color:#14532d
    classDef closed fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
    class define_policy,publish_nomination,fund_pool,arbitration_timeout,provisional_eligibility neutral
    class draw_jury,issue_ruling,open_appeal,larger_jury,adopt_funding_score assess
    class file_challenge,external_arbitration,challenge_upheld,sufficient_quorum,funded_positions,failed_round decision
    class resume_nomination,final_score,compute_funding_weight,allocate_funding outcome
    class close_nomination closed
```

Curation and beneficiary funding are separate. Raw effective weights need not sum to one. For each eligible nomination, normalize its effective weight by the positive total to obtain its allocation share. These shares sum to one; an available or later beneficiary budget multiplies them. With no positive eligible weight, there is no allocation vector. Holdback affects earning eligibility, not whether scores can be curated. Curation costs must be funded. The budget distributed to beneficiaries is optional upfront and may arrive later. Bonds, jury-service funding and appeal backing retain their own requirements.

## Actors

Each node begins with its responsible actor. Protocol denotes enforced rules that execute when called; it is not a person, an autonomous evaluator or a substitute for the jury. Pool creators define terms; funders supply capital; nominators post claims and bonds; curators assess relevance; public backers fund appeals; challengers contest factual claims; external arbitrators decide those disputes; beneficiaries claim eligible accrued funding. These roles may overlap.

## Reading the gates

**Accuracy is optimistic and remains challengeable.** Its initial path does not certify truth or require a pre-publication reviewer. A factual challenge can begin at any time while the nomination is active, including before its first relevance score and during a relevance assessment or appeal. A withdrawn nomination is inactive and cannot receive a new challenge. Debunking is nomination-specific: the author may submit a fresh nomination with a new bond under ordinary rules; all funding earned before closure remains owed, whether already paid or still unclaimed. The forfeited nomination bond is separate from those earnings.

**Relevance is scalar.** The jury applies the declared policy; it does not certify factual truth. Quorum needs a nonempty draw and valid timely reveals covering at least 80% of the original drawn weight. Drawn attempts complete the fixed early-disclosure reporting window after the reveal deadline and before issuance or failure settlement. This window allows qualifying evidence of premature score disclosure to be submitted and validated. Appeal quorum failures permit unlimited same-target retries; ordinary retries follow the pool's rules.

**Appeal outcomes and money.** At least two fully funded distinct scores share one jury and pot, once admission closes and all funding outcomes are known. With none funded, the old score stands and partial contributions are refundable. With one funded, its score wins by forfeiture, with a full refund and no jury fee or profit on that position; forfeiture is not consensus. Each adjudicated pot settles at chain finality against the ultimate final score, net of any jury-fee shortfall. Payout weights use inverse distance; a unique exact prediction receives the net pot. Backers split their position's payout pro rata. Earned jury service fees become claimable at issuance, separately from locked backer pots.

**Funding and later correction.** The pool's adoption rules determine when this nomination revision's score affects funding; score adoption is separate from final settlement of appeal backer pots. Effective funding weight is the lower of requested weight and the adopted score. Eligible positive weights divide the distributable flow proportionally; a sole eligible positive weight receives the full flow. A permitted later relevance assessment re-enters the relevance gate and can change future funding. A factual closure stops the nomination's future earning eligibility without erasing its accrued funding, relevance history or an already protected contested appeal chain. Its beneficiary can immediately claim accrued funding, including while an accuracy dispute is pending and after debunking. Holdback applies only to new nominations before earning starts; later rating changes create no new holdback, and earned money is never locked by holdback. Later relevance outcomes cannot restore a closed nomination's eligibility. Detailed withdrawal, fork-recovery, revision and payment-rounding rules are outside this overview.

**Nomination withdrawal.** A withdrawal of the nomination is an exit, not a claim on earnings. If requested after an accuracy dispute starts, it queues behind that dispute. If the dispute debunks the nomination, the queued exit is cancelled because the nomination has already closed. If the challenge is rejected, the queued exit may proceed under the ordinary rules. Earned-funding claims remain available throughout.

**Assets.** A dedicated utility token backs juror availability, incoherence penalties and coherence rewards. Rewards redistribute penalties without minting. Ether (ETH) pays jury service and supplies the other financial flows.

## Scope and sources

This is the intended ongoing-funding application of Decentralized Curation, not a complete framework diagram or a claim that the rules are deployed, audited or economically validated. The hosted workshop demonstrates scoring only. Agreement is not proof of truth or public benefit. The working paper's retroactive batch-funding profile is outside this flowchart.

The diagram follows the working presentation's source register and likely-questions notes. The public [mechanism and evidence summary](https://decentralized-curation.0xferit.workers.dev/mechanism/) explains the audience-facing scope. Solid navy arrows show the main sequence. Amber arrows show challenge and decision branches. Dashed purple arrows show returns or conditional paths. Teal shows pool-budget funding. Arrowheads mark destinations; a crossing without a dot is not a junction.
