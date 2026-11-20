Garden Guide Session 1 Starter

This is a locally runnable prototype for a US home gardening guide. No installation, an account, API keys, or external dependencies.

RUNNING THE APPLICATION

Open index.html in a browser or open a command prompt in the project directory, run python3 -m http.server 8000, and visit http://localhost:8000. On Windows, py -m http.server 8000 may be used.

CURRENT FEATURES

The application accepts a US ZIP code, planting month, plant category, sun exposure, water availability, soil type, and growing space.

It includes 24 illustrative plants across vegetables, herbs, flowers, shrubs, trees, and native plants. Users can search the catalog, filter by site conditions, review matching conflicts, and open individual plant details.

The plant catalog is maintained separately from the interface and can be expanded with verified source data later.

CURRENT LIMITATIONS

This version is a candidate explorer, not a validated planting calendar. ZIP codes and planting months are captured but are not yet used to calculate location-specific recommendations.

No local hardiness zone, frost date, temperature, native range, invasive species, or cultivar suitability analysis has been implemented.

The initial plant records are illustrative examples. They have not been verified against the government datasets listed in SOURCES.md. Results must not be interpreted as instructions to plant now.

TESTING

With Node.js 18 or later installed, run node --test tests/catalog.test.mjs from the project directory.

PROJECT FILES

index.html contains the application interface.
styles.css contains the visual styling.
catalog.js contains the initial plant records.
app.js contains application behavior and matching logic.
schema.md describes the plant data structure.
SOURCES.md lists potential government and university sources and usage restrictions.
SESSION_LOG.md records completed work and limitations.
tests/catalog.test.mjs validates the starter catalog structure.

FUTURE SESSIONS

After each session, inspect the complete updated project and test it locally. Record the work and any limitations in SESSION_LOG.md. Choose only one bounded task for the next session.

When a new ZIP is needed, create it from the actual completed project and include unchanged source files and tests. Keep .gitignore. Exclude .git, node_modules, generated builds, caches, credentials, proprietary materials, and unnecessary files.
