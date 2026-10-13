# Voluntary fork recovery design

## Status and purpose

This is the current working design for recovery from suspected capture. It consolidates the user's selected rules and defaults chosen under the instruction to resolve fair implementation details without repeated questions. The common-income treatment, claim-execution details and campaign-settlement rules include defaults selected under that delegated judgment rather than separate user votes. It is a specification, not a claim that recovery contracts, a deployment or an end-to-end rehearsal exist. The [red-team review](red-team-2026-10-11.md#r09-external-manipulation-benefits-need-comparison-with-the-security-budget) owns the economic assessment; the [source register](presentation-sources.md#capture-defense-attribution-and-recovery-design) owns attribution to earlier work.

The goal is a reproducible, permissionless route to replacement contracts and a replacement utility token, supported by voluntary adoption and real funding. This is an application fork. It cannot roll back the underlying chain, copy spendable ether (ETH), reclaim completed payments or cancel obligations in original contracts.

## Fork choice and the snapshot

Any group may publish and deploy a fork with its own exclusion list, on reasonable suspicion and without proving misconduct. No adjudicator, committee, captured-majority vote or original operator approves it. Adopters choose whether to support that proposal. Different groups can choose different exclusions. An exclusion is the group's decision, not a verified finding of misconduct.

The recovery snapshot is the latest block before the selected compromised round's start block, confirmed finalized before publication of the package. The package identifies the chain, source contracts, round, start block and exact snapshot block hash. The group selects the suspected incident; the tooling checks the declared boundary and source records, not whether capture occurred. Transactions within the round's start block are not partially replayed into the snapshot.

Later transfers, rewards and penalties do not change replacement entitlements. This can exclude an honest later buyer while leaving the seller with both the sale proceeds and the replacement entitlement. That tradeoff was selected explicitly. The snapshot rule concerns replacement-token units, not ETH migration balances: current source-pool accounting governs migratable ETH.

## Replacement token and claims

The intended recovery preserves honest holdings and excludes attacking holdings. Operationally, the fork preserves included snapshot holdings one-for-one and assigns no replacement allocation for its declared exclusions. Excluded units are not automatically redistributed. This does not guarantee that all honest holders are included, all attackers are excluded or the token retains market value.

Count direct holdings and protocol deposits attributed to each owner exactly once. Include utility tokens locked in original rounds at the snapshot. Their original locks and obligations continue in the original contracts; the replacement does not inherit those locks or release original collateral. Replacement supply must reconcile with the source inventory, declared exclusions and any explicitly unresolved ownership.

A contract's raw token balance is not automatically a beneficial-owner allocation. Custodial and liquidity holdings require an explicit treatment supported by their source records. Never allocate both the underlying contract balance and its users' claims. List unsupported holdings as unresolved during preparation; do not silently omit them or advertise complete preservation. Before commitments open, every unresolved amount must receive a fixed, disclosed claim treatment or be explicitly excluded by the proposing group. Nobody may assign it later by changing the allocation under the same proposal. A launch package must make every included or excluded holding and its claim treatment explicit. Private custody records cannot be independently verified merely by publishing them.

Freeze the complete allocation and claim rules before accepting commitments tied to that proposal. Claims do not expire and cannot be swept by an organizer. Each entitlement can be claimed once. Anyone may relay a claim, but delivery goes only to the recorded owner or a recipient authorized by that owner for the specific chain and claim contract. A contract owner uses its own authorization mechanism; there is no administrator override. Recipient authorization must not permit replay or redirect another owner's allocation.

## Fresh operation and original obligations

The successor starts with fresh assessments. Historical content and decisions remain inspectable but old scores do not become active allocation weights. Ordinary admission, assessment and funding rules govern new activity. A changed policy is visible in the proposal; snapshotting a prior score does not validate it.

Existing bonds, accepted appeal contributions, earned fees, beneficiary entitlements and other protected obligations remain in their original contracts. A fork does not accelerate their release, settle an unfinished appeal chain or turn reserved amounts into available funding. Original contract rules still govern those amounts.

## Funding ownership and migration

Each funder may independently authorize migration of their own remaining attributed contribution to a chosen successor. No other funder's consent or collective vote is required. This grants no authority over another contributor's funds. Actual ETH must move through a supported source-contract operation; historical sponsorship alone is not an implemented withdrawal right. Existing immutable deployments need an already-supported authority or cannot perform that transfer.

Spending reduces current remaining contributed balances proportionally. A new contribution does not inherit earlier spending. For example, Alice contributes 60 ETH and the pool spends 30 ETH. Bob then contributes 40 ETH. A further 35 ETH expense consumes 15 ETH from Alice and 20 ETH from Bob, leaving 15 ETH and 20 ETH respectively. These are remaining contributions, not reimbursement or investment returns.

Contribution-backed reservations retain their original funder attribution. Reserve proportional slices when the commitment is made; those slices cannot also migrate or support another commitment. Charge actual spending to those reserved slices and restore unused amounts to the same funders. For example, a 20 ETH reservation backed 60:40 locks 12 ETH and 8 ETH. If actual spending is 10 ETH, charge 6 ETH and 4 ETH and release the other 6 ETH and 4 ETH to their respective funders. Later depositors receive neither this refund nor the old obligation. Existing retry and release conditions continue to apply.

