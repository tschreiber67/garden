# Plant record schema (v1 seed)

Each `plants[]` record in `catalog.js` uses:

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Stable unique identifier |
| `name`, `scientificName` | string | Common and scientific name |
| `category` | enum | `vegetable`, `herb`, `flower`, `shrub`, `tree`, `native` |
| `emoji`, `description` | string | UI presentation; emoji is not a botanical image |
| `requirements.sun` | enum array | `full`, `part`, `shade` |
| `requirements.water` | enum array | `low`, `medium`, `high` |
| `requirements.soil` | enum array | `loam`, `sand`, `clay` |
| `requirements.spaces` | enum array | `ground`, `raised`, `container` |
| `evidence.status` | string | All starter records are `illustrative` |
| `evidence.sourceIds` | string array | Empty until specific source claims are verified |
| `evidence.reviewedAt` | date/null | Date of source verification |
| `locality.nativeStates` | string array | Unpopulated; never infer national nativity |
| `locality.hardinessZones` | string array | Unpopulated; distinct from planting calendars |
| `locality.plantingWindows` | array | Unpopulated; intended for locale, crop stage, date range, source, confidence |
| `notes` | string | Explicit caveats |

`category=native` is an editorial browsing bucket, **not** a determination
that a plant is native to the user's location. This should eventually be
modeled as an independently computed regional attribute; the broad category
remains only for initial navigational compatibility.

ZIP and month are presently UI state only. The matching algorithm checks
selected site conditions, reports conflicts, and leaves climate/date matching
unimplemented. Missing structured values must never be treated as proof that
a plant is safe or locally suitable.
