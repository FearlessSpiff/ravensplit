# ravensplit

Low profile split version of the raveniung

## Setup

* Install ergogen: `npm install -g ergogen`
* Get footprints from ceoloide: `git clone https://github.com/ceoloide/ergogen-footprints ergogen/footprints/ceoloide`
* For case build install `npm install -g @jscad/cli`

## Build

```bash
cd ergogen
ergogen .
```

or for building including the left case:

```bash
ergogen . && npx @jscad/cli@1 output/cases/LeftCase.jscad -of stla
```

## Notes

* mirror right case and cirque holder!