Protocol income, including challenge-tax inflows and finalized rounding remainders already designated for jury service, remains a separate common service budget. It creates no personal ownership or individual migration claim. Use available common funding first for new service reservations, then use proportional contributed funding for the shortfall. Preserve each source through spending and release. At settlement, consume the reserved common portion first; charge only the remaining actual cost proportionally to the reserved contributor portions. Restore unused common funds to the common budget and unused contributor funds to their original owners. A reservation of 12 ETH common and 10 ETH contributed that incurs an 11 ETH fee therefore restores 1 ETH common and all 10 ETH contributed. Later common income does not rewrite an existing reservation or reimburse earlier spending.

For example, 12 ETH of common funding plus Alice's 60 ETH and Bob's 40 ETH pays a new 22 ETH service expense using the common 12 ETH, then 6 ETH from Alice and 4 ETH from Bob. Their remaining contributions are 54 ETH and 36 ETH. Individual migration cannot take common funds. The cost of this default is that common reserves may remain in the original pool after funders leave; no new collective spending authority is invented to move them.

Migration and funding commitments must preserve the source funds' purpose. A service-budget contribution cannot be relabeled as a personal refund, beneficiary payout or unrestricted organizer payment. Principal, common income, reserved obligations and recipient-owned claims need distinct ledger treatment. Integer accounting must conserve every asset unit and must not turn rounding into newly spendable money; the representation and its bounds require implementation verification.

## Conditional funding campaigns

An optional campaign coordinates funding of one exact proposal. Its immutable terms identify the proposal and allocation commitment, chain, deployed and initialized successor contracts, destination budget, funding purpose, positive target and deadline. Changing those terms requires a new campaign; existing contributions do not follow a replacement proposal automatically. Verifying the destination and its configuration is a technical check, not approval of its exclusions. No upgrade or organizer-controlled switch may change the committed destination, allocation or funding rules after contributions begin.

Count only actual, accounted ETH transferred into escrow. Accept contributions only when included strictly before the deadline; at equality, funding is closed. Accept no contribution above the remaining target; unaccounted transfers and unsupported promises cannot satisfy it. Contributors accept a commitment until success or expiry. There is no early withdrawal, organizer cancellation, deadline extension or discretionary redirection.

A source-pool contribution immediately reserves and transfers the authorizing funder's available attributed ETH into escrow, so it cannot also fund source-pool work or another campaign. Preserve its source, owner and purpose. New wallet contributions follow the campaign's disclosed purpose. Incompatible funds cannot be relabeled to fill the target.

Success occurs when the target is reached strictly before the deadline and the complete campaign funding is atomically accepted by the specified successor with the required ledger attribution. If that transfer fails, the target-reaching transaction rolls back. The predeployed destination avoids relying on a later organizer deployment or a subjective completion test. Activation must preserve each contributor's enforceable attribution without an unbounded loop over all contributors. Each escrow receipt has one terminal outcome: success creates the original funder's attributed successor contribution and extinguishes its refund right; failure restores its source attribution once and creates no successor contribution. Forwarding an aggregate cannot credit an organizer or duplicate either entitlement.

If success has not occurred, expiry creates full-principal refund rights at the deadline without organizer approval. Anyone may trigger a refund, but its source and owner determine the destination. Wallet funding returns to that contributor or their authorized recipient. Migrated source-pool funding restores the same funder's attributed balance and purpose in that source pool; it is not shared among the source pool's current contributors. A failed transfer leaves the refund reserved and retryable. Transaction gas is separate from contributed principal.

Success adds no new post-activation withdrawal lock. Ordinary migration rights and legitimate budget reservations continue. Reaching the target proves that funds arrived at activation; it does not prove that funding will remain indefinitely or that independent people support the fork. Anyone may deploy or fund another fork regardless of this campaign's outcome.

## Verification and practical limits

A recovery package must expose enough source data to reproduce its snapshot, allocation, exclusions, contract identities and funding terms. Code and configuration checks establish what a proposed deployment does; they cannot establish the truth of allegations or future adoption. A first publication, largest wallet count or largest nominal token supply creates no canonical winner.

Required rehearsal cases include:

- reconciliation of direct and deposited holdings without double allocation, with excluded and unresolved holdings visible;
- an honest post-snapshot transfer, a locked original stake and an unsupported custody position;
- one claim executed twice, a relayed claim, unauthorized redirection and a rejecting recipient;
- proportional spending before and after a new contribution, and release of an older reservation after that contribution;
- common funding consumed before contributed funding, with each source preserved on cancellation;
- attempted migration of reserved funds or the same available principal into two campaigns;
- an underfunded expiry, a contribution exactly at the deadline, successful atomic activation and failed destination transfer;
- restoration of a failed campaign's source-pool contribution to its original owner after unrelated pool activity;
- independent package verification and adoption when the original interface or operator refuses to cooperate.

The current repository's workshop application does not implement this recovery path. Contract interfaces, bounded-cost ledger representation, rounding analysis, contract-custody adapters, deployment artifacts and the rehearsal remain implementation work. No claim of completed hostile-capture recovery or proven economic deterrence follows from this specification. A suspected attacker can also try to buy into the replacement; excluding snapshot holdings is not permanent identity exclusion. Valid reservations may leave little free principal to migrate, and the remaining common budget may still pay for activity on the original system. The recovery path does not guarantee recovery of all capital.
