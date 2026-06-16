$fn = 30;


tp_h = 1.6;
tp_w = 40.4;
tp_d = 43.4;
tp_r = 2.5;

wall_t = 1;

box_h = 11;
box_w = tp_w + 2*wall_t;
box_d = tp_d + 2*wall_t;
box_r = tp_r + wall_t;

pillar_h = box_h - 1.5;
pillar_overlap = 0.4;

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
        union() {
            difference() {
                rounded_cube(box_w, box_d, box_h, box_r);
                translate([wall_t, wall_t, -1])
                    rounded_cube(tp_w, tp_d, box_h + 2, tp_r);
            }
            // corner pillars
            translate([wall_t + tp_r - pillar_overlap, wall_t + tp_r - pillar_overlap, box_h - pillar_h])
                cylinder(r=tp_r, h=pillar_h);
            translate([wall_t + tp_w - tp_r + pillar_overlap, wall_t + tp_r - pillar_overlap, box_h - pillar_h])
                cylinder(r=tp_r, h=pillar_h);
            translate([wall_t + tp_r - pillar_overlap, wall_t + tp_d - tp_r + pillar_overlap, box_h - pillar_h])
                cylinder(r=tp_r, h=pillar_h);
            translate([wall_t + tp_w - tp_r + pillar_overlap, wall_t + tp_d - tp_r + pillar_overlap, box_h - pillar_h])
                cylinder(r=tp_r, h=pillar_h);
        }
        translate([-5, 7, 9])
            cube([10, 11, 10]);
    }
}

touchpad_case();
