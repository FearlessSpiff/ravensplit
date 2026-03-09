# ravensplit

(MX) Low profile split version of the raveniung

### First time setup

* Install ergogen: `npm install -g ergogen`
* Get footprints from ceoloide: `git clone https://github.com/ceoloide/ergogen-footprints ergogen/footprints/ceoloide`
* For case build install `npm install -g @jscad/cli`

## v0.1 for Cirque Trackpad
### Build

```bash
cd ergogen
cp config-v0.1.yaml config.yaml
ergogen .
```

or for building including the left case:

```bash
ergogen . && npx @jscad/cli@1 output/cases/LeftCase.jscad -of stla
```

### Notes

* mirror right case and cirque holder!

## v0.2 for Azoteq TPS65 touchpad
### Build

```bash
cd ergogen
cp config-v0.2.yaml config.yaml
ergogen .
```

or for building including the left case:

```bash
ergogen . && npx @jscad/cli@1 output/cases/LeftCase.jscad -of stla
```

### Notes

* mirror right case and cirque holder!

### TODO

* Add and route I2C FPC connector
* Verify change switch on/off direction -> Check on printed PCB
* Design new case for Azoteq TPS65
