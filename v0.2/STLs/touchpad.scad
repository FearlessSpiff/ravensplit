$fn = 30;


tp_h = 1.6;
tp_w = 65.0;
tp_d = 49.0;
tp_r = 2.5;
overlay_h = 1;

wall_t = 1;
plate_t = 0.6;

box_h = 14;
box_w = tp_w + 2*wall_t;
box_d = tp_d + 2*wall_t;
box_r = tp_r + wall_t;

module rounded_cube(x, y, z, r) {
    hull() {
        translate([r, r, 0])
        cylinder(r=r, h=z);
        translate([x-r, r, 0])
        cylinder(r=r, h=z);
        translate([x-r, y-r, 0])
        cylinder(r=r, h=z);
        translate([r, y-r, 0])
        cylinder(r=r, h=z);
    }
}


module touchpad_case() {
    difference() {
        rounded_cube(box_w, box_d, box_h, box_r);
        translate([wall_t, wall_t, overlay_h])
            rounded_cube(tp_w, tp_d, box_h, tp_r);
        translate([-5, 5, 9])
            cube([10, 15, 10]);
    }
}

touchpad_case();
