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
    P7: { type: 'net', value: 'P7' },
    P8: { type: 'net', value: 'P8' },
    P9: { type: 'net', value: 'P9' },
    P10: { type: 'net', value: 'P10' },
    P11: { type: 'net', value: 'P11' },
    P12: { type: 'net', value: 'P12' },
  },
  body: p => {
    const footprint = `
    (module FPC-SMD_FPC05012-09200 (layer F.Cu) (tedit 65F1514D)
      (descr "FearlessSpiff:12 Position FFC 0.5mm, FPC Connector")
      ${p.at /* parametric position */}
      (attr smd)
      (fp_text reference ${p.ref} (at -6.575 -4.585 0) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 1.0 1.0) (thickness 0.15)))
      )
  (fp_line (start -5.5 -1.524) (end -3.131 -1.524)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start -5.5 0.137) (end -5.5 -1.524)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start -5.5 3.9705) (end -5.5 2.588)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start 5.5 -1.524) (end 3.131 -1.524)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start 5.5 0.137) (end 5.5 -1.524)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start 5.5 3.9705) (end -5.5 3.9705)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_line (start 5.5 3.9705) (end 5.5 2.588)(stroke (width 0.254) (type default)) (layer "F.SilkS"))
  (fp_circle (center 3.429 -2.032) (end 3.302 -2.032)(stroke (width 0.254) (type default)) (fill none) (layer "F.SilkS"))
  (pad "S2" smd rect (at 4.95 1.3625 ${p.rot}) (size 2.2 2) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "12" smd rect (at -2.75 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P12.str})
  (pad "11" smd rect (at -2.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P11.str})
  (pad "10" smd rect (at -1.75 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P10.str})
  (pad "9" smd rect (at -1.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P9.str})
  (pad "8" smd rect (at -0.75 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P8.str})
  (pad "7" smd rect (at -0.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P7.str})
  (pad "6" smd rect (at 0.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P6.str})
  (pad "5" smd rect (at 0.75 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P5.str})
  (pad "4" smd rect (at 1.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P4.str})
  (pad "3" smd rect (at 1.75 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P3.str})
  (pad "2" smd rect (at 2.25 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P2.str})
  (pad "1" smd rect (at 2.75 -1.3625 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P1.str})
  (pad "S1" smd rect (at -4.95 1.3625 ${p.rot}) (size 2.2 2) (layers "F.Cu" "F.Paste" "F.Mask"))
  )
    `
    return footprint;
  }
}
