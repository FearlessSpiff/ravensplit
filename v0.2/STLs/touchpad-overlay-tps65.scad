// Laser-cut overlay for Azoteq TPS65 touchpad
// Datasheet (Azoteq ProxSense Standard Trackpad Module Datasheet v1.02, Sep 2016)
// specifies the module as 65.00mm x 49.00mm +/-0.2mm; outline below uses
// 65.40mm x 49.40mm to match the case cutout clearance in touchpad-case-tps65.scad

$fn = 30;

tp_w = 65.4;
tp_d = 49.4;
tp_r = 2.5;

module rounded_rect(x, y, r) {
    hull() {
        translate([r, r])
            circle(r=r);
        translate([x-r, r])
            circle(r=r);
        translate([x-r, y-r])
            circle(r=r);
        translate([r, y-r])
            circle(r=r);
    }
}

rounded_rect(tp_w, tp_d, tp_r);
