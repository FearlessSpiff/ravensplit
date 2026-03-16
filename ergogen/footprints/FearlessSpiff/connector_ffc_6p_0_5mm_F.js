/*
SPDX-License-Identifier: MIT

To view a copy of this license, visit https://opensource.org/license/mit/

*/
module.exports = {
  params: {
    designator: 'FFC',
    P1: { type: 'net', value: 'P1' },
    P2: { type: 'net', value: 'P2' },
    P3: { type: 'net', value: 'P3' },
    P4: { type: 'net', value: 'P4' },
    P5: { type: 'net', value: 'P5' },
    P6: { type: 'net', value: 'P6' },
  },
  body: p => {
    const footprint = `
    (module FPC-SMD_FPC050A004 (layer F.Cu) (tedit 65F1514D)
      (descr "FearlessSpiff:6 Position FFC 0.5mm, FPC Connector")
      ${p.at /* parametric position */}
      (attr smd)
      (fp_text reference ${p.ref} (at -6.575 -4.585 0) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 1.0 1.0) (thickness 0.15)))
      )
  (fp_line (start -4.5 -1.524) (end -2 -1.524)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start -4.5 0.137) (end -4.5 -1.524)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start -4.5 3.9705) (end -4.5 2.588)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start 4.5 -1.524) (end 2 -1.524)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start 4.5 0.137) (end 4.5 -1.524)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start 4.5 3.9705) (end -4.5 3.9705)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start 4.5 3.9705) (end 4.5 2.588)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_circle (center -2.5 -2) (end -2.627 -2)(stroke (width 0.254) (type default)) (fill none) (layer "F.SilkS"))
  (pad "S1" smd rect (at 3.2 1 ${p.rot}) (size 1.8 2) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "1" smd rect (at -1.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P1.str})
  (pad "2" smd rect (at -0.75 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P2.str})
  (pad "3" smd rect (at -0.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P3.str})
  (pad "4" smd rect (at 0.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P4.str})
  (pad "5" smd rect (at 0.75 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P5.str})
  (pad "6" smd rect (at 1.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P6.str})
  (pad "S2" smd rect (at -3.2 1 ${p.rot}) (size 1.8 2) (layers "F.Cu" "F.Paste" "F.Mask"))
  )
    `
    return footprint;
  }
}
