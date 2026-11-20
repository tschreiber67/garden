# Source registry and verification notes

The starter contains **no imported third-party datasets or licensed images**.
The 24 plant entries are editorial illustrations and require field-level
verification before becoming authoritative recommendations.

## Proposed authoritative sources

1. **USDA-ARS / Oregon State University, 2023 Plant Hardiness Zone Map**
   https://planthardiness.ars.usda.gov/
   https://planthardiness.ars.usda.gov/pages/map-creation
   ZIP CSV, grid and shapefile options. This is average annual extreme minimum
   temperature, not a direct planting calendar. Check map-use terms. Modified
   map representations require an explicit disclaimer and removal of the
   USDA-ARS / OSU logos.

2. **NOAA NCEI, 1991–2020 U.S. Climate Normals**
   https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals
   Temperatures, precipitation and station-based freeze statistics. A future
   integration must document station choice, missing data, uncertainty and
   risk threshold (e.g., 50% vs 10% probability).

3. **USDA NRCS PLANTS Database**
   https://plants.sc.egov.usda.gov/
   https://plants.sc.egov.usda.gov/downloads
   https://plants.sc.egov.usda.gov/characteristics-search
   Taxonomy, distributions and a subset of plant characteristics. Coverage
   varies and does not supply a universal edible-crop planting calendar.
   Confirm applicable rights for images and individual sourced materials.

4. **State university Cooperative Extension**
   Examples:
   https://extension.umd.edu/resource/when-plant-vegetables
   https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/planting-the-vegetable-garden
   https://extension.usu.edu/yardandgarden/utah-planting-date-calculator
   Region-specific crop calendars and practices. Public availability does
   not automatically confer permission to reproduce tables or prose. Check
   individual licenses and request permission where necessary; attribute
   original advice or link to it.

## Implementation guardrails

- Separate `hardiness zone`, `last/first freeze`, `soil temperature`, and
  `planting window`: they are distinct variables.
- Distinguish historical climate normals from short-term weather forecasts.
- In warm climates, model multiple planting seasons and summer heat constraints.
- Native range, local invasiveness and legal restrictions require explicit
  geographic screening before any recommendation.
- Keep a source ID, edition/year, retrieval date and licensing note for each
  factual plant attribute and planting rule.
- Keep uncertainty visible. Do not rank a plant as "plant now" without a
  location-aware, crop-aware timing rule.
