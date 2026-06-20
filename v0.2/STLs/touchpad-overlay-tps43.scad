// Laser-cut overlay for Azoteq TPS43 touchpad
// Source: Azoteq ProxSense Trackpad Module Datasheet Rev 1.06 (Aug 2025)
// TPS43 sensor outline: 40.30mm x 43.30mm, rounded corners

$fn = 30;

tp_w = 40.4;
tp_d = 43.4;
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
